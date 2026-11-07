/** Turn an explicit list of local images into gallery entries. Keep paths here
 * in the project content files so the release check can verify every asset. */
export default function createGallery(title, paths) {
  return paths.map((src, index) => ({ src, alt: `${title}, project view ${index + 1}` }));
}
