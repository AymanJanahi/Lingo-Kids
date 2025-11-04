// Contains shared utilities for the data files to keep them DRY.

// Base64 encoded SVGs for simple, fast-loading, offline images.
export const SVG_TEMPLATES = {
  text: (content: string, color: string = 'black') => {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="55%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${color}">${content}</text></svg>`;
    // The string must be URI encoded to handle unicode characters correctly for btoa.
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
  },
  emoji: (emoji: string) => {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="55%" font-size="80" dominant-baseline="middle" text-anchor="middle">${emoji}</text></svg>`;
    // The string must be URI encoded to handle unicode characters correctly for btoa.
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
  },
  color: (fillColor: string) => `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${fillColor}" /></svg>`)}`,
};

// A valid, silent WAV file placeholder to prevent audio decoding errors.
export const DUMMY_AUDIO = 'UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABgAAABkYXRhAwAAAA==';
