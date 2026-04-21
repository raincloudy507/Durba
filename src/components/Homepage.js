import React from 'react';
// import './style.css';
import './Homepage.css';

const Homepage = () => {
  return (
    <section aria-labelledby="hero-heading" className="hero">
      <div className="hero__panel">
        <h1 id="hero-heading" className="home-hero-title">
          Durba Foundation — 
          <span>Weaving our heritage into Canada's cultural tapestry</span></h1>
        <p className='home-hero-subtitle'>
          Celebrating cultural heritage and creative expression across the GTA. 
          Join us to experience vibrant festivals, meaningful rituals and 
          community arts and performances that keep our heritage and traditions 
          alive and evolving in Canada. 
        </p>
        <div className="hero__ctas">
          <a href= "#mission">
            <button className="btn btn-primary btn-lg" aria-label="Learn more about Durba Foundation">Learn more</button>
          </a>
          <a href= "#events">
            <button className="btn btn-lg btn-outline" aria-label="View our upcoming events">View Durba events</button>
          </a>
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

export default Homepage;
