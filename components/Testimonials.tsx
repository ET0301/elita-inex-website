import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
    const { t } = useLanguage();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-40 bg-brand-graphite overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="text-center mb-24 reveal">
                    <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-brand-bronze mb-4 block">Proven Excellence</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white">Distinguished Perspectives</h2>
                </div>

                <div className="relative h-[400px] md:h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 flex flex-col items-center text-center"
                        >
                            <div className="mb-12">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-brand-bronze/30 mx-auto">
                                    <path d="M10 11L8 17H5L7 11H5V7H10V11ZM19 11L17 17H14L16 11H14V7H19V11Z" fill="currentColor" />
                                </svg>
                            </div>
                            <blockquote className="text-xl md:text-3xl font-serif text-white/90 italic leading-relaxed max-w-4xl mb-12 px-4">
                                "{t(`testimonialsItems.${index}.quote`)}"
                            </blockquote>
                            <div className="space-y-2">
                                <cite className="not-italic text-sm font-bold uppercase tracking-[0.3em] text-brand-bronze">
                                    {t(`testimonialsItems.${index}.author`)}
                                </cite>
                                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">
                                    {t(`testimonialsItems.${index}.role`)} — {t(`testimonialsItems.${index}.location`)}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-4 mt-20">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-[2px] transition-all duration-700 ${i === index ? 'w-12 bg-brand-bronze' : 'w-4 bg-white/10'}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
