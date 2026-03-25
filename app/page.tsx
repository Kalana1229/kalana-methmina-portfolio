'use client';

import dynamic from 'next/dynamic';
import React from 'react';

export const dynamicParams = true;

const Navbar = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.Navbar })), {
  ssr: false,
  loading: () => null,
});

const Footer = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.Footer })), {
  ssr: false,
  loading: () => null,
});

import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from '@/components/sections';

function HomeContent() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    const toggleVisibility = () => {
      if (typeof window !== 'undefined') {
        setIsVisible(window.pageYOffset > 300);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-accent to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}

export default HomeContent;
