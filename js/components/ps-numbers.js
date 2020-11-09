import PSNumberInput from "./ps-number-input.js";

/**
 * Permit to init every PSInputNumber object on the page
 *
 * @param {string} selector
 * @method init
 * @returns {Object}
 */
const PSNumbers = function PSNumbers(selector) {
  let arrayInputs = [];

  const init = () => {
    arrayInputs = [...document.querySelectorAll(selector)].map(e => {
      return PSNumberInput(e);
    });
  };

  init();

  return arrayInputs;
};

export default PSNumbers;
