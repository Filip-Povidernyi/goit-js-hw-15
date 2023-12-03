const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
    const value = input.value;
    if (value) {
        output.textContent = value;
    } else {
        output.textContent = 'Anonymous';
    };
});
