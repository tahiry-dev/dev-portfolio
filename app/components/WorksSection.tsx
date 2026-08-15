'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, ExternalLink, Code2, Monitor } from 'lucide-react';

const projects = [
  {
    id: 'bpartners',
    github: 'https://github.com/tahiry-dev/bpartners-mobile-poc',
    live: '#',
    tags: ['React Native', 'TypeScript', 'Tailwind'],
    codeSnippet: `// BPartners Mobile PoC
import { useAuth, usePartners } from '@/hooks';

export const PartnerDashboard = () => {
  const { user } = useAuth();
  const { partners, syncMetrics } = usePartners();
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Partner Operations" />
      <MetricsSummary onSync={syncMetrics} />
      <PartnerList data={partners} />
    </SafeAreaView>
  );
};`,
  },
  {
    id: 'speedleasing',
    github: 'https://github.com/tahiry-dev/speed-leasing-poc',
    live: '#',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    codeSnippet: `// Speed Leasing PoC
interface LeaseSimulation {
  assetValue: number;
  durationMonths: number;
  residualValue: number;
}

export function calculateMonthlyRate(input: LeaseSimulation) {
  const baseRate = 0.045; // 4.5% APR
  const amortized = (input.assetValue - input.residualValue) / input.durationMonths;
  const monthlyInterest = (input.assetValue * baseRate) / 12;
  return Number((amortized + monthlyInterest).toFixed(2));
}`,
  },
  {
    id: 'ukatis',
    github: 'https://github.com/tahiry-dev/ukatis-pension-poc',
    live: '#',
    tags: ['React', 'Node.js', 'Tailwind'],
    codeSnippet: `// Ukatis Pension PoC
export async function calculatePensionEstimate(fundId: string, tenure: number) {
  const fund = await db.pensionFunds.findUnique({ where: { id: fundId } });
  const projectedReturn = fund.yieldRate * Math.pow(1 + 0.03, tenure);
  
  return {
    guaranteedCapital: fund.balance * projectedReturn,
    monthlyAnnuity: (fund.balance * projectedReturn) / (20 * 12),
  };
}`,
  },
];

export default function WorksSection() {
  const t = useTranslations('Works');
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="works" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-cyan-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Titre & Sous-titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2 text-center">
          {t('badge')}
        </h2>
        <div className="w-16 h-1 bg-cyan-400 rounded-full mb-3" />
        <p className="text-slate-400 font-mono text-xs md:text-sm text-center max-w-lg mb-12">
          {t('subtitle')}
        </p>

        {/* Liens d'action Live Demo & GitHub */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <a
            href={currentProject.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 font-bold text-lg hover:text-cyan-300 transition-colors group"
          >
            <span className="underline underline-offset-8 decoration-cyan-500/50 group-hover:decoration-cyan-400">
              {t('viewWebsite')}
            </span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <span className="text-slate-700 font-mono select-none">|</span>

          <a
            href={currentProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 text-xs font-mono hover:border-cyan-400/60 hover:text-white transition-all shadow-md"
          >
            <svg className="w-4 h-4 fill-cyan-400" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {t('viewGithub')}
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full bg-[#0d1424] border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:bg-cyan-950/60 hover:scale-105 active:scale-95 transition-all shadow-lg shrink-0 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Fenêtre visible (Viewport) */}
          <div className="w-full overflow-hidden rounded-2xl">
            {/* Piste de défilement continu */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, idx) => (
                <div key={project.id} className="w-full shrink-0 px-2">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Écran 1: Vue Code Source */}
                    <div className="lg:col-span-5 rounded-2xl bg-[#090d16] border border-slate-800 p-5 flex flex-col justify-between shadow-2xl overflow-hidden min-h-[320px]">
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-mono text-slate-300">source.tsx</span>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                        </div>
                      </div>
                      <pre className="text-[11px] font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap flex-1">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>

                    {/* Écran 2: Carte Projet & Rendu */}
                    <div className="lg:col-span-7 rounded-2xl bg-[#0d1424] border border-cyan-500/20 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[320px]">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-cyan-400">
                          <Monitor className="w-5 h-5" />
                          <span className="text-xs font-mono uppercase tracking-widest">
                            PoC {idx + 1} / {projects.length}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                          {t(`projects.${project.id}.title`)}
                        </h3>

                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                          {t(`projects.${project.id}.description`)}
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                        {project.tags.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-xs font-mono text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="w-11 h-11 rounded-full bg-[#0d1424] border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:bg-cyan-950/60 hover:scale-105 active:scale-95 transition-all shadow-lg shrink-0 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex items-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}