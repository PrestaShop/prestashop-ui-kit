/**
 * Permit to create an input number element as PrestaShop wants it
 *
 * @param {DOM Element Object} element
 * @method validate
 * @method updateValue
 * @returns {Object}
 */
const PSNumberInput = function PSNumberInput(element) {
  const min = Number(element.dataset.min);
  const max = Number(element.dataset.max);
  const labelMin = element.dataset.labelMin;
  const labelMax = element.dataset.labelMax;
  const labelNan = element.dataset.labelNan;
  let incrementButton = element.querySelector('.ps-number-increment');
  let decrementButton = element.querySelector('.ps-number-decrement');
  let input = element.querySelector('input');
  let invalidElement = element.querySelector('.invalid-feedback');
  let value = input.value;

  let initValue = () => {
    if (input.value.replace('.', '') !== input.value || input.value.replace(',', '') !== input.value) {
      value = parseInt(input.value.replace(',', '') !== input.value ? input.value.replace(',', '.') : input.value);
    } else {
      value = Number(input.value);
    }
  };

  initValue();

  let validate = () => {
    const maxCond = value > max;
    const minCond = value < min;
    let checkNumber;

    checkNumber = Number.isNaN(value);

    if (!maxCond && !minCond && !checkNumber) {
      invalidElement.classList.remove('show');
      input.classList.remove('is-invalid');
      element.classList.remove('has-danger');

      return true;
    }

    if (!invalidElement.classList.contains('show') && !input.classList.contains('is-invalid')) {
      invalidElement.classList.add('show');
      element.classList.add('has-danger');
      input.classList.add('is-invalid');
    }

    if (checkNumber) {
      invalidElement.innerHTML = labelNan;

      return false;
    }

    invalidElement.innerHTML = `${maxCond ? labelMax : labelMin} ${maxCond ? max : min}.`;

    return false;
  };

  let updateValue = increment => {
    const checkNumber = Number.isNaN(value);

    if (checkNumber) {
      value = 0;
    } else {
      if (increment) {
        value += 1;
      } else {
        value -= 1;
      }
    }

    input.value = value;
    validate();
  };

  if (incrementButton && decrementButton) {
    incrementButton.addEventListener('click', () => {
      updateValue(true);
    });

    decrementButton.addEventListener('click', () => {
      updateValue(false);
    });
  }

  input.addEventListener('keyup', () => {
    initValue();
    validate();
  });

  input.addEventListener('cut', () => {
    initValue();
    validate();
  });

  input.addEventListener('paste', () => {
    initValue();
    validate();
  });
};

export default PSNumberInput;
