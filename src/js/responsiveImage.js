import variants from "./imageVariants";

/** Keep editorial paths stable while serving smaller, generated web images. */
export function responsiveImage(image) {
  return { ...image, ...variants[image.src] };
}
