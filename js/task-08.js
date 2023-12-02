const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const { elements } = event.currentTarget;
    if (!elements.email.value || !elements.password.value) {
        alert("Всі поля мають бути заповнені");
        return;
    };

    const email = elements.email.value;
    const password = elements.password.value;

    const formData = {
        email,
        password,
    };
    console.log(formData);
    form.reset();
});