import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS, PROCESS_STEPS } from '../constants';

export const Archives = () => {
    const { t } = useLanguage();
    return (
        <div className="pt-48 pb-32 px-8 bg-brand-charcoal text-white min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="text-5xl font-serif mb-12 text-center">{t('gallery.title')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map(p => (
                        <div key={p.id} className="relative group overflow-hidden h-96 rounded-sm reveal">
                            <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={p.title} />
                            <div className="absolute inset-0 bg-brand-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                                <div className="text-center">
                                    <span className="text-brand-bronze text-xs font-bold uppercase tracking-widest mb-2 block">{t(`projectsItems.${p.id}.category`)}</span>
                                    <h3 className="text-xl font-serif text-white">{t(`projectsItems.${p.id}.title`)}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Quote = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        details: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Use local proxy to bypass CORS (Netlify rewrites this to the production n8n URL)
            const response = await fetch('/webhook/ef2f7a53-d213-4674-b882-20ea3ebd04b3', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString(),
                    source: 'website_quote_form'
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', details: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="pt-48 pb-32 px-8 bg-brand-graphite text-white min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full text-center reveal">
                <h1 className="text-5xl font-serif mb-8">{t('quote.title')}</h1>
                <p className="text-white/70 font-light mb-12">{t('quote.desc')}</p>

                {status === 'success' ? (
                    <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-sm text-center">
                        <h3 className="text-xl font-serif text-white mb-2">Request Received</h3>
                        <p className="text-white/60">Thank you. We will be in touch shortly.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-brand-bronze text-sm hover:text-white transition-colors"
                        >
                            Send another request
                        </button>
                    </div>
                ) : (
                    <form className="space-y-6 text-left bg-brand-charcoal p-12 rounded-sm shadow-2xl border border-white/5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-brand-bronze">{t('quote.name')}</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full bg-brand-graphite border-b border-white/10 p-3 outline-none focus:border-brand-bronze transition-all text-white disabled:opacity-50"
                                    disabled={status === 'submitting'}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-brand-bronze">{t('quote.email')}</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full bg-brand-graphite border-b border-white/10 p-3 outline-none focus:border-brand-bronze transition-all text-white disabled:opacity-50"
                                    disabled={status === 'submitting'}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold tracking-widest text-brand-bronze">{t('quote.details')}</label>
                            <textarea
                                required
                                value={formData.details}
                                onChange={e => setFormData(prev => ({ ...prev, details: e.target.value }))}
                                className="w-full bg-brand-graphite border-b border-white/10 p-3 outline-none focus:border-brand-bronze transition-all h-32 resize-none text-white disabled:opacity-50"
                                disabled={status === 'submitting'}
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bronze-gradient py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {status === 'submitting' ? 'Sending...' : t('quote.submit')}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export const Process = () => {
    const { t } = useLanguage();
    return (
        <div className="pt-48 pb-32 px-8 bg-brand-charcoal text-white min-h-screen">
            <div className="max-w-[800px] mx-auto reveal">
                <h1 className="text-5xl font-serif mb-12 text-center italic">{t('process.title')}</h1>
                <div className="space-y-24">
                    {PROCESS_STEPS.map((s, i) => (
                        <div key={i} className="flex gap-12 group">
                            <div className="text-7xl font-serif text-brand-bronze/10 transition-colors group-hover:text-brand-bronze/30">0{i + 1}</div>
                            <div>
                                <h3 className="text-xl font-serif mb-4 text-brand-bronze">{t(`process.steps.${i}.title`)}</h3>
                                <p className="text-white/70 leading-relaxed font-light">{t(`process.steps.${i}.description`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
