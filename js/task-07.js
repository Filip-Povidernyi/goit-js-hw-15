const fontSizeCtrl = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');
fontSizeCtrl.addEventListener('change', () => {
    textElem.style.fontSize = String(fontSizeCtrl.value) + 'px';
});