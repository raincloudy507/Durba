import React, {useState} from 'react';
import './Footer.css';
import PrivacyPolicy from './Privacy_policy';
import TermsOfService from './Terms_of_service';


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
										<a href="/PrivacyPolicy" onClick={togglePrivacy}>
											<div class="footer-legal-link">
												<span>Privacy Policy</span>
											</div>
										</a>
										<span class="footer-legal-separator">|</span>
										{/* Trigger the Terms of Service pop-up here */}
										<a href="#TermsOfService" onClick={toggleTerms}>
											<div class="footer-legal-link">
												<span>Terms of Service</span>
											</div>
										</a>
									</div>
								</div>
								{/* The Pop-up Modal for Privacy Policy */}
      							{isPrivacyOpen && (
        							<div className="modal-overlay" onClick={togglePrivacy}>
          								<div className="modal-content" onClick={(e) => e.stopPropagation()}>
            								<button className="close-button" onClick={togglePrivacy}>&times;</button>
            								<h2>Privacy Policy</h2>
            								<div className="modal-body">
												<PrivacyPolicy />
            								</div>
						  				</div>
									</div>	
								)}									
								{/* The Pop-up Modal for Terms of Service */}
      							{isTermsOpen && (
        							<div className="modal-overlay" onClick={toggleTerms}>
          								<div className="modal-content" onClick={(e) => e.stopPropagation()}>
            								<button className="close-button" onClick={toggleTerms}>&times;</button>
            								<h2>Terms of Service</h2>
            								<div className="modal-body">
												<TermsOfService />
            								</div>
						  				</div>
									</div>	
								)}									

							</div>
						</div>
					</footer>

					{/*					<div className={`navigation-menu ${isMenuOpen ? 'open' : ''}`}>
						<div className="navigation-menu-backdrop" onClick={() => setIsMenuOpen(false)}></div>
						<ul className="navigation-list">
							
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
								href="#Magazine"
								text="Durbar Darpan"
								isActive={activeLink === 'Durbar Darpan'}
								onClick={() => handleNavLinkClick('Durbar Darpan')}
							/>
						</ul>
					</div> */}
				</div>
			</div>
		</footer-wrapper>
	);
};

// {/* const NavItem = ({ href, text, isActive, onClick }) => (
// 	<li className="navigation-item">
// 		<a
// 			href={href}
// 			onClick={onClick}
// 			className={`navigation-link ${isActive ? 'active' : ''}`}
// 		>
// 			<span className="navigation-link-text">{text}</span>
// 			<span className="navigation-link-accent"></span>
// 		</a>
// 	</li>
// ); */}

export default Footer;
