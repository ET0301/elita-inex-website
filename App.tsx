import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { PRODUCTS, PROJECTS, PROCESS_STEPS } from './constants';
// import AIAssistant from './components/AIAssistant';
import VideoIntro from './components/VideoIntro';
// import Auth from './components/Auth';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StatsCounter from './components/StatsCounter';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
// import AIPage from './components/AIPage';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Archives, Quote, Process } from './components/RouteComponents';
import { FlagIcon } from './components/FlagIcon';
import { Language } from './i18n/translations';

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [user, setUser] = useState<{ fullName: string, email: string } | null>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  /*
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
  }, [location]);
  */

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const isDarkNav = scrolled || location.pathname !== '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-[background-color,padding,backdrop-filter,box-shadow] duration-1000 ${isDarkNav ? 'bg-brand-charcoal/90 backdrop-blur-lg py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-6 h-6 bronze-gradient rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-1000"></div>
          <span className="text-sm font-bold tracking-[0.3em] text-white uppercase font-sans">
            Elita <span className="text-brand-bronze">Inex</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          {[
            { name: t('nav.collections'), path: '/collections' },
            // { name: 'Concierge', path: '/concierge' },
            { name: t('nav.archives'), path: '/archives' },
            { name: t('nav.process'), path: '/process' }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-brand-bronze transition-all px-2 py-2"
            >
              {item.name}
            </Link>
          ))}

          {/* 
          {user ? (
            <div className="flex items-center gap-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-bronze">
                {user.fullName.split(' ')[0]}
              </span>
              <button
                onClick={() => { localStorage.removeItem('user'); localStorage.removeItem('token'); setUser(null); }}
                className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/account" className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-brand-bronze transition-all px-2 py-2">
              Account
            </Link>
          )} 
          */}
          <div className="flex items-center gap-4">
            {(['en', 'de', 'no', 'hr', 'mk', 'sq'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`transition-all hover:scale-110 ${language === lang ? 'opacity-100 scale-110 grayscale-0' : 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`}
                title={lang.toUpperCase()}
              >
                <FlagIcon countryCode={lang} className="w-5 h-3 shadow-sm rounded-[1px]" />
              </button>
            ))}
          </div>
          <Link to="/quote" className="border border-brand-bronze/30 text-brand-bronze px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-bronze hover:text-white transition-all transform hover:scale-105 inline-block">
            {t('nav.enquire')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="overflow-hidden bg-brand-charcoal min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-brand-charcoal overflow-hidden hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="/products/IMG_4573.jpg"
            className="w-full h-full object-cover opacity-40 hero-image"
            alt="Elita Inex Featured Installation"
            loading="eager"
            style={{ transform: 'scale(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-brand-charcoal/40"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.5em] text-brand-bronze mb-8 reveal">
              {t('hero.subtitle')}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.0] tracking-tight text-balance reveal-text-auto">
              {t('hero.title')} <br /> <span className="italic">{t('hero.titleHighlight')}</span> {t('hero.titleEnd')}
            </h1>
            <p className="text-lg text-white/70 mb-12 max-w-xl font-light leading-relaxed tracking-wide reveal" style={{ animationDelay: '0.2s' }}>
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-5 reveal" style={{ animationDelay: '0.4s' }}>
              <Link to="/quote" className="bronze-gradient text-white px-10 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:translate-y-[-4px] transition-all btn-magnetic">
                {t('hero.ctaVisit')}
              </Link>
              <Link to="/collections" className="bg-brand-charcoal/40 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all btn-magnetic">
                {t('hero.ctaCollections')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-40 px-8 bg-brand-graphite">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32 reveal">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-white">{t('products.title')}</h2>
            <div className="w-16 h-[1px] bg-brand-bronze mx-auto mb-8"></div>
            <p className="text-white/60 font-light max-w-lg mx-auto text-sm leading-relaxed">{t('products.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {PRODUCTS.map((product, idx) => (
              <div key={product.id} className="group flex flex-col items-center text-center">
                <div className="w-full h-80 overflow-hidden mb-10 relative bg-brand-charcoal rounded-sm shadow-xl reveal-image-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-4 text-white reveal-text-auto">{t(`productsItems.${product.id}.name`)}</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed mb-6 max-w-[200px] reveal">{t(`productsItems.${product.id}.description`)}</p>
                <Link to="/collections" className="text-[9px] font-bold uppercase tracking-widest text-brand-bronze border-b border-transparent hover:border-brand-bronze transition-all pb-1 link-underline reveal">{t('products.techSpecs')}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-40 px-8 bg-brand-charcoal">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative order-2 lg:order-1 reveal-image-auto">
            <div className="aspect-[4/5] max-w-[400px] mx-auto rounded-sm overflow-hidden cinematic-shadow bg-brand-graphite">
              <img
                src="/products/IMG_4571.jpg"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                alt="Elite Detail"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 w-40 h-40 bg-brand-graphite border border-brand-bronze/10 p-4 hidden md:flex items-center justify-center reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="text-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-bronze block mb-1">{t('about.quality')}</span>
                <span className="text-xs font-serif italic text-white/80">{t('about.assured')}</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-brand-bronze font-bold text-[9px] uppercase tracking-[0.4em] mb-8 block reveal">{t('about.label')}</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight reveal-text-auto">{t('about.title')} <br /> {t('about.titleEnd')}</h2>
            <p className="text-white/80 text-base font-light leading-loose mb-12 reveal">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{t('about.atelierTitle')}</h4>
                <p className="text-white/50 text-[13px] font-light leading-relaxed">{t('about.atelierDesc')}</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{t('about.smartTitle')}</h4>
                <p className="text-white/50 text-[13px] font-light leading-relaxed">{t('about.smartDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-40 px-8 bg-brand-graphite text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32 reveal">
            <h2 className="text-3xl font-serif mb-6 tracking-tight">{t('gallery.title')}</h2>
            <div className="w-12 h-[1px] bg-brand-bronze mx-auto mb-8 opacity-40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-96 overflow-hidden bg-brand-charcoal group rounded-sm shadow-2xl relative reveal">
              <img src="/products/IMG_4573.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s]" alt="Featured Install" loading="lazy" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] bg-brand-charcoal/80 text-brand-bronze px-3 py-1 rounded-sm">{t('gallery.featured')}</span>
              </div>
            </div>
            <div className="h-96 overflow-hidden bg-brand-charcoal group rounded-sm shadow-2xl reveal">
              <img src="/products/IMG_4574.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s]" alt="Install" loading="lazy" />
            </div>
            <div className="h-96 overflow-hidden bg-brand-charcoal group rounded-sm shadow-2xl reveal">
              <img src="/products/IMG_4572.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s]" alt="Install" loading="lazy" />
            </div>
          </div>

          <div className="mt-24 text-center reveal">
            <Link to="/archives" className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-bronze border border-brand-bronze/20 px-12 py-4 rounded-full hover:bg-brand-bronze hover:text-white transition-all">
              {t('gallery.cta')}
            </Link>
          </div>
        </div>
      </section>

      <StatsCounter />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </div>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-charcoal text-white py-32 px-8 border-t border-white/5 reveal">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:col-span-4 gap-24">
        <div className="col-span-1 md:col-span-2 reveal">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-5 h-5 bronze-gradient rounded-sm rotate-45"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-white">Elita Inex</span>
          </div>
          <p className="text-white/60 font-light text-[13px] max-w-sm leading-loose tracking-wide">
            Bespoke architectural shading for distinguished properties. Design, manufacture, and installation handled entirely in-house.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12 col-span-1 md:col-span-2 reveal">
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-bronze mb-10">Studio</h4>
            <ul className="space-y-4 text-[13px] text-white/60 font-light tracking-wide">
              <li>Custom Engineering</li>
              <li>Atelier Fabrication</li>
              <li>White Glove Fitting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-bronze mb-10">Enquiries</h4>
            <ul className="space-y-4 text-[13px] text-white/60 font-light tracking-wide">
              <li>studio@elitainex.com</li>
              <li>+389 (0) 70 123 456</li>
              <li>Skopje, Macedonia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 uppercase tracking-[0.2em] font-bold reveal">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p>© 2025 Elita Inex Architectural Group.</p>
        </div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-brand-bronze transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-bronze transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

const Collections = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Pergola', 'Screen', 'Glass', 'Shade'];

  const filteredProducts = PRODUCTS.filter(p => {
    if (activeFilter === 'All') return true;
    return p.name.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="pt-48 pb-32 px-8 bg-brand-charcoal min-h-screen text-white">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-20 text-center reveal">
          <h1 className="text-4xl md:text-5xl font-serif mb-8">{t('collections.title')}</h1>
          <div className="w-16 h-[1px] bg-brand-bronze mx-auto mb-10"></div>
          <p className="text-white/40 font-light max-w-lg mx-auto text-sm leading-relaxed">{t('collections.subtitle')}</p>
        </header>

        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-6 mb-32 reveal">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-full border transition-all duration-500 ${activeFilter === f ? 'bg-brand-bronze border-brand-bronze text-white' : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-60">
          {filteredProducts.map((product, i) => (
            <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-32 items-center reveal ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`order-2 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="h-[500px] max-w-[450px] mx-auto rounded-sm overflow-hidden cinematic-shadow bg-brand-graphite p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={`order-1 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-brand-bronze mb-8 block">{t('collections.model')} {product.id.toUpperCase()}</span>
                <h2 className="text-3xl font-serif mb-10 tracking-tight">{t(`productsItems.${product.id}.name`)}</h2>
                <p className="text-white/70 font-light leading-loose mb-12 text-base">{t(`productsItems.${product.id}.description`)}</p>

                <div className="grid grid-cols-2 gap-12 mb-16">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">{t('collections.configs')}</h4>
                    <ul className="space-y-3 text-sm text-white/60 font-light">
                      {product.options.sizes.map(s => <li key={s} className="flex items-center gap-3"><div className="w-1 h-1 bg-brand-bronze/30"></div> {s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">{t('collections.automation')}</h4>
                    <ul className="space-y-3 text-sm text-white/60 font-light">
                      {product.options.mechanisms.map(m => <li key={m} className="flex items-center gap-3"><div className="w-1 h-1 bg-brand-bronze/30"></div> {m}</li>) || <li>{t('collections.standard')}</li>}
                    </ul>
                  </div>
                </div>

                <Link to="/quote" className="inline-block border border-white/20 px-12 py-4 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-brand-bronze hover:border-brand-bronze hover:text-white transition-all transform hover:scale-105">
                  {t('collections.techData')}
                </Link>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 reveal">
              <p className="text-white/30 font-serif italic text-xl">{t('gallery.noResults')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
};

const App = () => {
  console.log("App component mounted");
  const [showIntro, setShowIntro] = useState(true);

  const AnimationController = ({ showIntro }: { showIntro: boolean }) => {
    const location = useLocation();

    useEffect(() => {
      if (showIntro) return;

      // 1. Configure Lenis
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      const rafId = requestAnimationFrame(raf);

      // Connect GSAP
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Kill old triggers before creating new ones (important for routing)
      ScrollTrigger.getAll().forEach(t => t.kill());

      // 2. Parallax Hero Effect
      const heroImage = document.querySelector('.hero-image');
      if (heroImage) {
        gsap.to(heroImage, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // 3. Staggered Text Reveals
      const revealTexts = document.querySelectorAll('.reveal-text-auto');
      revealTexts.forEach(el => {
        if (!el.querySelector('.reveal-text-inner')) {
          const content = el.innerHTML;
          el.innerHTML = `<span class="reveal-text-inner">${content}</span>`;
          el.classList.add('reveal-text');
        }

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => el.classList.add('visible'),
          once: true
        });
      });

      // 4. Image Curtain Reveals
      const revealImages = document.querySelectorAll('.reveal-image-auto');
      revealImages.forEach(wrapper => {
        wrapper.classList.add('reveal-image-wrapper');
        if (!wrapper.querySelector('.reveal-image-curtain')) {
          const curtain = document.createElement('div');
          curtain.classList.add('reveal-image-curtain');
          wrapper.appendChild(curtain);
        }
        const img = wrapper.querySelector('img');
        if (img) img.classList.add('reveal-image-img');

        ScrollTrigger.create({
          trigger: wrapper,
          start: "top 80%",
          onEnter: () => wrapper.classList.add('visible'),
          once: true
        });
      });

      // 5. Standard Reveals
      const standardReveals = document.querySelectorAll('.reveal');
      // Force reset opacity for handling route changes
      gsap.set(standardReveals, { opacity: 0, y: 50 });

      standardReveals.forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true
            }
          }
        );
      });

      return () => {
        lenis.destroy();
        cancelAnimationFrame(rafId);
        ScrollTrigger.getAll().forEach(t => t.kill());
        gsap.ticker.remove(lenis.raf);
      };
    }, [showIntro, location.pathname]); // Re-run on route change

    return null;
  };

  return (
    <LanguageProvider>
      {showIntro && <VideoIntro onComplete={() => setShowIntro(false)} />}
      <Router>
        <ScrollToTop />
        <AnimationController showIntro={showIntro} />
        <MainApp showIntro={showIntro} />
      </Router>
    </LanguageProvider>
  );
};

// Extracted MainApp to use useLanguage hook inside
const MainApp = ({ showIntro }: { showIntro: boolean }) => {
  return (
    <div className="min-h-screen bg-brand-charcoal selection:bg-brand-bronze selection:text-white">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/process" element={<Process />} />
          {/* <Route path="/calculator" element={<Calculator />} /> */}
          {/* <Route path="/account" element={<Auth />} /> */}
          {/* <Route path="/concierge" element={<AIPage />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {/* <AIAssistant /> */}
    </div >
  );
};

export default App;
