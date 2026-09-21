import React from 'react';
// import './style.css';
// import './Homepage.css';

const Gallery = () => {
  return (
    <section aria-labelledby="hero-heading" className="hero">
      <div className="hero__panel">
        <h1 id="hero-heading" className="home-hero-title">
          Our visual storytelling  — 
          <span>Celebrating our togetherness</span></h1>
        <p className='home-hero-subtitle'>
            Explore our visual showcase, featuring a high-resolution collection of our latest events, celebrations, and creative endeavors. 
            This gallery is designed to give you an immersive, behind-the-scenes look at what we do best. Every image highlights our 
            commitment to quality, attention to detail, and passion for excellence. 
        </p>
        <div className="hero__ctas">
          <a href= "#mission">
            <button className="btn btn-primary btn-lg" aria-label="Click here to view our photo gallery">Click here to view our photo gallery</button>
          </a>
          {/* <a href= "#events">
            <button className="btn btn-lg btn-outline" aria-label="View our upcoming events">View Durba events</button>
          </a> */}
        </div>
      </div>
      <div aria-hidden="true" className="hero__art">
        <img src="https://images.pexels.com/photos/5559377/pexels-photo-5559377.jpeg?auto=compress&cs=tinysrgb&w=1500"
             alt="true"
             loading="eager" 
            className="hero__photo" /> 
        <div className="hero__vignette"></div>
      </div>
    </section>
  );
};

export default Gallery;
