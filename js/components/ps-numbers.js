import PSNumberInput from './ps-number-input.js';

/**
 * Permit to init every PSInputNumber object on the page
 *
 * @param {string} selector
 * @method init
 * @returns {Object}
 */
const PSNumbers = function PSNumbers(selector) {
    this.selector = selector;
    this.arrayInputs = [];
  ​
    this.init = () => {
      document.querySelectorAll(selector).forEach((e) => {
        this.arrayInputs.push(new PSNumberInput(e));
      });
    };
  ​
    this.init();
  ​
    return this.arrayInputs;
};

export default PSNumbers;
