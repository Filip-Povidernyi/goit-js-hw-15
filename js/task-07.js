const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.value = input.min;

input.addEventListener('input', (event) => {
    text.style.fontSize = event.currentTarget.value + 'px';
});
