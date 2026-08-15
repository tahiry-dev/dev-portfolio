import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Mail, MapPin, Briefcase } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Halo lumineux d'ambiance bleu cyan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Filigrane en arrière-plan */}
        <h2 className="text-center font-black tracking-widest text-cyan-400/10 text-6xl md:text-8xl lg:text-9xl uppercase select-none mb-4">
          {t('tagline')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Carte Profil ID (Gauche) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-xs p-6 rounded-3xl bg-[#0d1424] border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] rounded-tr-[70px]">
              
              {/* Conteneur Photo JPEG */}
              <div className="relative w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg mb-4">
                <Image
                  src="/profile.jpeg"
                  alt="Tahiry RANDRIAMIARINTSOA"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white">Tahiry</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Full-Stack Developer</p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 font-mono mb-6">
                <a
                  href="mailto:tahirycontact@gmail.com"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">tahirycontact@gmail.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{t('card.location')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-emerald-400">{t('card.status')}</span>
                </div>
              </div>

              {/* Tags technologiques */}
              <div className="flex flex-wrap gap-1.5 justify-center">
                {['TypeScript', 'Next.js', 'Tailwind', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-[10px] font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Présentation principale & Compteurs (Droite) */}
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="flex-1 space-y-4">
              <span className="text-cyan-400 font-mono text-xs tracking-wider">&lt;h1&gt;</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                {t('greeting')} <br />
                {t('intro')} <span className="text-cyan-400">{t('name')}</span>, <br />
                {t('title')}
              </h1>
              <span className="text-cyan-400 font-mono text-xs tracking-wider block">&lt;/h1&gt;</span>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md font-light">
                {t('description')}
              </p>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-base hover:text-cyan-300 group"
                >
                  <span className="underline underline-offset-8 decoration-cyan-500/40 group-hover:decoration-cyan-400">
                    {t('cta')}
                  </span>
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Carte des métriques / stats */}
            <div className="w-full md:w-44 flex flex-col gap-4 p-5 rounded-2xl bg-[#0d1424] border border-slate-800 shrink-0">
              <div>
                <span className="text-3xl font-extrabold text-cyan-400 font-mono">4+</span>
                <p className="text-xs text-slate-400 leading-snug mt-1">{t('stats.languages')}</p>
              </div>
              <hr className="border-slate-800/80" />
              <div>
                <span className="text-3xl font-extrabold text-cyan-400 font-mono">8+</span>
                <p className="text-xs text-slate-400 leading-snug mt-1">{t('stats.tools')}</p>
              </div>
              <hr className="border-slate-800/80" />
              <div>
                <span className="text-3xl font-extrabold text-cyan-400 font-mono">5+</span>
                <p className="text-xs text-slate-400 leading-snug mt-1">{t('stats.experience')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}