'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Détecte le défilement que ce soit sur window, documentElement ou body
      const scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (scrollPosition > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Écoute passive sur window et document
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    // Vérifie la position immédiatement au montage
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Fallback pour documentElement au cas où
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-12 h-12 rounded-full bg-[#090d16] border-2 border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-950 hover:text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
    >
      <ChevronUp className="w-6 h-6 stroke-[2.5]" />
    </button>
  );
}