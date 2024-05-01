import { banner } from './banner.module.css';

/**
 * Adds a banner text to the element with id 'content'.
 *
 * @param {string} text - The text to be displayed in the banner.
 * @returns {void}
 *
 * @example
 * addBanner('Welcome to our website!');
 */
export const addBanner = (text) => {
  const container = document.querySelector('#content');
  container.classList.add(banner);
  container.textContent = text;
  
  // import('./banner.module.css').then(({ banner }) => {
  //     container.classList.add(banner);
  // });
};
