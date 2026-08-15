'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'skills', label: t('skills') },
    { id: 'works', label: t('works') },
    { id: 'contact', label: t('contact') },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${targetId}`);
      setIsOpen(false);
    }
  };

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070b12]/80 backdrop-blur-md border-b border-cyan-500/10 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, 'hero')}
          className="text-lg font-mono font-bold tracking-wider text-white hover:text-cyan-400 transition-colors"
        >
          <span className="text-cyan-400">&lt;</span>
          Tahiry.dev
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        {/* Liens Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Sélecteur de langue */}
          <div className="flex items-center gap-1.5 pl-4 border-l border-slate-800 text-xs font-mono">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <button
              type="button"
              onClick={() => switchLocale('fr')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                locale === 'fr'
                  ? 'text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FR
            </button>
            <span className="text-slate-600">/</span>
            <button
              type="button"
              onClick={() => switchLocale('en')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                locale === 'en'
                  ? 'text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Bouton Menu Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="block text-base font-mono text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800/50"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-3 pt-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <button
              type="button"
              onClick={() => switchLocale('fr')}
              className={`px-3 py-1 text-xs font-mono rounded ${
                locale === 'fr'
                  ? 'bg-cyan-500 text-black font-bold'
                  : 'bg-slate-900 text-slate-300'
              }`}
            >
              Français
            </button>
            <button
              type="button"
              onClick={() => switchLocale('en')}
              className={`px-3 py-1 text-xs font-mono rounded ${
                locale === 'en'
                  ? 'bg-cyan-500 text-black font-bold'
                  : 'bg-slate-900 text-slate-300'
              }`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </header>
  );
}