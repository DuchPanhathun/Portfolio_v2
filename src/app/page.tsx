'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Portfolio from '@/components/Portfolio';
import HomeContent from '@/components/Home-Content';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="home-content">
            <HomeContent/>
          </div>
        );
      case 'portfolio':
        return <Portfolio />;
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
