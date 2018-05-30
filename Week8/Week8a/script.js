var myInput = document.getElementById('myInput');

console.log(history);

myInput.addEventListener('input', validate);

function validate(event){
	var currentInput = event.target;
	// var reg = /^\d+$/; // -> numbers only
	var reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

	if(reg.test(currentInput.value)){
		currentInput.style.border = '3px solid pink';
	} else{
		currentInput.style.border ='initial';
	}
}