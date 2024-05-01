//import { initializeCounter } from "./counter";

console.log('hello from index.js');

/**
 * This function is a callback function that initializes the counter.
 * It is expected to be called after the 'counter.js' module is imported asynchronously.
 *
 * @param {Function} initializeCounter - The function from the 'counter.js' module that initializes the counter.
 * @returns {void}
 */
import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
