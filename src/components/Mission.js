import React from 'react';
// import './style.css';
import './Homepage.css';

const Mission = () => {
  return (
    <section aria-labelledby="about-durba" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 id="about-durba" className="about-section-title">About Durba Foundation</h2>
          <p className='section-content-writeup'>
              Durba Foundation celebrates our heritage in Canada through
              inspired rituals, creative festivals, and community arts and performances that
              deepen cultural understanding and belonging.
          </p>
          <div className="about-mission" style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <h3 className="about-mission__title">Our Mission</h3>
          <p className="section-content">
                To nurture living traditions—ritual, music, storytelling,
                visual arts—by making our practice accessible, joyful, and
                relevant in the GTA while nurturing intergenerational
                connections.
          </p>
          </div>
          <div className="about-values" style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="value-item">
            <span className="value-number">4</span>
            <span className="value-label">Core Values</span>
          </div>
          <p className="section-content">
                Artistic integrity, inclusive devotion, cultural stewardship,
                transparency in how donations create measurable community
                programs and public events.
          </p>
          </div>
          <div className="about-impact" style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <div className="impact-stat">
            <span className="impact-number">1000+</span>
            <span className="impact-label">Community Members &amp; Guests</span>
          </div>
            <p className="section-content">
                We stage seasonal festivals, community gatherings, artist
                collaborations that engage a lot of people each year. We strive to create a welcoming space for
                everyone to experience the richness of our heritage and traditions and pass on this legacy to future
                generations.
            </p>
          </div>
          <div className="about-cta">
          <button aria-label="Join Durba Foundation and support our heritage" className="btn btn-primary">
                Join Us
          </button>
          <a href="#Mission">
             <div className="btn btn-link"><span>Learn More</span></div>
          </a>
          </div>
        </div>
        <div className="about-video">
          <video id="aboutVideo" autoplay="true" muted="true" loop="true" playsinline="true" aria-label="Durba Foundation our festival celebration video" src="https://videos.pexels.com/video-files/7685291/7685291-hd_1080_1920_30fps.mp4">
            <span>Your browser does not support video playback.</span>
          </video>
          <div className="video-vignette"></div>
          <div className="video-caption">
            <p>
                Your support fuels sacred celebrations, artist commissions,
                volunteer-led outreach, and transparent, accountable
                programming that keeps our traditions vibrant in Canada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
