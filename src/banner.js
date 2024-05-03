import { banner } from './banner.module.css';
import favicon from './favicon-16x16.png';

console.log(favicon);

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
  const content = document.querySelector('#content');
  content.classList.add(banner);
  content.textContent = text;

  // import('./banner.module.css').then(({ banner }) => {
  //     container.classList.add(banner);
  // });
};

import image from './steve-after-a-workshop.jpg?h=350';

export const loadImage = () => {
  const content = document.querySelector('#content');
  const imageElement = document.createElement('img');
  imageElement.src = image;
  content.appendChild(imageElement);
};
