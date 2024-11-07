const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstNumber = parseFloat(document.getElementById('input-first').value);
    const action = document.getElementById('form-select').value;
    const secondNumber = parseFloat(document.getElementById('input-second').value);
    const errors = document.getElementById('errors');
    const answer = document.getElementById('answer');
    
    errors.innerHTML = '';
    answer.innerHTML = '<h4>Ответ:</h4>';

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        errors.innerHTML = '<p>Введите оба числа</p>';
        return;
    }

    let result;

    switch (action) {
        case 'plus':
            result = firstNumber + secondNumber;
            break;
        case 'minus':
            result = firstNumber - secondNumber;
            break;
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'delimeter':
            if (secondNumber === 0) {
                errors.innerHTML = '<p>На 0 делить нельзя!</p>';
                return;
            }
            result = firstNumber / secondNumber;
            break;
    }

    answer.innerHTML += `<p>${result}</p>`;
});
