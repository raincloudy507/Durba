import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navigation-wrapper">
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <style dangerouslySetInnerHTML={{__html: `
                @media (prefers-reduced-motion: reduce) {
                        .navigation, .navigation-logo { animation: none; transition: none; }
              }
            `}} />

          </div>
        </div>
        <nav id="navigation-main" className="navigation">
          <div className="navigation-container">
            <a href="/">
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

            {/* Hamburger Toggle */}
            <button 
              className="navigation-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
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

            {/* Menu Links */}
            <div className={`navigation-menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="navigation-menu-backdrop" onClick={() => setIsMenuOpen(false)}></div>
              <ul className="navigation-list">
                <NavItem href="/" text="Home" />
                <NavItem href="#mission" text="Our Mission" />
                <NavItem href="#events" text="Events & Festivals" />
                <NavItem href="#gallery" text="Gallery" />
                <NavItem href="#magazine" text="Durbar Darpan" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

// Sub-component for cleaner list items
const NavItem = ({ href, text }) => (
  <li className="navigation-item">
    <a href={href}>
      <div className="navigation-link">
        <span className="navigation-link-text">{text}</span>
        <span className="navigation-link-accent"></span>
      </div>
    </a>
  </li>
);

export default Navigation;
