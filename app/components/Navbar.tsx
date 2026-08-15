'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/navigation';
import { Globe } from 'lucide-react';

function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090d16]/80 backdrop-blur-md border-b border-slate-800/60 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">&lt;C/&gt;</span>
          <span className="truncate">Tahiry RANDRIAMIARINTSOA</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition-colors">{t('home')}</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">{t('about')}</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">{t('skills')}</a>
          <a href="#works" className="hover:text-cyan-400 transition-colors">{t('works')}</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">{t('contact')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-xs font-semibold text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{locale === 'en' ? 'FR' : 'EN'}</span>
          </button>

          <a
            href="https://github.com/tahiry-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}