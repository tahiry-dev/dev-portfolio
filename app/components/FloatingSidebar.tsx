'use client';

import { LayoutGrid, User, Code2, Monitor, Mail } from 'lucide-react';

export default function FloatingSidebar() {
  const items = [
    { href: '#home', icon: LayoutGrid, label: 'Home' },
    { href: '#about', icon: User, label: 'About' },
    { href: '#skills', icon: Code2, label: 'Skills' },
    { href: '#works', icon: Monitor, label: 'Works' },
    { href: '#contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 p-3 rounded-full bg-[#0d1424]/80 border border-slate-800 backdrop-blur-md shadow-2xl">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.href}
            aria-label={item.label}
            className="p-2.5 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </aside>
  );
}