'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Portfolio from '@/components/Portfolio';
import HomeContent from '@/components/Home-Content';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Check for stored category when component mounts
  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    if (storedCategory) {
      setSelectedCategory(storedCategory);
      // Clear it after using it
      localStorage.removeItem('selectedCategory');
    }
  }, [activeSection]);

  const handleNavigateToPortfolio = () => {
    setActiveSection('portfolio');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="home-content">
            <HomeContent onNavigateToPortfolio={handleNavigateToPortfolio} />
          </div>
        );
      case 'portfolio':
        return <Portfolio initialFilter={selectedCategory} />;
      case 'blog':
        return (
          <Resume/>
        );
      case 'contact':
        return (
          <Contact/>
        );
      default:
        return <Portfolio />;
    }
  };

  return (
    <>
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main>
        {renderContent()}
      </main>
    </>
  );
}
