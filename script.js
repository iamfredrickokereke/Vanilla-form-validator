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

const isEmailValid = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log('submitted');

    if (username.value === '') {
        showError(username, 'username is required!');
    }else{
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'email is required!');
    }else if(!isEmailValid(email.value)){
        showError(email, 'Email is not valid')
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