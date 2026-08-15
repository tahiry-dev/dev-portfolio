import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Hero');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-emerald-400">{t('headline')}</h1>
      <p className="mt-2 text-xl text-slate-300">{t('role')}</p>
    </main>
  );
}
