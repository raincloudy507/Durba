import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 1. Add state to track the active link
  const [setActiveLink] = useState('Home');

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // 2. Function to handle link clicks
  const handleNavLinkClick = (text) => {
    setActiveLink(text);
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
  };

    // ✅ Scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  // ✅ Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);


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
            {/* ✅ Portal menu */}
            {createPortal(
              <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />,
                document.body
          )}
          </div>
        </nav>
      </div>
    </div>
  );
};

// 4. Update sub-component to receive and use isActive
// const NavItem = ({ href, text, isActive, onClick }) => (
//   <li className="navigation-item">
//     <a 
//       href={href} 
//       onClick={onClick} 
//       className={`navigation-link ${isActive ? 'active' : ''}`}
//     >
//       <span className="navigation-link-text">{text}</span>
//       <span className="navigation-link-accent"></span>
//     </a>
//   </li>
// );

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`}>

      <div className="mobile-nav-backdrop" onClick={onClose} />

      {/* Drawer */}
      <div className="mobile-nav-drawer">
        <div aria-label="Durba Foundation Home" className="navigation-logo">
          <div className="mobile-nav-logo">
            <img src="/durba-logo-small.png" alt="durba-logo-small" />
          </div>
          <div className="mobile-nav-logo-text">
            <span className="mobile-nav-logo-name">Durba Foundation</span>
            {/* <span className="mobile-nav-logo-tagline">Where unity sprouts</span> */}
          </div>
        <button className="mobile-nav-close" onClick={onClose}>
          ✕
        </button>
        </div>
        <ul>
          <li><a href="/" onClick={onClose}>Home</a></li>
          <li><a href="#Mission" onClick={onClose}>Our Mission</a></li>
          <li><a href="#Events" onClick={onClose}>Events & Festivals</a></li>
          <li><a href="#Magazine" onClick={onClose}>দুর্বার দর্পন (Durbar Darpan)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
