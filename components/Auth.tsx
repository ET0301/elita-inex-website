import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        const endpoint = isLogin ? '/api/login' : '/api/register';
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                setMessage(isLogin ? 'Logged in successfully!' : 'Registered successfully!');
                setTimeout(() => navigate('/'), 1500);
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('Connection error. Is the server running?');
        }
    };

    return (
        <div className="pt-48 pb-32 px-8 bg-brand-graphite text-white min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full reveal">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif mb-4">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
                    <p className="text-white/40 font-light text-sm">
                        {isLogin ? 'Access your architectural archives and projects.' : 'Join the Elita Inex design ecosystem.'}
                    </p>
                </div>

                <form className="space-y-6 bg-brand-charcoal p-10 rounded-sm shadow-2xl border border-white/5" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-brand-bronze">Full Name</label>
                            <input
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full bg-brand-graphite border-b border-white/10 p-3 outline-none focus:border-brand-bronze transition-all text-white"
                            />
                        </div>
                    )}
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-brand-bronze">Email Address</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-brand-graphite border-b border-white/10 p-3 outline-none focus:border-brand-bronze transition-all text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-brand-bronze">Password</label>
                        <input
                            type="password"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full bg-brand-graphite border-b border-white/10 p-3 outline-none focus:border-brand-bronze transition-all text-white"
                        />
                    </div>

                    {error && <p className="text-red-500 text-xs font-light">{error}</p>}
                    {message && <p className="text-brand-bronze text-xs font-light">{message}</p>}

                    <button className="w-full bronze-gradient py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all">
                        {isLogin ? 'Login' : 'Register'}
                    </button>

                    <div className="text-center mt-6">
                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-[9px] uppercase tracking-widest text-white/40 hover:text-brand-bronze transition-all"
                        >
                            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
