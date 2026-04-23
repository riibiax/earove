# Image Optimization Audit

This folder contains a full first-pass audit of all website images.

Files:

- `image-optimization-audit.csv`: one row per image with size, dimensions, pixel format, and a recommended action.
- `image-optimization-folder-summary.csv`: folder-level totals to show where the biggest weight is concentrated.

Recommendation meanings:

- `Resize to web max (about 2400px) and visually-lossless recompress; consider WebP/AVIF derivative`
  Use for very large photos that are far bigger than the site needs.
- `Visually-lossless JPEG recompress; optionally resize if displayed smaller`
  Use for medium-to-large JPEGs that likely do not need their current quality setting.
- `Strong candidate for JPEG/WebP conversion; resize and optimize`
  Use for large PNGs that do not appear to require transparency.
- `Lossless PNG optimize; if transparency is not actually needed, convert to JPEG/WebP`
  Use for PNGs where transparency may exist, but file size is still high enough to review.
- `Lossless PNG optimize only`
  Use for smaller PNG assets that should stay PNG.
- `Light JPEG recompress only; keep if already appropriate for display size`
  Use for smaller JPEGs that are probably acceptable already.

Highest-impact folders from the current audit:

- `img/doka`
- `img/mons`
- `img/lightscape`
- `img/tabakfabrik`
- `img/kf`

The best next step is to optimize by folder, starting with the folders above.
