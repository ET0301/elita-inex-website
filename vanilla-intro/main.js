// ------------------------------------------------------------------
// CONFIGURATION
// ------------------------------------------------------------------
const CONFIG = {
    camera: {
        fov: 45,
        startX: 0,
        startY: 1,
        startZ: 6,
        endZ: 4 // Dolly in target
    },
    colors: {
        sky: 0xe0e0e0,
        wall: 0xf5f5f5,
        metal: 0x333333,
        fabric: 0xaa7e5e, // Bronze/Tan
        ground: 0xcccccc
    },
    shadows: {
        enabled: true,
        mapSize: 2048
    }
};

// ------------------------------------------------------------------
// SCENE SETUP
// ------------------------------------------------------------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.colors.metal); // Faed in from dark
scene.fog = new THREE.Fog(CONFIG.colors.metal, 5, 20);

const camera = new THREE.PerspectiveCamera(CONFIG.camera.fov, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(CONFIG.camera.startX, CONFIG.camera.startY, CONFIG.camera.startZ);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = CONFIG.shadows.enabled;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// ------------------------------------------------------------------
// LIGHTING
// ------------------------------------------------------------------
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
sunLight.position.set(5, 10, 5);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = CONFIG.shadows.mapSize;
sunLight.shadow.mapSize.height = CONFIG.shadows.mapSize;
sunLight.shadow.bias = -0.0001;
scene.add(sunLight);

// ------------------------------------------------------------------
// OBJECTS
// ------------------------------------------------------------------

// 1. Building Façade
const wallGeo = new THREE.PlaneGeometry(20, 10);
const wallMat = new THREE.MeshStandardMaterial({ color: CONFIG.colors.wall, roughness: 0.9 });
const wall = new THREE.Mesh(wallGeo, wallMat);
wall.receiveShadow = true;
scene.add(wall);

// 2. Window / Storefront
const windowFrameGeo = new THREE.BoxGeometry(3, 2.5, 0.2);
const windowFrameMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.2 });
const windowFrame = new THREE.Mesh(windowFrameGeo, windowFrameMat);
windowFrame.position.set(0, 0, 0.1);
windowFrame.receiveShadow = true;
windowFrame.castShadow = true;
scene.add(windowFrame);

const glassGeo = new THREE.PlaneGeometry(2.8, 2.3);
const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x88ccff,
    metalness: 0.9,
    roughness: 0.05,
    transmission: 0.2,
    transparent: true
});
const glass = new THREE.Mesh(glassGeo, glassMat);
glass.position.set(0, 0, 0.21);
scene.add(glass);

// 3. Awning Group
const awningGroup = new THREE.Group();
awningGroup.position.set(0, 1.5, 0.25); // Mounted above window
scene.add(awningGroup);

// Cassette (Housing)
const cassetteGeo = new THREE.BoxGeometry(3.2, 0.3, 0.3);
const metalMat = new THREE.MeshStandardMaterial({ color: CONFIG.colors.metal, roughness: 0.4, metalness: 0.6 });
const cassette = new THREE.Mesh(cassetteGeo, metalMat);
cassette.castShadow = true;
cassette.receiveShadow = true;
awningGroup.add(cassette);

// Arms (Left & Right)
// Pivot points are crucial for rotation
const armLength = 1.2;
const armWidth = 0.05;

function createArm(xPos) {
    const armGroup = new THREE.Group();
    armGroup.position.set(xPos, -0.1, 0.1);

    // Upper Arm
    const upperArmGeo = new THREE.BoxGeometry(armWidth, armWidth, armLength / 2);
    const upperArm = new THREE.Mesh(upperArmGeo, metalMat);
    upperArm.position.set(0, 0, armLength / 4); // Offset so pivot is at start
    upperArm.castShadow = true;

    // Elbow Joint (simple sphere)
    const elbow = new THREE.Mesh(new THREE.SphereGeometry(armWidth, 8, 8), metalMat);
    elbow.position.set(0, 0, armLength / 2);

    // Forearm
    const forearmGeo = new THREE.BoxGeometry(armWidth, armWidth, armLength / 2);
    const forearm = new THREE.Mesh(forearmGeo, metalMat);
    forearm.position.set(0, 0, armLength / 4); // Relative to elbow

    // Structure: Base -> UpperArmPivot -> UpperArm -> ElbowPivot -> Forearm
    const pivot = new THREE.Group(); // Main pivot at wall
    pivot.add(upperArm);
    upperArm.add(elbow);
    elbow.add(forearm);

    armGroup.add(pivot);
    return { root: armGroup, pivot: pivot, elbow: elbow, forearm: forearm };
}

const leftArm = createArm(-1.4);
const rightArm = createArm(1.4);
awningGroup.add(leftArm.root);
awningGroup.add(rightArm.root);

// Fabric Canopy
// We simulate extension by scaling a plane
const fabricGeo = new THREE.PlaneGeometry(3.1, armLength);
// Shift center so it scales from top edge
fabricGeo.translate(0, -armLength / 2, 0);

const fabricMat = new THREE.MeshStandardMaterial({
    color: CONFIG.colors.fabric,
    roughness: 0.9,
    side: THREE.DoubleSide
});
const fabric = new THREE.Mesh(fabricGeo, fabricMat);
fabric.position.set(0, 0, 0); // Start at cassette
fabric.rotation.x = Math.PI / 2; // Flat initially
fabric.scale.y = 0; // Retracted
fabric.castShadow = true;
awningGroup.add(fabric);

// Front Bar
const frontBarGeo = new THREE.BoxGeometry(3.2, 0.1, 0.1);
const frontBar = new THREE.Mesh(frontBarGeo, metalMat);
frontBar.position.set(0, 0, 0); // Follows fabric tip
frontBar.castShadow = true;
awningGroup.add(frontBar);


// ------------------------------------------------------------------
// ANIMATION LOGIC (GSAP)
// ------------------------------------------------------------------

const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

// 1. Scene Fade In
tl.to(scene.background, { r: 1, g: 1, b: 1, duration: 2 }) // Fade to white/gray
    .to(scene.fog.color, { r: 1, g: 1, b: 1, duration: 2 }, "<");

// 2. Camera Dolly
gsap.to(camera.position, {
    z: CONFIG.camera.endZ,
    duration: 8,
    ease: "power1.out"
});

// 3. Awning Deployment
const deployDuration = 3;
// Fabric Extension
tl.to(fabric.scale, { y: 1, duration: deployDuration }, "-=1.5");
// Front Bar Movement (matches fabric length + slope)
tl.to(frontBar.position, { z: 1.2, y: -0.2, duration: deployDuration }, "<");
// Fabric Slope
tl.to(fabric.rotation, { x: Math.PI / 2 + 0.2, duration: deployDuration }, "<"); // Angle down

// Arm Unfolding
// Rotate arms to follow
const armRotation = 0.2; // Radians down
tl.to(leftArm.pivot.rotation, { x: armRotation, duration: deployDuration }, "<");
tl.to(rightArm.pivot.rotation, { x: armRotation, duration: deployDuration }, "<");

// 4. UI Reveal
tl.to("#ui-layer", { opacity: 1, duration: 1 });
tl.to("h1", { opacity: 1, y: 0, duration: 0.8 });
tl.to("button", { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 });
tl.add(() => {
    document.getElementById('skip-btn').classList.remove('hidden');
    document.getElementById('skip-btn').classList.add('visible');
}, "+=0.5");


// ------------------------------------------------------------------
// RENDER LOOP
// ------------------------------------------------------------------
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// ------------------------------------------------------------------
// EVENTS
// ------------------------------------------------------------------
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Interactions
function exitIntro() {
    gsap.to("#ui-layer", { opacity: 0, duration: 0.5 });
    gsap.to(scene.fog, { near: 0.1, far: 1, duration: 1 }); // Fade to white fog
    setTimeout(() => {
        console.log("ENTER_SITE");
        // Redirect or remove canvas here
    }, 1000);
}

document.getElementById('explore-btn').addEventListener('click', exitIntro);
document.getElementById('skip-btn').addEventListener('click', exitIntro);

// Enable skip after delay
setTimeout(() => {
    const skip = document.getElementById('skip-btn');
    skip.style.display = 'block';
    gsap.to(skip, { opacity: 0.7, y: 0 });
}, 3000);
