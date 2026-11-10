export const basePath = process.env.PORTFOLIO_BASE_PATH || "/";

export function projectPath(path) {
  return `${path.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}/`;
}

export function assetUrl(path) {
  return path && `${basePath}${path}`;
}
