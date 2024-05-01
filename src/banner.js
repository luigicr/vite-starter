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
  document.querySelector('#content').textContent = text;
};
