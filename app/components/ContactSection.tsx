'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      let result: { error?: string } = {};

      try {
        result = text ? JSON.parse(text) : {};
      } catch {
        throw new Error(`Erreur serveur (${response.status}) : ${text || 'Réponse vide'}`);
      }

      if (!response.ok) {
        throw new Error(result.error || `Erreur (${response.status}) lors de l'envoi.`);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : "Impossible d'envoyer le message. Veuillez réessayer."
      );
    }
  };

  return (
    <section id="contact" className="relative pt-24 pb-12 px-6 overflow-hidden">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Titre & Sous-titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-2 text-center">
          {t('badge')}
        </h2>
        <div className="w-16 h-1 bg-cyan-400 rounded-full mb-3" />
        <p className="text-slate-400 font-mono text-xs md:text-sm text-center max-w-md mb-12">
          {t('subtitle')}
        </p>

        {/* Badge "Send Me A Message" */}
        <div className="mb-12">
          <div className="px-8 py-3 rounded-2xl rounded-tr-none bg-[#090d16] border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <h3 className="text-xl md:text-2xl font-mono font-bold text-cyan-400 tracking-wider">
              {t('boxTitle')}
            </h3>
          </div>
        </div>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nom */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-cyan-400 tracking-wide">
                {t('nameLabel')}
              </label>
              <input
                type="text"
                required
                disabled={status === 'loading'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('namePlaceholder')}
                className="w-full bg-transparent border-b border-cyan-500/40 pb-2 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono text-sm disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-cyan-400 tracking-wide">
                {t('emailLabel')}
              </label>
              <input
                type="email"
                required
                disabled={status === 'loading'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('emailPlaceholder')}
                className="w-full bg-transparent border-b border-cyan-500/40 pb-2 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono text-sm disabled:opacity-50"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-xs font-mono text-cyan-400 tracking-wide">
              {t('messageLabel')}
            </label>
            <textarea
              required
              rows={3}
              disabled={status === 'loading'}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t('messagePlaceholder')}
              className="w-full bg-transparent border-b border-cyan-500/40 pb-2 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors font-mono text-sm resize-none disabled:opacity-50"
            />
          </div>

          {/* Messages de retour (succès / erreur) */}
          {status === 'success' && (
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{t('successMessage')}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Bouton de soumission */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <span>Envoi en cours...</span>
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  <span>{t('sendButton')}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="w-full mt-24 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Tahiry RANDRIAMIARINTSOA. {t('rights')}</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tahiry-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 hover:border-cyan-400/60 hover:text-white transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}