const input = document.querySelector('#validation-input');
const validLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', () => {
    if (input.value.length === validLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    }
    input.classList.add('invalid');
    input.classList.remove('valid');
});

