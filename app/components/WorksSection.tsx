'use client';

import { useTranslations } from 'next-intl';
import { ExternalLink, Layers } from 'lucide-react';

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

const projectMeta = [
  {
    key: 'speedleasing',
    demoUrl: 'https://speed-leasing-poc.vercel.app/',
    githubUrl: 'https://github.com/tahiry-dev/speed-leasing-poc',
  },
  {
    key: 'ukatis',
    demoUrl: 'https://ukatis-pension-poc.vercel.app/',
    githubUrl: 'https://github.com/tahiry-dev/ukatis-pension-poc',
  },
  {
    key: 'bpartners',
    demoUrl: 'https://bpartners-mobile-poc-peach.vercel.app/',
    githubUrl: 'https://github.com/tahiry-dev/bpartners-mobile-poc',
  },
] as const;

export default function WorksSection() {
  const t = useTranslations('Works');

  return (
    <section id="works" className="py-24 px-6 max-w-6xl mx-auto">
      {/* En-tête de section */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>{t('badge')}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
          {t('subtitle')}
        </h2>
      </div>

      {/* Grille des PoC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectMeta.map((project) => {
          const tags: string[] = t.raw(`projects.${project.key}.tags`) || [];

          return (
            <div
              key={project.key}
              className="group rounded-2xl bg-[#090d16]/80 border border-cyan-500/20 p-6 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:-translate-y-1.5"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                  {t(`projects.${project.key}.title`)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {t(`projects.${project.key}.description`)}
                </p>

                {/* Badges de tags */}
                <div className="flex flex-wrap gap-2 mb-6">
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

              {/* Liens Live Demo & GitHub */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('viewWebsite')}
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  {t('viewGithub')}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}