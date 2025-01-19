'use client';

import { useState } from 'react';
import "../../styles/home.scss";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleNav = () => {
    setIsResponsive(!isResponsive);
  };

  const handleNavClick = (section: string) => {
    onSectionChange(section);
    if (isResponsive) {
      setIsResponsive(false);
    }
  };

  return (
    <div className="home-container">
      <div className={`topnav ${isResponsive ? 'responsive' : ''}`}>
      <div className="topnav-logo">
        <a href="#" onClick={() => handleNavClick('home')}>Thun</a>
      </div>
      <div className="menu">
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => handleNavClick('home')}
        >
          home
        </a>
        <a 
          href="#portfolio" 
          className={activeSection === 'portfolio' ? 'active' : ''}
          onClick={() => handleNavClick('portfolio')}
        >
          portfolio
        </a>
        <a 
          href="#blog" 
          className={activeSection === 'blog' ? 'active' : ''}
          onClick={() => handleNavClick('blog')}
        >
          blog
        </a>
        <a 
          href="#pages" 
          className={activeSection === 'pages' ? 'active' : ''}
          onClick={() => handleNavClick('pages')}
        >
          pages
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => handleNavClick('contact')}
        >
          contact
        </a>
        <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
    </div>
  );
} 