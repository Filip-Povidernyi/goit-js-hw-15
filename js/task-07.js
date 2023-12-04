const fontSizeCtrl = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');
fontSizeCtrl.value = fontSizeCtrl.min;

fontSizeCtrl.addEventListener('input', () => {
    textElem.style.fontSize = String(fontSizeCtrl.value) + 'px';
});

