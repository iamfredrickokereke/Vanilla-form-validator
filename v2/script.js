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


const checkRequiredInput = (inputArray) =>{

    inputArray.forEach(input => {
        // console.log(inputArray);

        if (input.value.trim() === '') {
            // showError(input, `${input.id} is required`)
            showError(input, `${getFieldName(input)} is required`)
        } else{
            showSuccess(input)
        }

    });
    
}

// check required fields for the inputs
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log('submitted');

    checkRequiredInput([username, password, email, password2])
    
})


const getFieldName = input => {
    return input.id.charAt(0).toUpperCase;
}