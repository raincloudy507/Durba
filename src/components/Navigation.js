import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 1. Add state to track the active link
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 2. Function to handle link clicks
  const handleNavLinkClick = (text) => {
    setActiveLink(text);
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <div className="navigation-wrapper">
      <div className="navigation-container1">
        <nav id="navigation-main" className="navigation">
          <div className="navigation-container">
            <a href="/" onClick={() => setActiveLink('Home')}>
              <div aria-label="Durba Foundation Home" className="navigation-logo">
                <div className="navigation-logo-icon">
                  <img src="/durba-logo-small.png" alt="durba-logo-small" />
                </div>
                <div className="navigation-logo-text">
                  <span className="navigation-logo-name">Durba Foundation</span>
                  <span className="navigation-logo-tagline">Where unity sprouts</span>
                </div>
              </div>
            </a>

            <button className="navigation-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {!isMenuOpen ? (
                <span className="navigation-toggle-open">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16M4 12h16M4 19h16" />
                  </svg>
                </span>
              ) : (
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </span>
              )}
            </button>

            <div className={`navigation-menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="navigation-menu-backdrop" onClick={() => setIsMenuOpen(false)}></div>
              <ul className="navigation-list">
                {/* 3. Pass active state and click handler to NavItems */}
                <NavItem 
                  href="/" 
                  text="Home" 
                  isActive={activeLink === 'Home'} 
                  onClick={() => handleNavLinkClick('Home')} 
                />
                <NavItem 
                  href="#Mission" 
                  text="Our Mission" 
                  isActive={activeLink === 'Our Mission'} 
                  onClick={() => handleNavLinkClick('Our Mission')} 
                />
                <NavItem 
                  href="#Events" 
                  text="Events & Festivals" 
                  isActive={activeLink === 'Events & Festivals'} 
                  onClick={() => handleNavLinkClick('Events & Festivals')} 
                />
                <NavItem 
                  href="#Gallery" 
                  text="Gallery" 
                  isActive={activeLink === 'Gallery'} 
                  onClick={() => handleNavLinkClick('Gallery')} 
                />
                <NavItem 
                  href="#Magazine" 
                  text="দুর্বার দর্পন (Durbar Darpan)" 
                  isActive={activeLink === 'দুর্বার দর্পন (Durbar Darpan)'} 
                  onClick={() => handleNavLinkClick('দুর্বার দর্পন (Durbar Darpan)')} 
                />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

// 4. Update sub-component to receive and use isActive
const NavItem = ({ href, text, isActive, onClick }) => (
  <li className="navigation-item">
    <a 
      href={href} 
      onClick={onClick} 
      className={`navigation-link ${isActive ? 'active' : ''}`}
    >
      <span className="navigation-link-text">{text}</span>
      <span className="navigation-link-accent"></span>
    </a>
  </li>
);

export default Navigation;
