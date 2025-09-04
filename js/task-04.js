let counterValue = 0;
const value = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const handlerBtn = (event) => {
    if (event.target === decrementBtn) {
        counterValue -= 1;
    } else if (event.target === incrementBtn) {
        counterValue += 1;
    };
    value.textContent = counterValue;
};

decrementBtn.addEventListener('click', handlerBtn);
incrementBtn.addEventListener('click', handlerBtn);
