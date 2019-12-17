/**
 * Permit to create an input number element as PrestaShop wants it
 *
 * @param {DOM Element Object} element
 * @method validate
 * @method updateValue
 * @returns {Object}
 */
const PSNumberInput = function(element) {
    this.min = Number(element.dataset.min);
    this.max = Number(element.dataset.max);
    this.labelMin = element.dataset.labelMin;
    this.labelMax = element.dataset.labelMax;
    this.labelNan = element.dataset.labelNan;
    this.incrementButton = element.querySelector('.ps-number-increment');
    this.decrementButton = element.querySelector('.ps-number-decrement');
    this.input = element.querySelector('input');
    this.value = Number(this.input.value);
    this.invalidElement = element.querySelector('.invalid-feedback');

    this.validate = () => {
        const maxCond = this.value > this.max;
        const minCond = this.value < this.min;
        const checkNumber = isNaN(this.value);

        if(maxCond || minCond || checkNumber) {
            if(!this.invalidElement.classList.contains('show') && !this.input.classList.contains('is-invalid')) {
                this.invalidElement.classList.add('show');
                this.input.classList.add('is-invalid');
            }

            if(checkNumber) {
                this.invalidElement.innerHTML = this.labelNan;

                return false;
            }

            this.invalidElement.innerHTML = `${maxCond ? this.labelMax : this.labelMin} ${maxCond ? this.max : this.min}.`;

            return false;
        }

        this.invalidElement.classList.remove('show');
        this.input.classList.remove('is-invalid');

        return true;
    }

    this.updateValue = (increment) => {
        if(increment) {
            this.value = this.value + 1;
        }else {
            this.value = this.value - 1;
        }

        this.input.value = this.value;
        this.validate();
    }

    this.incrementButton.addEventListener('click', () => {
        this.updateValue(true);
    });

    this.decrementButton.addEventListener('click', () => {
        this.updateValue(false);
    });

    this.input.addEventListener('keyup', () => {
        this.value = Number(this.input.value);
        this.validate();
    })

    this.input.addEventListener('cut', () => {
        this.value = Number(this.input.value);
        this.validate();
    })

    this.input.addEventListener('paste', () => {
        this.value = Number(this.input.value);
        this.validate();
    })
};

export default PSNumberInput;
