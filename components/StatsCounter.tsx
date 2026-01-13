import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const StatsCounter = () => {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const keys = ['stats.years', 'stats.global', 'stats.components', 'stats.craftsmen'];

    useEffect(() => {
        const ctx = gsap.context(() => {
            STATS.forEach((stat, i) => {
                const el = textRefs.current[i];
                if (!el) return;

                const counter = { value: 0 };
                const target = stat.value;

                gsap.to(counter, {
                    value: target,
                    duration: 2.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", // Trigger slightly earlier
                        toggleActions: "play none none reverse" // Re-play if scrolled back
                    },
                    onUpdate: () => {
                        el.textContent = Math.floor(counter.value).toString();
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [t]); // Re-run if language changes (though numbers are language-agnostic, the layout might shift)

    return (
        <section ref={sectionRef} className="py-32 bg-brand-charcoal border-y border-white/5">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
                    {STATS.map((stat, i) => (
                        <div key={i} className="text-center group reveal">
                            <div className="mb-4">
                                <span
                                    ref={el => { textRefs.current[i] = el }}
                                    className="text-5xl md:text-7xl font-serif text-white tracking-tight"
                                >
                                    0
                                </span>
                                <span className="text-3xl md:text-4xl font-serif text-brand-bronze ml-1">
                                    {stat.suffix}
                                </span>
                            </div>
                            <div className="w-8 h-[1px] bg-brand-bronze/30 mx-auto mb-6 group-hover:w-16 transition-all duration-700"></div>
                            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40 group-hover:text-white transition-colors duration-500">
                                {t(keys[i])}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
