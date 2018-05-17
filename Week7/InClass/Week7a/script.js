
var title = document.getElementById('myTitle');
// console.log(title);
title.style.color = 'blue';
// console.log(title.style.color);

// var text = title.innerHTML;
title.innerHTML = 'Hello!! I love JS';
// console.log(text);

var link = document.getElementById('myLink');
// link.href = 'http://www.fmi-plovdiv.org/';
link.setAttribute('href','http://www.fmi-plovdiv.org/');

// console.log(link.href);
// var divs = document.getElementsByTagName('div');
// console.log(divs);

// var myElem = document.getElementsByClassName('myDivs');
// console.log(myElem);

var newElent = document.createElement('h4');
newElent.innerHTML = 'I am new Element';

var body = document.getElementsByTagName('body')[0];
body.appendChild(newElent);

// body.removeChild(title);
var myInput = document.getElementById('myInput');

function validateName(){
	var inputValue = myInput.value;
	if(inputValue.indexOf("js") !== -1){
		myInput.style.border = '1px solid red';
	} else {
		myInput.style.border = '1px solid blue';
	}

	// var date = new Date().getFullYear();
	// var sqrt = Math.sqrt(81);
	// alert(sqrt);
}

myInput.addEventListener('input', validateName);

var myBtn = document.getElementById("myButon");
myBtn.addEventListener("click", validateName);

var array = [1,2,3,4];
array.push("Hello");


for(var i = 0; i< array.length; i++){
	console.log(array[i]);
}