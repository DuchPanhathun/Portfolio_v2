'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Portfolio from '@/components/Portfolio';
import HomeContent from '@/components/Home-Content';

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
          <div className="blog-content">
            <h2>Blog</h2>
            <p>Coming soon...</p>
          </div>
        );
      case 'pages':
        return (
          <div className="pages-content">
            <h2>Pages</h2>
            <p>Additional pages will be available soon...</p>
          </div>
        );
      case 'contact':
        return (
          <div className="contact-content">
            <h2>Contact Us</h2>
            <p>Get in touch with us...</p>
          </div>
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
