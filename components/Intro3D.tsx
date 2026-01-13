import React, { useRef, useState, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';

// Interactive awning component with gold glow
const InteractiveAwning = ({
  deployProgress,
  hoveredPart,
  onHover
}: {
  deployProgress: React.MutableRefObject<number>;
  hoveredPart: string | null;
  onHover: (part: string | null) => void;
}) => {
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const fabricRef = useRef<THREE.Mesh>(null);
  const frontBarRef = useRef<THREE.Group>(null);
  const cassetteRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const p = deployProgress.current;
    const rotation = THREE.MathUtils.lerp(0, 1.25, p);

    if (leftArmRef.current) {
      leftArmRef.current.rotation.y = -rotation;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.y = rotation;
    }
    if (fabricRef.current) {
      fabricRef.current.scale.y = THREE.MathUtils.lerp(0.01, 1, p);
      fabricRef.current.rotation.x = Math.PI / 2 + THREE.MathUtils.lerp(0, 0.1, p);
    }
    if (frontBarRef.current) {
      frontBarRef.current.position.z = THREE.MathUtils.lerp(0.2, 1.8, p);
      frontBarRef.current.position.y = THREE.MathUtils.lerp(-0.18, -0.45, p);
    }

    // Glow effect on hover
    if (cassetteRef.current) {
      const material = cassetteRef.current.material as THREE.MeshPhysicalMaterial;
      const targetEmissive = hoveredPart === 'cassette' ? 0.1 : 0;
      material.emissiveIntensity = THREE.MathUtils.lerp(
        material.emissiveIntensity,
        targetEmissive,
        0.1
      );
    }
  });

  const goldMaterial = (isHovered: boolean) => (
    <meshPhysicalMaterial
      color="#D4A574"
      emissive="#D4A574"
      emissiveIntensity={isHovered ? 0.8 : 0.4}
      roughness={0.2}
      metalness={1}
      clearcoat={1}
      clearcoatRoughness={0.1}
      envMapIntensity={3}
    />
  );

  return (
    <group>
      {/* Cassette Housing */}
      <mesh
        ref={cassetteRef}
        castShadow
        receiveShadow
        onPointerOver={(e) => { e.stopPropagation(); onHover('cassette'); }}
        onPointerOut={() => onHover(null)}
      >
        <boxGeometry args={[4.2, 0.34, 0.34]} />
        <meshPhysicalMaterial
          color="#080808"
          emissive="#D4A574"
          emissiveIntensity={0}
          roughness={0.5}
          metalness={0.4}
          clearcoat={0.2}
        />
      </mesh>

      {/* Gold edge accents */}
      <group>
        <mesh position={[0, 0.17, 0]}>
          <boxGeometry args={[4.2, 0.015, 0.34]} />
          {goldMaterial(hoveredPart === 'cassette')}
        </mesh>
        <mesh position={[0, -0.17, 0]}>
          <boxGeometry args={[4.2, 0.015, 0.34]} />
          {goldMaterial(hoveredPart === 'cassette')}
        </mesh>
        <mesh position={[-2.1, 0, 0]}>
          <boxGeometry args={[0.025, 0.36, 0.36]} />
          {goldMaterial(hoveredPart === 'cassette')}
        </mesh>
        <mesh position={[2.1, 0, 0]}>
          <boxGeometry args={[0.025, 0.36, 0.36]} />
          {goldMaterial(hoveredPart === 'cassette')}
        </mesh>
      </group>

      {/* Left Arm */}
      <group
        position={[-1.65, -0.17, 0.17]}
        ref={leftArmRef}
        onPointerOver={(e) => { e.stopPropagation(); onHover('leftArm'); }}
        onPointerOut={() => onHover(null)}
      >
        <mesh castShadow>
          <cylinderGeometry args={[0.065, 0.065, 0.13, 32]} />
          {goldMaterial(hoveredPart === 'leftArm')}
        </mesh>
        <group position={[0, -0.065, 0.52]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.055, 0.07, 1.04]} />
            <meshPhysicalMaterial
              color="#0a0a0a"
              roughness={0.4}
              metalness={0.7}
              emissive="#D4A574"
              emissiveIntensity={hoveredPart === 'leftArm' ? 0.2 : 0}
            />
          </mesh>
          <mesh position={[0, 0.035, 0]}>
            <boxGeometry args={[0.057, 0.006, 1.04]} />
            {goldMaterial(hoveredPart === 'leftArm')}
          </mesh>
          <group position={[0, 0, 0.52]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.06, 0.06, 0.11, 32]} />
              {goldMaterial(hoveredPart === 'leftArm')}
            </mesh>
            <group position={[0, 0, 0.52]}>
              <mesh castShadow receiveShadow>
                <boxGeometry args={[0.05, 0.065, 1.04]} />
                <meshPhysicalMaterial
                  color="#0a0a0a"
                  roughness={0.4}
                  metalness={0.7}
                  emissive="#D4A574"
                  emissiveIntensity={hoveredPart === 'leftArm' ? 0.2 : 0}
                />
              </mesh>
              <mesh position={[0, 0.0325, 0]}>
                <boxGeometry args={[0.052, 0.006, 1.04]} />
                {goldMaterial(hoveredPart === 'leftArm')}
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* Right Arm (mirrored) */}
      <group
        position={[1.65, -0.17, 0.17]}
        ref={rightArmRef}
        onPointerOver={(e) => { e.stopPropagation(); onHover('rightArm'); }}
        onPointerOut={() => onHover(null)}
      >
        <mesh castShadow>
          <cylinderGeometry args={[0.065, 0.065, 0.13, 32]} />
          {goldMaterial(hoveredPart === 'rightArm')}
        </mesh>
        <group position={[0, -0.065, 0.52]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.055, 0.07, 1.04]} />
            <meshPhysicalMaterial
              color="#0a0a0a"
              roughness={0.4}
              metalness={0.7}
              emissive="#D4A574"
              emissiveIntensity={hoveredPart === 'rightArm' ? 0.2 : 0}
            />
          </mesh>
          <mesh position={[0, 0.035, 0]}>
            <boxGeometry args={[0.057, 0.006, 1.04]} />
            {goldMaterial(hoveredPart === 'rightArm')}
          </mesh>
          <group position={[0, 0, 0.52]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.06, 0.06, 0.11, 32]} />
              {goldMaterial(hoveredPart === 'rightArm')}
            </mesh>
            <group position={[0, 0, 0.52]}>
              <mesh castShadow receiveShadow>
                <boxGeometry args={[0.05, 0.065, 1.04]} />
                <meshPhysicalMaterial
                  color="#0a0a0a"
                  roughness={0.4}
                  metalness={0.7}
                  emissive="#D4A574"
                  emissiveIntensity={hoveredPart === 'rightArm' ? 0.2 : 0}
                />
              </mesh>
              <mesh position={[0, 0.0325, 0]}>
                <boxGeometry args={[0.052, 0.006, 1.04]} />
                {goldMaterial(hoveredPart === 'rightArm')}
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* Fabric */}
      <mesh
        ref={fabricRef}
        position={[0, -0.17, 0.17]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.01, 1]}
        receiveShadow
        castShadow
        onPointerOver={(e) => { e.stopPropagation(); onHover('fabric'); }}
        onPointerOut={() => onHover(null)}
      >
        <planeGeometry args={[4.1, 1.65]} />
        <meshPhysicalMaterial
          color="#0a0a0a"
          roughness={0.95}
          side={THREE.DoubleSide}
          emissive="#D4A574"
          emissiveIntensity={hoveredPart === 'fabric' ? 0.05 : 0}
        />
      </mesh>

      {/* Front Bar */}
      <group
        ref={frontBarRef}
        position={[0, -0.18, 0.2]}
        onPointerOver={(e) => { e.stopPropagation(); onHover('frontBar'); }}
        onPointerOut={() => onHover(null)}
      >
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4.1, 0.085, 0.085]} />
          <meshPhysicalMaterial
            color="#080808"
            roughness={0.5}
            metalness={0.4}
            emissive="#D4A574"
            emissiveIntensity={hoveredPart === 'frontBar' ? 0.15 : 0}
          />
        </mesh>
        <mesh position={[0, 0.0425, 0]}>
          <boxGeometry args={[4.1, 0.006, 0.085]} />
          {goldMaterial(hoveredPart === 'frontBar')}
        </mesh>
        {[-2.05, 2.05].map((x) => (
          <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.048, 0.048, 0.035, 32]} />
            {goldMaterial(hoveredPart === 'frontBar')}
          </mesh>
        ))}
        <mesh position={[0, -0.2, 0]} receiveShadow>
          <planeGeometry args={[4.05, 0.32]} />
          <meshPhysicalMaterial
            color="#0a0a0a"
            roughness={0.95}
            side={THREE.DoubleSide}
            emissive="#D4A574"
            emissiveIntensity={hoveredPart === 'frontBar' ? 0.05 : 0}
          />
        </mesh>
      </group>
    </group>
  );
};

const InteractiveScene = ({
  deployProgress,
  hoveredPart,
  onHover
}: {
  deployProgress: React.MutableRefObject<number>;
  hoveredPart: string | null;
  onHover: (part: string | null) => void;
}) => {
  return (
    <>
      <color attach="background" args={['#000000']} />

      <group position={[0, 0, 0]}>
        <InteractiveAwning
          deployProgress={deployProgress}
          hoveredPart={hoveredPart}
          onHover={onHover}
        />
      </group>

      <directionalLight
        position={[6, 8, 5]}
        intensity={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <spotLight
        position={[-6, 4, -3]}
        intensity={100}
        color="#D4A574"
        angle={0.5}
        penumbra={1}
      />

      <pointLight position={[0, 2, 4]} intensity={12} color="#ffffff" />
      <ambientLight intensity={0.15} />

      <Environment preset="studio" blur={0.5} backgroundIntensity={0} />

      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={0.75} radius={0.4} />
        <Vignette darkness={0.5} offset={0.3} />
      </EffectComposer>

      <OrbitControls
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={2.5}
        maxDistance={8}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
};

export function Intro3D({ onComplete }: { onComplete: () => void }) {
  const [isDeployed, setIsDeployed] = useState(false);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const deployRef = useRef(0);

  const handleDeploy = () => {
    if (isDeployed) return;
    setIsDeployed(true);
    gsap.to(deployRef, {
      current: 1,
      duration: 3,
      ease: 'power2.out',
    });
  };

  const handleComplete = () => {
    gsap.to('.intro-container', {
      opacity: 0,
      duration: 1,
      onComplete,
    });
  };

  return (
    <div className="intro-container fixed inset-0 z-[9999] bg-black">
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 1, 4.5], fov: 42 }}>
        <InteractiveScene
          deployProgress={deployRef}
          hoveredPart={hoveredPart}
          onHover={setHoveredPart}
        />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-between p-12">
        <div className="text-center mt-8">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            ELITA INEX
          </h1>
          <p className="text-neutral-500 mt-2 uppercase tracking-[0.4em] text-xs">
            Architectural Excellence
          </p>
        </div>

        <div className="text-center mb-8 space-y-6 pointer-events-auto">
          <div className="space-y-2">
            <p className="text-neutral-400 text-[10px] uppercase tracking-widest h-4">
              {hoveredPart ? `Hovering: ${hoveredPart}` : 'Drag to rotate • Scroll to zoom'}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            {!isDeployed && (
              <button
                onClick={handleDeploy}
                className="px-8 py-3 bg-gradient-to-r from-[#D4A574] to-[#B39265] text-black font-semibold rounded-full hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-lg shadow-[#D4A574]/20"
              >
                Deploy
              </button>
            )}

            <button
              onClick={handleComplete}
              className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-white/10 transition-all text-xs uppercase tracking-widest"
            >
              Enter Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro3D;
