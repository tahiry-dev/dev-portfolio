import { useTranslations } from 'next-intl';
import { Monitor, Smartphone } from 'lucide-react';

const skills = [
  {
    name: 'React',
    color: 'from-cyan-500 to-cyan-600',
    borderColor: 'border-cyan-400/40',
    textColor: 'text-cyan-400',
    svg: (
      <svg className="w-10 h-10" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'React Native',
    color: 'from-sky-500 to-blue-600',
    borderColor: 'border-sky-400/40',
    textColor: 'text-sky-400',
    svg: (
      <svg className="w-10 h-10" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#38bdf8" />
        <g stroke="#38bdf8" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: 'from-slate-800 to-black',
    borderColor: 'border-slate-700',
    textColor: 'text-white',
    svg: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 180 180" fill="currentColor">
        <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
          <circle cx="90" cy="90" fill="white" r="90" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
          <path
            d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
            fill="white"
          />
          <rect fill="white" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: 'from-emerald-600 to-green-700',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
    svg: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm0 3.3l9.5 5.5v11L16 27.8 6.5 22.3v-11L16 5.8z" />
        <path d="M16 11.5c-2.5 0-4.5 1.5-4.5 3.5 0 2.2 2.2 2.8 4.2 3.1 2.2.3 3 .7 3 1.6 0 .9-.9 1.5-2.2 1.5s-2.5-.5-3.3-1.4l-1.6 1.8c1.3 1.4 3.1 2.1 4.9 2.1 2.8 0 4.7-1.6 4.7-3.8 0-2.3-2.1-3-4.3-3.3-2-.3-2.9-.6-2.9-1.4 0-.8.8-1.3 2-1.3 1.4 0 2.2.5 3 1.2l1.5-1.8c-1.2-1.1-2.8-1.6-4.5-1.6z" />
      </svg>
    ),
  },
];

export default function SkillsSection() {
  const t = useTranslations('SkillsSection');

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Symbole de code décoratif en néon */}
        <div className="text-cyan-400 font-mono text-4xl md:text-5xl font-black mb-4 select-none drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          &lt;/&gt;
        </div>

        {/* Titre & Sous-titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2 text-center">
          {t('badge')}
        </h2>
        <div className="w-16 h-1 bg-cyan-400 rounded-full mb-3" />
        <p className="text-slate-400 font-mono text-xs md:text-sm text-center max-w-md mb-12">
          {t('subtitle')}
        </p>

        {/* Cartes de spécialités (Web / Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-16">
          <div className="p-6 rounded-2xl bg-[#0d1424] border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.08)] flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-3">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{t('web.title')}</h3>
            <p className="text-xs font-mono text-cyan-400/80">{t('web.subtitle')}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1424] border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.08)] flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-3">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{t('mobile.title')}</h3>
            <p className="text-xs font-mono text-cyan-400/80">{t('mobile.subtitle')}</p>
          </div>
        </div>

        {/* Bulles d'icônes technologiques */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 w-full max-w-3xl justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group cursor-pointer">
              <div
                className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full p-0.5 bg-gradient-to-tr ${skill.color} border-2 ${skill.borderColor} shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]`}
              >
                <div className="w-full h-full rounded-full bg-[#0d1424]/90 flex items-center justify-center backdrop-blur-sm">
                  {skill.svg}
                </div>
              </div>
              <span className={`mt-3 font-mono font-bold text-sm tracking-wider uppercase ${skill.textColor}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}