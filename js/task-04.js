let counterValue = 0;
const value = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {

    counterValue -= 1;
    // Щоб значення не було менше 0 додаємо перевірку
    // if (counterValue < 0) {
    //     counterValue = 0;
    // };

    value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {

    counterValue += 1;
    value.textContent = counterValue;
});