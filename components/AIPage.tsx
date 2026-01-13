import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';

// --- MOCK AI LOGIC ---
const MOCK_ANSWERS: Record<string, string> = {
    "pricing": "Our systems are bespoke architectural solutions. Pricing typically starts from €2,500 for premium zip screens and €8,000 for bioclimatic pergolas, including design and white-glove installation.",
    "delivery": "Standard lead time from design approval to installation is 6-8 weeks globally. We handle all logistics via our in-house technical teams.",
    "support": "Elita Inex provides a 10-year structural warranty on all aluminum frameworks and a 5-year warranty on automation and textiles. You can reach our studio 24/7 for urgent maintenance.",
    "default": "I understand your interest in our architectural solutions. Could you tell me more about your property or the specific atmosphere you're looking to create?"
};

const AIPage = () => {
    // Chat State
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Welcome to the Elita Inex Studio. I'm your architectural assistant. How can I help you refine your outdoor space today?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Recommendation State
    const [recStep, setRecStep] = useState(0);
    const [recAnswers, setRecAnswers] = useState<string[]>([]);
    const [recommendation, setRecommendation] = useState<any>(null);

    // FAQ State
    const [faqSearch, setFaqSearch] = useState('');

    // Auto-scroll chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Handle Chat Input
    const handleChat = (e?: React.FormEvent, text?: string) => {
        e?.preventDefault();
        const query = text || input;
        if (!query) return;

        setMessages(prev => [...prev, { role: 'user', content: query }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            let response = MOCK_ANSWERS["default"];
            const lowerQuery = query.toLowerCase();
            if (lowerQuery.includes('price') || lowerQuery.includes('cost')) response = MOCK_ANSWERS["pricing"];
            if (lowerQuery.includes('delivery') || lowerQuery.includes('lead time')) response = MOCK_ANSWERS["delivery"];
            if (lowerQuery.includes('support') || lowerQuery.includes('warranty')) response = MOCK_ANSWERS["support"];

            setMessages(prev => [...prev, { role: 'ai', content: response }]);
            setIsTyping(false);
        }, 1500);
    };

    // Recommendation Engine
    const recQuestions = [
        { q: "What is the primary purpose of your space?", options: ["Sun Protection", "All-Weather Use", "Evening Entertainment"] },
        { q: "What is the architectural style of the property?", options: ["Modern Minimalist", "Classic Heritage", "Commercial Facade"] },
        { q: "How much area do you intend to cover?", options: ["Small Terrace (<20sqm)", "Medium Living Area (20-50sqm)", "Large Commercial Space (>50sqm)"] }
    ];

    const handleRecAnswer = (option: string) => {
        const newAnswers = [...recAnswers, option];
        setRecAnswers(newAnswers);
        if (recStep < recQuestions.length - 1) {
            setRecStep(recStep + 1);
        } else {
            // Find recommendation based on first answer (simplified logic)
            let product = PRODUCTS[0];
            if (newAnswers[0] === "Sun Protection") product = PRODUCTS[1]; // Zip Screen
            if (newAnswers[0] === "Evening Entertainment") product = PRODUCTS[4]; // LED Pergola

            setRecommendation({
                ...product,
                reasoning: `Based on your need for ${newAnswers[0].toLowerCase()} and ${newAnswers[1].toLowerCase()} design, our ${product.name} offers the perfect fusion of technical performance and architectural alignment.`
            });
        }
    };

    return (
        <div className="bg-brand-charcoal min-h-screen text-white pt-32 pb-20 selection:bg-brand-bronze selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="max-w-[1400px] mx-auto px-8 mb-32 text-center reveal">
                <span className="text-brand-bronze font-bold text-[9px] uppercase tracking-[0.5em] mb-8 block">Studio Intelligence</span>
                <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Instant Clarity for <br /> <span className="italic">Distinguished</span> Projects.</h1>
                <p className="text-white/40 text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                    Navigate our collections and technical specifications with ease. Confident answers tailored to your architectural vision.
                </p>
                <button
                    onClick={() => document.getElementById('ai-chat')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bronze-gradient px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl"
                >
                    Ask the AI
                </button>
            </section>

            {/* 2. AI ASSISTANT PANEL */}
            <section id="ai-chat" className="max-w-4xl mx-auto px-8 mb-40 reveal">
                <div className="bg-brand-graphite rounded-sm shadow-2xl border border-white/5 overflow-hidden flex flex-col h-[600px]">
                    {/* Chat Header */}
                    <div className="p-6 border-b border-white/5 bg-brand-charcoal/50 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-brand-bronze animate-pulse"></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Elita Studio Concierge</span>
                            </div>
                            <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">Secured via Studio Intelligence</span>
                        </div>

                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] p-6 rounded-sm text-sm leading-relaxed ${msg.role === 'user' ? 'bg-brand-bronze/10 border border-brand-bronze/20 text-white' : 'bg-brand-charcoal border border-white/5 text-white/70 font-light'}`}>
                                    {msg.content}
                                </div>
                            </motion.div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-brand-charcoal border border-white/5 p-4 rounded-sm">
                                    <div className="flex gap-2">
                                        <div className="w-1.5 h-1.5 bg-brand-bronze/40 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-brand-bronze/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-brand-bronze/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Prompts & Input */}
                    <div className="p-8 border-t border-white/5 bg-brand-charcoal/30">
                        <div className="flex flex-wrap gap-3 mb-6">
                            {["Which product fits me?", "Track my order", "Architectural pricing"].map(p => (
                                <button
                                    key={p}
                                    onClick={() => handleChat(undefined, p)}
                                    className="text-[9px] uppercase tracking-widest text-white/30 border border-white/10 px-4 py-2 rounded-full hover:border-brand-bronze/50 hover:text-brand-bronze transition-all"
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                        <form onSubmit={handleChat} className="flex gap-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Inquire about systems, pricing, or tech specs..."
                                className="flex-1 bg-brand-charcoal border border-white/10 px-6 py-4 rounded-full text-sm outline-none focus:border-brand-bronze/50 transition-all placeholder:text-white/10"
                            />
                            <button className="bronze-gradient px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 3. PERSONALIZED RECOMMENDATIONS */}
            <section className="max-w-[1400px] mx-auto px-8 mb-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="reveal">
                        <span className="text-brand-bronze font-bold text-[9px] uppercase tracking-[0.4em] mb-6 block">Guided Selection</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Personalized <br /> <span className="italic">Recommendations.</span></h2>
                        <p className="text-white/40 text-[15px] font-light leading-loose max-w-md mb-12">
                            Our studio intelligence analyzes your specific requirements to curate the ideal shading architectural system for your property.
                        </p>
                        <div className="flex gap-4 items-center text-white/30">
                            <div className="w-12 h-[1px] bg-brand-bronze/40"></div>
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Step {recommendation ? '3/3' : `${recStep + 1}/3`}</span>
                        </div>
                    </div>

                    <div className="bg-brand-graphite p-12 rounded-sm border border-white/5 shadow-2xl reveal">
                        <AnimatePresence mode="wait">
                            {!recommendation ? (
                                <motion.div
                                    key={recStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <h3 className="text-xl font-serif text-white mb-8">{recQuestions[recStep].q}</h3>
                                    <div className="grid gap-4">
                                        {recQuestions[recStep].options.map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => handleRecAnswer(opt)}
                                                className="w-full bg-brand-charcoal/50 border border-white/10 p-5 text-left text-sm uppercase tracking-[0.1em] text-white/60 hover:border-brand-bronze hover:text-white transition-all rounded-sm group flex justify-between items-center"
                                            >
                                                {opt}
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-bronze">→</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 bronze-gradient rounded-full flex items-center justify-center mx-auto mb-8">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-serif text-white mb-4">Your Studio Choice: <br /> <span className="text-brand-bronze italic">{recommendation.name}</span></h3>
                                    <p className="text-white/40 text-sm font-light leading-relaxed mb-8 px-4">
                                        {recommendation.reasoning}
                                    </p>
                                    <button
                                        onClick={() => { setRecStep(0); setRecAnswers([]); setRecommendation(null); }}
                                        className="text-[9px] uppercase tracking-widest text-white/30 border-b border-transparent hover:border-white/30 transition-all"
                                    >
                                        Reset Design Profile
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 4. SMART FAQ SEARCH */}
            <section className="bg-brand-graphite py-40 border-y border-white/5 reveal">
                <div className="max-w-[1000px] mx-auto px-8 text-center">
                    <span className="text-brand-bronze font-bold text-[9px] uppercase tracking-[0.5em] mb-8 block">Instant Knowledge</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-12">Search the <span className="italic">Archives.</span></h2>

                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            value={faqSearch}
                            onChange={(e) => setFaqSearch(e.target.value)}
                            placeholder="Search wind tests, material specs, or smart integration..."
                            className="w-full bg-brand-charcoal border border-white/10 px-10 py-6 rounded-full text-white text-base outline-none focus:border-brand-bronze/50 transition-all text-center placeholder:text-white/10"
                        />
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {faqSearch.length > 2 ? (
                                <div className="col-span-2 p-8 bg-brand-charcoal border border-white/10 rounded-sm">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-bronze block mb-4">Studio Result</span>
                                    <p className="text-white/70 font-light text-sm italic">"Our systems are architectural-grade solutions. For the search '{faqSearch}', we recommend consulting our technical team as specific installation parameters vary by property structural integrity."</p>
                                </div>
                            ) : (
                                <>
                                    <div className="p-8 border border-white/5 hover:border-white/10 transition-all">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Wind Testing</h4>
                                        <p className="text-white/30 text-[12px] font-light leading-relaxed">All systems tested up to 120km/h in wind-tunnel environments.</p>
                                    </div>
                                    <div className="p-8 border border-white/5 hover:border-white/10 transition-all">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Smart Home</h4>
                                        <p className="text-white/30 text-[12px] font-light leading-relaxed">Full Somfy IO & Control4 integration supported via proprietary bridges.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TRUST & TRANSPARENCY */}
            <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-8 text-center reveal">
                <div className="flex justify-center gap-12 mb-16 text-white/20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 8H12.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-white/60 mb-8">Architectural Integrity & Privacy</h3>
                <p className="text-white/30 text-[12px] font-light leading-[2.5] max-w-2xl mx-auto uppercase tracking-widest">
                    Studio Intelligence is hosted on local European infrastructure. No property details or personal inquiries are used for collective training. Your vision remains private.
                </p>
            </section>

        </div>
    );
};

export default AIPage;
