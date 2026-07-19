import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import CredentialsSection from './components/CredentialsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll helper
  const navigateToSection = (index: number) => {
    const el = document.getElementById(`page-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(index);
    }
  };

  // Set up an Intersection Observer to automatically highlight the current page in navigation when scrolling
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.52, // Intersects when more than half the page is visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id && id.startsWith('page-')) {
            const index = parseInt(id.replace('page-', ''), 10);
            if (!isNaN(index)) {
              setActiveSection(index);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each section element
    const sections = ['page-0', 'page-1', 'page-2', 'page-3', 'page-4', 'page-5'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#120b16] text-zinc-100">
      {/* Dynamic Sticky Header & Dots navigation indicators */}
      <Navbar activeSection={activeSection} onNavigate={navigateToSection} />

      {/* Snap Scroll Container holding all 6 pages vertically */}
      <div 
        ref={containerRef}
        className="snap-container w-full h-full"
      >
        <HeroSection onNavigate={navigateToSection} />
        <ProjectsSection onNavigate={navigateToSection} />
        <SkillsSection onNavigate={navigateToSection} />
        <ExperienceSection onNavigate={navigateToSection} />
        <CredentialsSection onNavigate={navigateToSection} />
        <ContactSection onNavigate={navigateToSection} />
      </div>
    </div>
  );
}
