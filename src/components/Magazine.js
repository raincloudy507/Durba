import React, { useEffect, useMemo, useState } from 'react';
import './Magazine.css';

const TOTAL_PAGES = 63;
const PAGE_PATH = (page) =>
  `/magazine/pages/page-${String(page).padStart(3, '0')}.webp`;

const Magazine = () => {
  const [readerOpen, setReaderOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 800px)').matches
  );

  const canPrevious = page > 1;
  const canNext = page < TOTAL_PAGES;

  const openReader = () => {
    setPage(1);
    setReaderOpen(true);
  };

  const closeReader = () => setReaderOpen(false);

  const pageStep = isMobile ? 1 : 2;

  const goPrevious = () => {
    if (canPrevious) setPage((current) => Math.max(1, current - pageStep));
  };

  const goNext = () => {
    if (canNext) setPage((current) => Math.min(TOTAL_PAGES, current + pageStep));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    const handleMediaChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener?.('change', handleMediaChange);
    return () => mediaQuery.removeEventListener?.('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!readerOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeReader();
      if (event.key === 'ArrowLeft') goPrevious();
      if (event.key === 'ArrowRight') goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [readerOpen, page]);

  const pages = useMemo(() => {
    const secondPage = page + 1 <= TOTAL_PAGES ? page + 1 : null;
    return { first: page, second: secondPage };
  }, [page]);

  return (
    <>
      <section id="Magazine" className="magazine-section">
        <div className="magazine-shell">
          <div className="magazine-copy">
            <span className="magazine-eyebrow">DURBA FOUNDATION • DIGITAL MAGAZINE</span>
            <h2 className="magazine-title">দুর্বার দর্পন</h2>
            <p className="magazine-lead">
              Step inside the Durba Foundation magazine and explore the stories,
              people, celebrations and community moments that bring our
              foundation to life.
            </p>

            <div className="magazine-meta">
              <span>Sample edition</span>
              <span>63 pages</span>
              <span>Digital reader</span>
            </div>

            <button type="button" className="magazine-primary" onClick={openReader}>
              <span>Read Magazine</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <button
            type="button"
            className="magazine-cover-card"
            onClick={openReader}
            aria-label="Open Durba Foundation digital magazine"
          >
            <div className="magazine-cover-glow" />
            <img
              src={PAGE_PATH(1)}
              alt="Magazine cover"
              className="magazine-cover-image"
            />
            <div className="magazine-cover-overlay">
              <span>OPEN READER</span>
            </div>
          </button>
        </div>
      </section>

      {readerOpen && (
        <div className="magazine-reader" role="dialog" aria-modal="true" aria-label="Digital magazine reader">
          <header className="magazine-reader-header">
            <div className="magazine-reader-brand">
              <span className="magazine-reader-mark">D</span>
              <div>
                <strong>দুর্বার দর্পন</strong>
                <small>Durba Foundation Digital Magazine</small>
              </div>
            </div>

            <div className="magazine-reader-actions">
              <a
                className="magazine-reader-download"
                href="/magazine/Sample_Mag.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download PDF
              </a>
              <button type="button" onClick={closeReader} aria-label="Close magazine reader">
                ✕
              </button>
            </div>
          </header>

          <main className="magazine-reader-body">
            <button
              type="button"
              className="magazine-arrow magazine-arrow-left"
              onClick={goPrevious}
              disabled={!canPrevious}
              aria-label="Previous pages"
            >
              ‹
            </button>

            <div className="magazine-book">
              <div className={`magazine-page magazine-page-left ${page > 1 ? 'is-open' : ''}`}>
                <img src={PAGE_PATH(pages.first)} alt={`Magazine page ${pages.first}`} />
              </div>

              {pages.second && (
                <div className="magazine-page magazine-page-right">
                  <img src={PAGE_PATH(pages.second)} alt={`Magazine page ${pages.second}`} />
                </div>
              )}
            </div>

            <button
              type="button"
              className="magazine-arrow magazine-arrow-right"
              onClick={goNext}
              disabled={!canNext}
              aria-label="Next pages"
            >
              ›
            </button>
          </main>

          <footer className="magazine-reader-footer">
            <div className="magazine-page-status">
              Pages {pages.first}{pages.second ? `–${pages.second}` : ''} of {TOTAL_PAGES}
            </div>

            <input
              className="magazine-page-slider"
              type="range"
              min="1"
              max={TOTAL_PAGES}
              step={pageStep}
              value={page}
              onChange={(event) => setPage(Number(event.target.value))}
              aria-label="Jump to page"
            />

            <div className="magazine-keyboard-hint">
              ← → to turn pages&nbsp; • &nbsp;Esc to close
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Magazine;
