import React, { useEffect, useMemo, useState } from 'react';
import events from '../data/events';
import './Homepage.css';

const Events = () => {
  /*
   * ---------------------------------------------------------
   * Keep ALL events in the carousel.
   *
   * events.js is the only file that needs to be maintained
   * when adding or changing events.
   * ---------------------------------------------------------
   */

  const allEvents = useMemo(() => {
    return [...events].sort(
      (a, b) =>
        new Date(a.startDate) - new Date(b.startDate)
    );
  }, []);

  /*
   * ---------------------------------------------------------
   * Current calendar date
   *
   * This value changes at midnight so the website can
   * automatically recognize a new upcoming event without
   * requiring a page refresh.
   * ---------------------------------------------------------
   */

  const getDateKey = () => {
    const today = new Date();

    return `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, '0')}-${String(
      today.getDate()
    ).padStart(2, '0')}`;
  };

  const [todayKey, setTodayKey] = useState(getDateKey);

  useEffect(() => {
    /*
     * Check periodically whether the calendar date has
     * changed. This is useful if someone leaves the website
     * open overnight.
     */
    const interval = setInterval(() => {
      const newDateKey = getDateKey();

      setTodayKey((currentDateKey) =>
        currentDateKey !== newDateKey
          ? newDateKey
          : currentDateKey
      );
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  /*
   * ---------------------------------------------------------
   * Determine the upcoming/current event
   *
   * An event remains current until its END date has passed.
   *
   * Example:
   * Durga Puja = Oct 10–11
   *
   * It remains the upcoming/current event throughout
   * October 10 and October 11.
   * ---------------------------------------------------------
   */

  const upcomingIndex = useMemo(() => {
    const today = new Date(`${todayKey}T00:00:00`);

    return allEvents.findIndex((event) => {
      const endDate = new Date(
        `${event.endDate}T23:59:59`
      );

      return endDate >= today;
    });
  }, [allEvents, todayKey]);

  /*
   * ---------------------------------------------------------
   * Carousel position
   *
   * Initially show the upcoming event.
   * If every event has already passed, show the last event.
   * ---------------------------------------------------------
   */

  const [currentIndex, setCurrentIndex] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const index = allEvents.findIndex((event) => {
      const endDate = new Date(
        `${event.endDate}T23:59:59`
      );

      return endDate >= today;
    });

    return index >= 0
      ? index
      : Math.max(allEvents.length - 1, 0);
  });

  /*
   * ---------------------------------------------------------
   * When the calendar moves to a new day, automatically
   * move the carousel to the new upcoming event.
   *
   * Example:
   *
   * Aug 26 → Durga Puja centered
   * Oct 12 → next future event centered
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (upcomingIndex >= 0) {
      setCurrentIndex(upcomingIndex);
    }
  }, [upcomingIndex]);

  /*
   * ---------------------------------------------------------
   * Safety check if event data changes.
   * ---------------------------------------------------------
   */

  const activeIndex =
    allEvents.length > 0
      ? Math.min(currentIndex, allEvents.length - 1)
      : 0;

  const activeEvent =
    allEvents.length > 0
      ? allEvents[activeIndex]
      : null;

  /*
   * Is the currently displayed event the dynamically
   * determined upcoming event?
   */

  const isUpcoming =
    upcomingIndex >= 0 &&
    activeIndex === upcomingIndex;

  /*
   * ---------------------------------------------------------
   * Previous / Next indexes
   *
   * Circular navigation means users can browse ALL events.
   * Past events are NOT removed.
   * ---------------------------------------------------------
   */

  const previousIndex =
    allEvents.length > 1
      ? (activeIndex - 1 + allEvents.length) %
        allEvents.length
      : -1;

  const nextIndex =
    allEvents.length > 1
      ? (activeIndex + 1) % allEvents.length
      : -1;

  const previousEvent =
    previousIndex >= 0
      ? allEvents[previousIndex]
      : null;

  const nextEvent =
    nextIndex >= 0
      ? allEvents[nextIndex]
      : null;

  /*
   * ---------------------------------------------------------
   * Navigation
   * ---------------------------------------------------------
   */

  const goPrevious = () => {
    if (allEvents.length <= 1) {
      return;
    }

    setCurrentIndex(previousIndex);
  };

  const goNext = () => {
    if (allEvents.length <= 1) {
      return;
    }

    setCurrentIndex(nextIndex);
  };

  /*
   * ---------------------------------------------------------
   * Format dates automatically
   *
   * Single day:
   * Sunday, Aug 9, 2026
   *
   * Multiple days:
   * Oct 10–11, 2026
   * ---------------------------------------------------------
   */

  const formatDate = (startDate, endDate) => {
    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);

    if (startDate === endDate) {
      return start.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    }

    const startMonth = start.toLocaleDateString(
      'en-US',
      {
        month: 'short',
      }
    );

    const endMonth = end.toLocaleDateString(
      'en-US',
      {
        month: 'short',
      }
    );

    const startDay = start.getDate();
    const endDay = end.getDate();

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();

    /*
     * Same month and same year
     */
    if (
      startMonth === endMonth &&
      startYear === endYear
    ) {
      return `${startMonth} ${startDay}–${endDay}, ${startYear}`;
    }

    /*
     * Different months, same year
     */
    if (startYear === endYear) {
      return `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${startYear}`;
    }

    /*
     * Different years
     */
    return `${startMonth} ${startDay}, ${startYear} – ${endMonth} ${endDay}, ${endYear}`;
  };

  /*
   * ---------------------------------------------------------
   * No events configured
   * ---------------------------------------------------------
   */

  if (allEvents.length === 0) {
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

          <div className="events-empty">
            <h3>No events available</h3>

            <p>
              Please check back soon for upcoming
              DURBA festivals and events.
            </p>
          </div>

        </div>
      </section>
    );
  }

  /*
   * ---------------------------------------------------------
   * Main carousel
   * ---------------------------------------------------------
   */

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

        <div className="events-carousel">

          {/* Previous arrow */}

          <button
            type="button"
            className="carousel-arrow carousel-arrow--left"
            onClick={goPrevious}
            disabled={allEvents.length <= 1}
            aria-label="Previous event"
          >
            &#10094;
          </button>

          <div className="events-carousel-track">

            {/* =================================================
                PREVIOUS EVENT
                ================================================= */}

            {previousEvent && (
              <article
                key={`previous-${previousEvent.id}`}
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

            {/* =================================================
                CENTER / FEATURED EVENT
                ================================================= */}

            {activeEvent && (
              <article
                key={`active-${activeEvent.id}`}
                aria-labelledby="main-event-title"
                aria-describedby="main-event-description"
                className={`card card--featured event-card event-card--active ${
                  isUpcoming
                    ? 'event-card--upcoming'
                    : ''
                }`}
              >

                <div className="card__image">

                  <img
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    loading="eager"
                  />

                  <div className="card__overlay"></div>

                  {isUpcoming && (
                    <span className="event-upcoming-badge">
                      UPCOMING
                    </span>
                  )}

                </div>

                <div className="card__content">

                  <div className="event-meta">

                    {/* Date */}

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

                    {/* Location */}

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

            {/* =================================================
                NEXT EVENT
                ================================================= */}

            {nextEvent && (
              <article
                key={`next-${nextEvent.id}`}
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

          {/* Next arrow */}

          <button
            type="button"
            className="carousel-arrow carousel-arrow--right"
            onClick={goNext}
            disabled={allEvents.length <= 1}
            aria-label="Next event"
          >
            &#10095;
          </button>

          {/* =================================================
              CAROUSEL DOTS
              ================================================= */}

          {allEvents.length > 1 && (
            <div
              className="events-carousel-dots"
              role="tablist"
              aria-label="DURBA events"
            >

              {allEvents.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  className={`carousel-dot ${
                    index === activeIndex
                      ? 'carousel-dot--active'
                      : ''
                  }`}
                  onClick={() =>
                    setCurrentIndex(index)
                  }
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

      </div>
    </section>
  );
};

export default Events;