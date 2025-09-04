const regForm = document.querySelector('.login-form');

const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { elements: { email, password } } = form;

    if (!email.value || !password.value) {
        alert('Всі поля мають бути заповнені');
        return;
    }
    console.log({ email: email.value, password: password.value });
    regForm.reset();
};

regForm.addEventListener('submit', handlerSubmit);

