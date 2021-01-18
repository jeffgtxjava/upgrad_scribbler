let signUpButtonHolder = document.getElementById("signupButton");
let signInButtonHolder = document.getElementById("signinButton");

let modalSignUpHolder = document.getElementById('modal-signup');
let modalSignInHolder = document.getElementById('modal-signin');

let signUpModalCloseHolder = document.getElementById('signUpModalClose');
let signInModalCloseHolder = document.getElementById('signInModalClose');

let redirectSignUpHolder = document.getElementById('redirectSignUp');

signUpButtonHolder.addEventListener('click',displaySignUpModal);
signInButtonHolder.addEventListener('click',displaySignInModel);

signUpModalCloseHolder.addEventListener('click',closeSignUpModal);
signInModalCloseHolder.addEventListener('click',closeSignInModal);

redirectSignUpHolder.addEventListener('click',toggleToSignUp);

function toggleToSignUp(event){
    closeSignInModal();
    displaySignUpModal();
    event.preventDefault();
}



function closeSignUpModal(){
    modalSignUpHolder.style.display='none';
}

function closeSignInModal(){
    modalSignInHolder.style.display='none';
}


function displaySignUpModal(){
    modalSignUpHolder.style.display='block';
}

function displaySignInModel(){
    modalSignInHolder.style.display='block';
}

