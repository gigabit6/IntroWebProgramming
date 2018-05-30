var input = document.getElementById("myInput");
console.log(history);
input.addEventListener('input', validate);

function validate(event){
	var currentEl = event.target;

	var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(reg.test(currentEl.value)){
		currentEl.style.backgroundColor = 'lightblue';
	}else{
		currentEl.style.backgroundColor = 'initial';
	}

}