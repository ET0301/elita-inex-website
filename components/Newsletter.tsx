import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Newsletter = () => {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section className="py-40 bg-brand-graphite border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="bg-brand-charcoal p-12 md:p-24 rounded-sm shadow-2xl relative overflow-hidden reveal">
                    {/* Background Decorative Element */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-bronze/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-brand-bronze font-bold text-[9px] uppercase tracking-[0.4em] mb-6 block">{t('newsletter.label')}</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">{t('newsletter.title')} <br /> <span className="italic">{t('newsletter.titleItalic')}</span></h2>
                            <p className="text-white/40 text-[15px] font-light leading-loose max-w-md">
                                {t('newsletter.desc')}
                            </p>
                        </div>

                        <div>
                            {status === 'success' ? (
                                <div className="text-center py-10">
                                    <div className="w-12 h-12 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-serif text-white mb-2">{t('newsletter.successTitle')}</h3>
                                    <p className="text-white/40 text-sm">{t('newsletter.successDesc')}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            required
                                            placeholder={t('newsletter.placeholder')}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-brand-graphite/50 border border-white/10 px-8 py-6 rounded-full text-white text-sm outline-none focus:border-brand-bronze/50 transition-all placeholder:text-white/10"
                                        />
                                        <button
                                            type="submit"
                                            className="absolute right-2 top-2 bottom-2 bronze-gradient px-10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-xl hover:scale-105 transition-all"
                                        >
                                            {t('newsletter.button')}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
