import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

interface VideoIntroProps {
    onComplete: () => void;
}

const VideoIntro: React.FC<VideoIntroProps> = ({ onComplete }) => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        // Fail-safe: show intro even if video fails to load after 4 seconds
        const timer = setTimeout(() => {
            if (!isVideoLoaded) setIsVideoLoaded(true);
        }, 4000);

        if (isVideoLoaded && contentRef.current) {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Initial state set
            gsap.set(contentRef.current, { opacity: 1 });

            // Staggered title reveal
            if (titleRef.current) {
                const chars = titleRef.current.querySelectorAll('.char');
                tl.fromTo(chars,
                    { y: 100, opacity: 0, rotateX: -90 },
                    { y: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.05, delay: 0.2 }
                );
            }

            // Subtitle reveal
            if (subtitleRef.current) {
                tl.fromTo(subtitleRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1.2 },
                    "-=1"
                );
            }

            // Button reveal
            if (buttonRef.current) {
                tl.fromTo(buttonRef.current,
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, duration: 1 },
                    "-=0.8"
                );
            }
        }

        return () => clearTimeout(timer);
    }, [isVideoLoaded]);

    // Magnetic parallax effect with requestAnimationFrame for performance
    useEffect(() => {
        let rafId: number;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            targetX = (e.clientX / window.innerWidth - 0.5) * 40;
            targetY = (e.clientY / window.innerHeight - 0.5) * 40;
        };

        const update = () => {
            // Smooth interpolation
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;

            if (contentRef.current) {
                contentRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }

            if (videoRef.current) {
                // Video moves in opposite direction with smaller magnitude
                const vx = currentX * -0.5;
                const vy = currentY * -0.5;
                videoRef.current.style.transform = `translate3d(${vx}px, ${vy}px, 0) scale(1.1)`;
            }

            rafId = requestAnimationFrame(update);
        };

        window.addEventListener('mousemove', handleMouseMove);
        rafId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const handleEnterSite = () => {
        if (!containerRef.current || !videoRef.current || !contentRef.current) return;

        const tl = gsap.timeline({
            onComplete: onComplete
        });

        // Cinematic Transition Sequence
        // Cinematic Transition Sequence - Zoom Through
        tl.to(contentRef.current, {
            scale: 2,
            opacity: 0,
            filter: "blur(20px)",
            duration: 1.2,
            ease: "expo.in"
        }, 0);

        tl.to(videoRef.current, {
            scale: 2, // Increased scale for faster zoom sensation
            filter: "blur(50px)",
            opacity: 0,
            duration: 1.5,
            ease: "expo.in"
        }, 0);

        // Light Leak - Subtle flash on transition
        tl.to(".light-leak", {
            opacity: 0.8,
            scale: 1.5,
            duration: 1.0,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1
        }, 0.2);

        // Smooth Reveal of Website
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 1.2,
            ease: "power2.inOut"
        }, 0.6); // Start fading out earlier to overlap with zoom
    };

    const title = t('intro.title');

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
            {/* Light Leak Overlay */}
            <div className="light-leak absolute inset-0 z-40 bg-brand-bronze/30 mix-blend-screen opacity-0 pointer-events-none blur-[60px] scale-75"></div>

            {/* Cinematic Noise Overlay (Static) */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.015] mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>
            </div>

            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                onCanPlay={() => setIsVideoLoaded(true)}
                onError={() => setIsVideoLoaded(true)} // Fallback if video fails
                className={`absolute inset-0 w-[110%] h-[110%] left-[-5%] top-[-5%] object-cover blur transition-opacity duration-2000 ${isVideoLoaded ? 'opacity-50' : 'opacity-0'}`}
            >
                <source src="/products/VIDEO-2026-01-08-22-28-03.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div
                ref={contentRef}
                className="relative z-30 flex flex-col items-center text-center px-6 opacity-0"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <h1
                    ref={titleRef}
                    className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500 mb-6 tracking-tight pointer-events-none perspective-[1000px]"
                >
                    {title.split('').map((char, i) => (
                        <span key={i} className="char inline-block min-w-[0.2em]">
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-brand-bronze uppercase tracking-[0.6em] text-[10px] md:text-xs mb-16 font-semibold opacity-0"
                >
                    {t('intro.subtitle')}
                </p>

                <button
                    ref={buttonRef}
                    onClick={handleEnterSite}
                    className="group relative px-16 py-5 bg-transparent border border-white/20 text-white rounded-full overflow-hidden transition-all duration-700 hover:border-brand-bronze/50 hover:px-20"
                >
                    <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-white">
                        {t('intro.enter')}
                    </span>
                    <div className="absolute inset-0 bg-brand-bronze scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>

                    {/* Magnetic shine */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_infinite]"></div>
                </button>
            </div>

            {/* Loading State */}
            {!isVideoLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50">
                    <div className="w-24 h-[1px] bg-brand-bronze/20 overflow-hidden">
                        <div className="w-full h-full bg-brand-bronze animate-[loading_1.5s_infinite_ease-in-out]"></div>
                    </div>
                </div>
            )}

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60"></div>
            </div>

            <style>{`
                /* Removed expensive noise animation keyframes */
                @keyframes shine {
                    100% { left: 125% }
                }
                @keyframes loading {
                    0% { transform: translateX(-100%) }
                    100% { transform: translateX(100%) }
                }
            `}</style>
        </div>
    );
};

export default VideoIntro;
