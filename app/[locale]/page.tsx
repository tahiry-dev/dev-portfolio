import Navbar from '../components/Navbar';
import FloatingSidebar from '../components/FloatingSidebar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <FloatingSidebar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}