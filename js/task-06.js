const dataInput = document.querySelector('#validation-input');

const validLen = Number(dataInput.dataset.length);

dataInput.addEventListener('blur', () => {
    if (validLen <= dataInput.value.length) {
        dataInput.classList.remove('invalid')
        dataInput.classList.add('valid');
    } else {
        dataInput.classList.remove('valid')
        dataInput.classList.add('invalid');
    };

});
