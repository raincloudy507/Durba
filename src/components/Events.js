import React from 'react';
// import './style.css';
import './Homepage.css';

const Events = () => {
  return (
    <section aria-labelledby="upcoming-events-heading" className="events-panel" id="events">
      <div className="events-panel-content">
        <h2 id="upcoming-events-heading" class="section-title">
          DURBA Festivals &amp; Events this year
        </h2>
        <p class="section-subtitle">Celebrate, Create, Connect</p>
        <div class="events-layout">
          <article role="article" aria-labelledby="main-event-title" aria-describedby="main-event-description"
            class="card card--featured">
            <div class="card__image">
              <img
                src="/picnic.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="DURBA picnic" loading="lazy" />
              <div class="card__overlay"></div>
            </div>
            <div class="card__content">
              <div class="event-meta">
                <span class="event-date">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    aria-hidden="true">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2">
                      <path d="M8 2v4m8-4v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                  <span>Oct 10–11, 2026</span>
                </span>
                <span class="event-location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15">
                    </path>
                  </svg>
                  <span>GTA</span>
                </span>
              </div>
              <h3 id="main-event-title" class="card__title">DURBA Picnic 2026</h3>
              <p id="main-event-description" class="card__description">
                Come and celebrate the joy of summer with us at DURBA picnic !
              </p>
              {/*<div class="card__actions">
                <button aria-label="RSVP for Durga Puja event" class="btn btn-primary btn-sm">
                  RSVP
                </button>
                <button aria-label="Donate to Durga Puja" class="btn btn-sm btn-accent">
                  Donate
                </button>
              </div> */}
            </div>
          </article>
 
          <article role="article" aria-labelledby="event-saraswati-title" class="card card--compact">
            <div class="card__image-compact">
                 <img
                  src="https://images.pexels.com/photos/13271550/pexels-photo-13271550.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Durga Puja celebration with vibrant idol" loading="lazy" />
            </div>
              <div class="card__content-compact">
                <span class="event-date-sm">Jan 24, 2026</span>
                <h3 id="event-saraswati-title" class="card__title-sm">
                  Durga Puja 2026
                </h3>
                <p class="card__description-sm">
                  A vibrant celebration of art, culture, and community spirit through Durba's signature Durga Puja festivities.
                </p>
{/*}                <button aria-label="RSVP for Saraswati Puja event" class="btn btn-primary btn-sm">
                  RSVP
                </button> */}
              </div>
            </article>

{/*         <div class="events-support">
            <article role="article" aria-labelledby="event-diwali-title" class="card card--compact">
              <div class="card__image-compact">
                <img
                  src="https://images.pexels.com/photos/8818585/pexels-photo-8818585.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Diwali celebration with sparklers" loading="lazy" />
              </div>
              <div class="card__content-compact">
                <span class="event-date-sm">Nov 1, 2025</span>
                <h3 id="event-diwali-title" class="card__title-sm">
                  Diwali
                </h3>
                <p class="card__description-sm">
                  A lantern-lit evening of light, music and contemporary
                  Rangoli showcases.
                </p>
                <button aria-label="RSVP for Diwali event" class="btn btn-primary btn-sm">
                  RSVP
                </button>
              </div>
            </article>
            <article role="article" aria-labelledby="event-lakshmi-title" class="card card--compact">
              <div class="card__image-compact">
                <img
                  src="https://images.pexels.com/photos/6138896/pexels-photo-6138896.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Lakshmi Puja with diyas" loading="lazy" />
              </div>
              <div class="card__content-compact">
                <span class="event-date-sm">Nov 2, 2025</span>
                <h3 id="event-lakshmi-title" class="card__title-sm">
                  Lakshmi Puja
                </h3>
                <p class="card__description-sm">
                  A ceremony blending traditional puja with guided creative
                  meditations.
                </p>
                <button aria-label="RSVP for Lakshmi Puja event" class="btn btn-primary btn-sm">
                  RSVP
                </button>
              </div>
            </article>
            <article role="article" class="card card--compact card--cta">
              <div class="card__cta-content">
                <h3 class="card__cta-title">Reserve your place</h3>
                <p class="card__cta-text">
                  Simple RSVP, Transparent Impact
                </p>
                <p class="section-content">
                  Every ticket and donation supports ritual upkeep, artist
                  stipends, and educational outreach across the GTA.
                </p>
              </div>
            </article> 
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Events;
