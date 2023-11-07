import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectSection from '@/components/ProjectSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
