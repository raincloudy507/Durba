import React, { useMemo, useState } from 'react';
import events from '../data/events.js';
import './Homepage.css';

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use today's date to determine which events are upcoming.
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events
      .filter((event) => {
        const endDate = new Date(`${event.endDate}T23:59:59`);
        return endDate >= today;
      })
      .sort(
        (a, b) =>
          new Date(a.startDate) - new Date(b.startDate)
      );
  }, []);

  // The first future/current event is automatically the featured event.
  // const upcomingIndex = upcomingEvents.length > 0 ? 0 : -1;

  // Keep carousel position within the available events.
  const activeIndex =
    upcomingEvents.length > 0
      ? Math.min(currentIndex, upcomingEvents.length - 1)
      : 0;

  const activeEvent =
    upcomingEvents.length > 0
      ? upcomingEvents[activeIndex]
      : null;

  const getPreviousIndex = () => {
    if (upcomingEvents.length <= 1) return 0;

    return (
      (activeIndex - 1 + upcomingEvents.length) %
      upcomingEvents.length
    );
  };

  const getNextIndex = () => {
    if (upcomingEvents.length <= 1) return 0;

    return (activeIndex + 1) % upcomingEvents.length;
  };

  const goPrevious = () => {
    if (upcomingEvents.length <= 1) return;

    setCurrentIndex(getPreviousIndex());
  };

  const goNext = () => {
    if (upcomingEvents.length <= 1) return;

    setCurrentIndex(getNextIndex());
  };

  const formatDate = (startDate, endDate) => {
    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);

    const startMonth = start.toLocaleDateString('en-US', {
      month: 'short',
    });

    const endMonth = end.toLocaleDateString('en-US', {
      month: 'short',
    });

    const startDay = start.getDate();
    const endDay = end.getDate();
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();

    // Single-day event
    if (startDate === endDate) {
      return start.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    }

    // Multi-day event in the same month/year
    if (startMonth === endMonth && startYear === endYear) {
      return `${startMonth} ${startDay}–${endDay}, ${startYear}`;
    }

    // Multi-day event across different months
    if (startYear === endYear) {
      return `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${startYear}`;
    }

    return `${startMonth} ${startDay}, ${startYear} – ${endMonth} ${endDay}, ${endYear}`;
  };

  const getCardIndex = (offset) => {
    if (upcomingEvents.length === 0) return -1;

    return (
      (activeIndex + offset + upcomingEvents.length) %
      upcomingEvents.length
    );
  };

  const previousEvent =
    upcomingEvents.length > 1
      ? upcomingEvents[getCardIndex(-1)]
      : null;

  const nextEvent =
    upcomingEvents.length > 1
      ? upcomingEvents[getCardIndex(1)]
      : null;

  return (
    <section
      aria-labelledby="upcoming-events-heading"
      className="events-panel"
      id="events"
    >
      <div className="events-panel-content">

        <h2
          id="upcoming-events-heading"
          className="section-title"
        >
          DURBA Festivals &amp; Events
        </h2>

        <p className="section-subtitle">
          Celebrate, Create, Connect
        </p>

        {upcomingEvents.length === 0 ? (
          <div className="events-empty">
            <h3>No upcoming events</h3>
            <p>
              Please check back soon for upcoming DURBA
              festivals and events.
            </p>
          </div>
        ) : (
          <div className="events-carousel">

            {/* Previous Event */}
            <button
              type="button"
              className="carousel-arrow carousel-arrow--left"
              onClick={goPrevious}
              aria-label="Previous event"
              disabled={upcomingEvents.length <= 1}
            >
              &#10094;
            </button>

            <div className="events-carousel-track">

              {/* Previous card */}
              {previousEvent && (
                <article
                  className="card card--compact event-card event-card--side"
                  aria-hidden="true"
                >
                  <div className="card__image-compact">
                    <img
                      src={previousEvent.image}
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="card__content-compact">
                    <span className="event-date-sm">
                      {formatDate(
                        previousEvent.startDate,
                        previousEvent.endDate
                      )}
                    </span>

                    <h3 className="card__title-sm">
                      {previousEvent.title}
                    </h3>

                    <p className="card__description-sm">
                      {previousEvent.description}
                    </p>
                  </div>
                </article>
              )}

              {/* Featured / Upcoming Event */}
              {activeEvent && (
                <article
                  aria-labelledby="main-event-title"
                  aria-describedby="main-event-description"
                  className="card card--featured event-card event-card--active"
                >
                  <div className="card__image">
                    <img
                      src={activeEvent.image}
                      alt={activeEvent.title}
                      loading="eager"
                    />

                    <div className="card__overlay"></div>

                    <span className="event-upcoming-badge">
                      UPCOMING
                    </span>
                  </div>

                  <div className="card__content">

                    <div className="event-meta">

                      <span className="event-date">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M8 2v4m8-4v4" />
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="4"
                              rx="2"
                            />
                            <path d="M3 10h18" />
                          </g>
                        </svg>

                        <span>
                          {formatDate(
                            activeEvent.startDate,
                            activeEvent.endDate
                          )}
                        </span>
                      </span>

                      {activeEvent.location && (
                        <span className="event-location">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                            />
                            <circle
                              cx="12"
                              cy="9"
                              r="2"
                            />
                          </svg>

                          <span>
                            {activeEvent.location}
                          </span>
                        </span>
                      )}

                    </div>

                    <h3
                      id="main-event-title"
                      className="card__title"
                    >
                      {activeEvent.title}
                    </h3>

                    <p
                      id="main-event-description"
                      className="card__description"
                    >
                      {activeEvent.description}
                    </p>

                  </div>
                </article>
              )}

              {/* Next card */}
              {nextEvent && (
                <article
                  className="card card--compact event-card event-card--side"
                  aria-hidden="true"
                >
                  <div className="card__image-compact">
                    <img
                      src={nextEvent.image}
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="card__content-compact">
                    <span className="event-date-sm">
                      {formatDate(
                        nextEvent.startDate,
                        nextEvent.endDate
                      )}
                    </span>

                    <h3 className="card__title-sm">
                      {nextEvent.title}
                    </h3>

                    <p className="card__description-sm">
                      {nextEvent.description}
                    </p>
                  </div>
                </article>
              )}

            </div>

            {/* Next Event */}
            <button
              type="button"
              className="carousel-arrow carousel-arrow--right"
              onClick={goNext}
              aria-label="Next event"
              disabled={upcomingEvents.length <= 1}
            >
              &#10095;
            </button>

            {/* Carousel indicators */}
            {upcomingEvents.length > 1 && (
              <div
                className="events-carousel-dots"
                role="tablist"
                aria-label="Events"
              >
                {upcomingEvents.map((event, index) => (
                  <button
                    key={event.id}
                    type="button"
                    className={`carousel-dot ${
                      index === activeIndex
                        ? 'carousel-dot--active'
                        : ''
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Show ${event.title}`}
                    aria-selected={
                      index === activeIndex
                    }
                    role="tab"
                  />
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default Events;