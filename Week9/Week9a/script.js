var form = document.getElementById('mainForm');
var validateMsg = document.getElementById('validateMsg');
var passwordInput = document.getElementById('password');
var passwordRepeatInput = document.getElementById('passwordRepeat');
var emailInput = document.getElementById('email');
var firstNameInput = document.getElementById('firstName');

form.addEventListener('submit',validate);
emailInput.addEventListener('input', validateEmail);

function validate(event){
	event.preventDefault();

	if(validateFirstName() && checkSamePassword()){
		validateMsg.innerHTML = 'Success';
	}else{
		validateMsg.innerHTML = 'Wrong Input!';
	}
}

function validateFirstName(){

	var inputText = firstNameInput.value;
	var reg = /^[a-zA-Z ]+$/;

	if(inputText === ""){
		return false;
	}

	if(!reg.test(inputText)){
		return false;
	}

	return true;
}

function checkSamePassword(){
	var passwordInputText = passwordInput.value;
	var passwordRepeatInputText = passwordRepeatInput.value;

	if(passwordInputText === passwordRepeatInputText){
		return true;
	}	

	return false;
}

function validateEmail(){
	var emailText = emailInput.value;
	var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(regEx.test(emailText)){
		emailInput.style.backgroundColor = 'lightblue';
	} else {
		emailInput.style.backgroundColor = 'red';	
	}

}
