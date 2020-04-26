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
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log('submitted');

    if (username.value === '') {
        showError(username, 'username is required!')
    } else{
        showSuccess(username)
    }
    
})