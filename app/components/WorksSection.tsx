'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const projectKeys = ['speedleasing', 'ukatis', 'bpartners'] as const;

const projectMeta: Record<
  (typeof projectKeys)[number],
  { demoUrl: string; githubUrl: string }
> = {
  speedleasing: {
    demoUrl: 'https://speed-leasing-poc.vercel.app/',
    githubUrl: 'https://github.com/tahiry-dev/speed-leasing-poc',
  },
  ukatis: {
    demoUrl: 'https://ukatis-pension-poc.vercel.app/',
    githubUrl: 'https://github.com/tahiry-dev/ukatis-pension-poc',
  },
  bpartners: {
    demoUrl: 'https://bpartners-mobile-poc-peach.vercel.app/',
    githubUrl: 'https://github.com/tahiry-dev/bpartners-mobile-poc',
  },
};

export default function WorksSection() {
  const t = useTranslations('Works');
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectKeys.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectKeys.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="works" className="py-24 px-6 max-w-6xl mx-auto">
      {/* En-tête centré style Skills */}
      <div className="flex flex-col items-center text-center mb-16">
        <Layers className="w-10 h-10 text-cyan-400 mb-3" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {t('badge')}
        </h2>
        <div className="w-12 h-1 bg-cyan-400 rounded-full mt-3 mb-4"></div>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {/* Carrousel avec défilement fluide (Slide Track) */}
      <div className="flex items-center justify-center gap-3 md:gap-6">
        {/* Flèche Gauche */}
        <button
          onClick={prevSlide}
          aria-label="Previous project"
          className="shrink-0 p-3.5 rounded-full border border-slate-800 bg-[#090d16]/90 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-200 active:scale-95 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Fenêtre visible du Carrousel */}
        <div className="relative flex-1 max-w-3xl overflow-hidden rounded-3xl bg-[#090d16]/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)] backdrop-blur-md">
          {/* Rails de glissement (Track animé) */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectKeys.map((key, index) => {
              const tags: string[] = t.raw(`projects.${key}.tags`) || [];
              const links = projectMeta[key];

              return (
                <div
                  key={key}
                  className="w-full shrink-0 p-8 md:p-12 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                        PoC #{index + 1}
                      </span>
                      <span className="font-mono text-sm text-cyan-400 font-semibold tracking-wider">
                        {`0${index + 1}`}{' '}
                        <span className="text-slate-600">/</span>{' '}
                        {`0${projectKeys.length}`}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 tracking-tight">
                      {t(`projects.${key}.title`)}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                      {t(`projects.${key}.description`)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions (Demo & Code) */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/80">
                    <a
                      href={links.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('viewWebsite')}
                    </a>
                    <a
                      href={links.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 font-semibold text-sm hover:text-white hover:border-slate-500 transition-all active:scale-95"
                    >
                      <GithubIcon className="w-4 h-4" />
                      {t('viewGithub')}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicateurs (Dots) */}
          <div className="flex items-center justify-center gap-2 pb-6">
            {projectKeys.map((key, idx) => (
              <button
                key={key}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-7 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Flèche Droite */}
        <button
          onClick={nextSlide}
          aria-label="Next project"
          className="shrink-0 p-3.5 rounded-full border border-slate-800 bg-[#090d16]/90 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-200 active:scale-95 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}