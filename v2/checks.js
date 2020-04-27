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
        showError(password2, 'password 2 is required!');
    } else{
        showSuccess(password2);
    }