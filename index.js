const form = document.getElementById('form');
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const name = document.getElementById('form-input_name');
    const email = document.getElementById('form-input_email');
    const password = document.getElementById('form-input_password');
    const errorMassage = document.getElementById('errors');

    let mistakesFlag = false;

    errorMassage.innerHTML = '';
    name.classList.remove("error");
    email.classList.remove("error");
    password.classList.remove("error");

    if (!name.value) {
        mistakesFlag = true;
        errorMassage.innerHTML += '<p>Поле имени не может быть пустым</p>';
        name.classList.add("error");
    }

    const emailMustHave = /@.*\./;
    if (!email.value.match(emailMustHave)) {
        mistakesFlag = true;
        errorMassage.innerHTML += '<p>Почта должна содержать "@" и "."</p>'; 
        email.classList.add("error");
    }

    if (password.value.length < 8) {
        mistakesFlag = true;
        errorMassage.innerHTML += '<p>Пароль должен иметь больше 8 символов</p>';
        password.classList.add("error");
    }

    if (mistakesFlag) {
        return;
    }

    console.log('Форма отправлена успешно');
    return false;
});
