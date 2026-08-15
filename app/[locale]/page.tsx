import Navbar from '../components/Navbar';
import FloatingSidebar from '../components/FloatingSidebar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorksSection from '../components/WorksSection';
import ContactSection from '../components/ContactSection';
import ScrollToTop from '../components/ScrollToTop';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <FloatingSidebar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  );
}