const loginForm = document.getElementById('login-form');

// loginForm.email.addEventListener('focus', () => {
//     console.log('Foco en email');
// });

// loginForm.password.addEventListener('focus', () => {
//     console.log('Foco en password');
// });

// loginForm.email.addEventListener('blur', () => {
//     console.log('Blur en email');
// });

loginForm.email.focus();

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValidations = [
        {
            name: 'email',
            required: true
        },
        {
            name: 'password',
            required: true
        }
    ];
    let formIsValid = true;
    inputValidations.forEach((validation) => {
        const errorP = document.getElementById(`${validation.name}Error`);
        errorP.innerText = ''
        if (validation.required && !loginForm[validation.name].value) {
            errorP.innerText = 'Campo requerido!';
            formIsValid = false;
        }
    });
    if (formIsValid) {
        loginForm.submit();
    }
});

function isValidEmail(email = '') {
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regex.test(email.toLowerCase());
}

loginForm.email.addEventListener('blur', (event) => {
    const errorP = document.getElementById('emailError');
    errorP.innerText = '';
    if (!isValidEmail(event.target.value)) {
        errorP.innerText = 'E-mail invalido!';
    }
});