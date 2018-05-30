var form = document.getElementById('myForm');
var firstNameInput = document.getElementById('firstName');
var checkImg = document.getElementById('checkImg');
var telInput = document.getElementById('tel');
var emailInput = document.getElementById('email');


form.addEventListener('submit', validate);
emailInput.addEventListener('change', validateEmail);

function validate(event){
	event.preventDefault();

	if(validateName() && validateTel() && validateEmail()){
		checkImg.style.visibility = 'visible';
	} else{
		checkImg.style.visibility  = 'hidden'	
	}

}

function validateName(){
	var text = firstNameInput.value;

	if(text.length < 2){
		return false;
	}

	return true;
}


function validateTel(){
	var text = telInput.value;

	var regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

	if(regex.test(text)){
		return true;
	}

	return false;
}

function validateEmail(){
	var text = emailInput.value;

	if(text.indexOf("@") != -1){
		emailInput.style.border = '2px solid blue';
		return true;
	}


	emailInput.style.border = '2px solid red';
	return false;

}