import React, {useState} from 'react';
import './Footer.css';
import PrivacyPolicy from './Privacy_policy';
import TermsOfService from './Terms_of_service';
import { useState } from "react";

const Footer = () => {
	const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
	const togglePrivacy = (e) => {
    	e.preventDefault(); // Prevents the #Homepage jump
    	setIsPrivacyOpen(!isPrivacyOpen);
  	};

	const [isTermsOpen, setIsTermsOpen] = useState(false);
	const toggleTerms = (e) => {
		e.preventDefault(); // Prevents the #Homepage jump
		setIsTermsOpen(!isTermsOpen);
  	};
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	// 1. Add state to track the active link
	// const [activeLink, setActiveLink] = useState('Home');

	// const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	// 2. Function to handle link clicks
// {/*    const handleNavLinkClick = (text) => {
// 		setActiveLink(text);
// 		setIsMenuOpen(false); // Close mobile menu when a link is clicked
// 	}; */}

	return (
		<footer-wrapper className="footer-container">
			<div className="footer-container-1">
				<div className="footer-container-2">
					{/* <div className="footer-container-3"></div> */}
					<footer id='footer-durba' className='footer-main'>
						{/* <div class="footer-decorative-pattern"></div> */}
						<div className="footer-content-wrapper">
							<div className="footer-primary-section">
								<div className="footer-brand-column">
									<div className="footer-logo-wrapper">
										<div className="footer-durba-logo">
											<img src="/durba-logo-small.png" alt="Durba Logo" />
										</div>
										<h3 className='footer-brand-name'>Durba Foundation</h3>
									</div>
									<p> Promoting our culture, rituals, and religious practices across Canada. Celebrating traditions through festivals, cultural events, and community engagement in the GTA. </p>
									<div className="social-links">
										<a href="https://www.facebook.com/durba.foundation/">
											<div aria-label="Facebook" className="footer-social-link" style={{ animationDelay: '0s' }}>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
													<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
												</svg>
											</div>
										</a>
										<a href="https://www.instagram.com/durbafoundation/">
											<div aria-label="Twitter" className="footer-social-link" style={{ animationDelay: '0.1s' }}>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
													<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
												</svg>
											</div>
										</a>
										<a href="https://www.instagram.com/durbafoundation/">
											<div aria-label="Instagram" className="footer-social-link" style={{ animationDelay: '0.2s' }}>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
													<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
														<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
														<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
													</g>
												</svg>
											</div>
										</a>
									</div>
								</div>
								<div className="footer-links-column">
									<h4 className='footer-column-title'>Quick links</h4>
									<ul className='footer-link-list'>
										<li className='footer-link-item'>
											<a href='#Mission'>
												<div className='footer-link'>
													<span> Our Mission </span>
												</div>
											</a>
										</li>
										<li className='footer-link-item'>
											<a href='#Events'>
												<div className='footer-link'>
													<span> Events Calendar </span>
												</div>
											</a>
										</li>
										{/* <li className='footer-link-item'>
											<a href='#Mission'>
												<div className='footer-link'>
													<span> Get Involved </span>
												</div>
											</a>
										</li> */}
										<li className='footer-link-item'>
											<a href='#Mission'>
												<div className='footer-link'>
													<span> দুর্বার দর্পন (Durbar Darpan) </span>
												</div>
											</a>
										</li>
									</ul>
								</div>
								<div className="footer-contact-column">
									<h4 className='footer-column-title'>GET IN TOUCH</h4>
									<div className="footer-contact-info">
										<div className="footer-contact-item">
											<div className="footer-contact-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
													<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
														<path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
														<circle cx="10" cy="10" r="3"></circle>
													</g>
												</svg>
											</div>
											<div class="footer-contact-text">
												<span class="footer-contact-label">Address</span>
												<span class="footer-contact-value"> GTA Area, Ontario, Canada </span>
											</div>
										</div>
										<div class="footer-contact-item">
											<div class="footer-contact-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
													<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
														<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
														<rect width="20" height="16" x="2" y="4" rx="2"></rect>
													</g>
												</svg>
											</div>
											<div class="footer-contact-text">
												<span class="footer-contact-label">Email</span>
												<span class="footer-contact-value"> durba.foundation@gmail.com </span>
											</div>
										</div>
										<div class="footer-contact-item">
											<div class="footer-contact-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
													<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
												</svg>
											</div>
											<div class="footer-contact-text">
												<span class="footer-contact-label">Phone</span>
												<span class="footer-contact-value"> +1 (416) 555-0123 </span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="footer-bottom-section">
								<div class="footer-bottom-divider"></div>
								<div class="footer-bottom-content">
									<p class="footer-copyright">
										&copy; 2025 Durba Foundation. All rights reserved.
										Registered Non-Profit Organization in Canada.
									</p>
									<div class="footer-legal-links">
										{/* Trigger the privacy pop-up here */}
										{/* <a href="/PrivacyPolicy" onClick={togglePrivacy}>
											<div class="footer-legal-link">
												<span>Privacy Policy</span>
											</div>
										</a> */}
										<button
										type="button"
										className="footer-legal-link footer-legal-button"
										onClick={() => setShowPrivacy(true)}
										>
										Privacy Policy
										</button>
										<span class="footer-legal-separator">|</span>
										{/* Trigger the Terms of Service pop-up here */}
										<a href="#TermsOfService" onClick={toggleTerms}>
											<div class="footer-legal-link">
												<span>Terms of Service</span>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
{showPrivacy && (
  <div
    className="privacy-modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="privacy-modal-title"
    onClick={() => setShowPrivacy(false)}
  >
    <div
      className="privacy-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="privacy-modal-close"
        aria-label="Close Privacy Policy"
        onClick={() => setShowPrivacy(false)}
      >
        ×
      </button>

      <h2 id="privacy-modal-title">Privacy Policy</h2>

      <div className="privacy-modal-body">
        <p>
          Your privacy is important to us. This website is operated by
          DURBA for the purpose of sharing information about our community,
          events, programs, and activities.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We do not collect personal information through this website unless
          you voluntarily provide it through a contact, registration, or
          participation form.
        </p>

        <h3>How We Use Information</h3>
        <p>
          Information voluntarily provided to us may be used to respond to
          inquiries, communicate about events and activities, and support
          community programs.
        </p>

        <h3>Cookies and Analytics</h3>
        <p>
          This website may use basic cookies or analytics technologies to
          understand website usage and improve the user experience.
        </p>

        <h3>Third-Party Services</h3>
        <p>
          Some website functionality may rely on third-party services.
          Those services may have their own privacy policies governing the
          information they collect.
        </p>

        <h3>Contact</h3>
        <p>
          If you have questions about this Privacy Policy or how information
          is handled, please contact us through the contact information
          provided on this website.
        </p>
      </div>
    </div>
  </div>
)}
					</footer>

				</div>
			</div>
		</footer-wrapper>
	);
};


export default Footer;
