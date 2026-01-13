import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { gsap } from 'gsap';
import { FAQS } from '../constants';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: 'auto', duration: 0.5, ease: 'power2.out', opacity: 1 });
        } else {
            gsap.to(contentRef.current, { height: 0, duration: 0.5, ease: 'power2.in', opacity: 0 });
        }
    }, [isOpen]);

    return (
        <div className="border-b border-white/5 py-8">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left group"
            >
                <h3 className={`text-lg md:text-xl font-serif transition-colors duration-500 ${isOpen ? 'text-brand-bronze' : 'text-white/80 group-hover:text-white'}`}>
                    {question}
                </h3>
                <span className={`text-brand-bronze transform transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 5V19M5 12H19" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden h-0 opacity-0"
            >
                <p className="pt-6 text-white/40 font-light leading-relaxed max-w-3xl text-sm md:text-base">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-40 bg-brand-charcoal">
            <div className="max-w-[1000px] mx-auto px-8">
                <div className="mb-20 reveal">
                    <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-brand-bronze mb-4 block">Knowledge Base</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white">Technical & Design <br /> <span className="italic">Inquiries</span></h2>
                </div>

                <div className="reveal">
                    {FAQS.map((faq, i) => (
                        <FAQItem
                            key={i}
                            question={t(`faqsItems.${i}.question`)}
                            answer={t(`faqsItems.${i}.answer`)}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>

                <div className="mt-20 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 reveal">
                    <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-bold">Still have questions?</p>
                    <a href="/#/quote" className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-bronze border border-brand-bronze/20 px-12 py-4 rounded-full hover:bg-brand-bronze hover:text-white transition-all">
                        Consult an Expert
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
