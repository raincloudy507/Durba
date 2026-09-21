# Durba Patrika Magazine

The Durba Patrika source content supplied on 21 Sep 2026 contains a mixture of JPG/PNG images, PDF documents and DOCX documents. Browsers cannot render all of these formats consistently as pages of a flipbook, so the website uses a normalized page layer.

## Web format

`public/magazine/pages/page-001.webp` through `page-041.webp` are the normalized magazine pages used by the React reader.

`public/magazine/Durba_Patrika_2026.pdf` is the combined PDF download.

## Source order

The page sequence was assembled from the supplied proof-reading distribution and the `Durba Patrika_latest` folder. Edited/grammar-corrected versions were used where they were supplied alongside earlier versions.

## Rebuilding when content changes

When new JPG/PDF/DOCX content is supplied, convert each source item to a page image (WebP/JPG) and place the normalized pages in `public/magazine/pages`. Update `TOTAL_PAGES` in `src/components/Magazine.js` and replace the combined PDF if the edition changes.
