const form = document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const showError = (input, message) => {
    const formControl = input.parentElement;

    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');

    small.innerText = message;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';    
}

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log('submitted');

    if (username.value === '') {
        showError(username, 'username is required!');
    } else{
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'email is required!');
    } else{
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'password is required!');
    } else{
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'confirm the second password!');
    } else{
        showSuccess(password2);
    }
    
})