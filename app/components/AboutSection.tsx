import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('About');

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Badge Titre "About Me" */}
        <div className="mb-12">
          <div className="inline-block px-7 py-3 rounded-2xl rounded-tr-none bg-[#090d16] border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
              {t('badge')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Bloc Terminal de Code (Gauche - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 md:p-9 rounded-3xl bg-[#0d1424]/90 border border-slate-800 shadow-2xl backdrop-blur-md font-mono text-sm leading-relaxed space-y-4">
              
              {/* Balise d'ouverture */}
              <span className="text-cyan-400/80 text-xs block select-none">&lt;p&gt;</span>

              {/* Titre Hello */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-cyan-400">
                {t('greeting')}
              </h3>

              {/* Paragraphes narratifs */}
              <p className="text-slate-300">
                {t('p1')}
              </p>

              <p className="text-slate-300">
                {t('p2')}
              </p>

              <p className="text-slate-300">
                {t('p3')}
              </p>

              <p className="text-slate-300">
                {t('p4')}
              </p>

              {/* Balise de fermeture */}
              <span className="text-cyan-400/80 text-xs block select-none">&lt;/p&gt;</span>
            </div>
          </div>

          {/* Encart Photo Workspace (Droite - 5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl group">
              <Image
                src="/about-workspace.jpeg"
                alt="Workspace and development setup"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b12]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}