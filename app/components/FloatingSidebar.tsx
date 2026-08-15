'use client';

import { useTranslations } from 'next-intl';
import { User, Code, Layers, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { key: 'home', targetId: 'hero', icon: User },
  { key: 'about', targetId: 'about', icon: Code },
  { key: 'skills', targetId: 'skills', icon: Layers },
  { key: 'works', targetId: 'works', icon: Briefcase },
  { key: 'contact', targetId: 'contact', icon: Mail },
] as const;

export default function FloatingSidebar() {
  const t = useTranslations('Navbar');

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 bg-[#090d16]/80 backdrop-blur-md border border-cyan-500/20 p-2.5 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const label = t(item.key);

        return (
          <a
            key={item.key}
            href={`#${item.targetId}`}
            onClick={(e) => handleScrollTo(e, item.targetId)}
            aria-label={label}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-950/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all group relative"
          >
            <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />

            {/* Tooltip au survol affichant le texte traduit */}
            <span className="absolute left-12 px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
              {label}
            </span>
          </a>
        );
      })}
    </aside>
  );
}