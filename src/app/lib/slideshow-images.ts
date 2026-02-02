/**
 * Dynamically loads all images from src/app/assets/slideshow.
 * Add or remove images in that folder and rebuild — no code changes needed.
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const context = require.context('../assets/slideshow', false, /\.(jpeg|jpg|png|gif|webp)$/i)
const keys = context.keys().sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

export const slideshowImages: { src: string; height: number; width: number }[] = keys.map(
  (key) => context(key).default
)
