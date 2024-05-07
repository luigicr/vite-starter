//import { initializeCounter } from "./counter";

console.log('hello from index.js');

/**
 * This function is a callback function that initializes the counter.
 * It is expected to be called after the 'counter.js' module is imported asynchronously.
 *
 * @param {Function} initializeCounter - The function from the 'counter.js' module that initializes the counter.
 * @returns {void}
 */

// import('./counter').then(({ initializeCounter }) => {
//   initializeCounter();
// });

//console.log(import.meta.glob('./logos/**/*.svg', {eager: true}));

const content = document.querySelector('#content');
// for (const [path, module] of Object.entries(import.meta.glob('./logos/**/*.svg'), )) {
//   module().then((url) => {
//     const img = document.createElement('img');
//     img.src = url.default;
//     img.height = 200;
//     content.appendChild(img);
//     console.log(url.default)
//   });

// };
// const chars = import.meta.glob('./characters/**/*.json', {eager : true}) ;

// for (const character in chars) {
//   console.log(chars[character].default);
// }

import { TestCharacter } from './characters/chars.js';

TestCharacter();

//.then((character) => { console.log(character)});
