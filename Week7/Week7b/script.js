var title = document.getElementById('myTitle');
console.log(title);

var divs = document.getElementsByTagName('div');
console.log(divs[0]);

var myElements = document.getElementsByClassName('myClass');
console.log(myElements);

console.log(title.innerHTML);
title.innerHTML = "Another Text";

var myLinkEl = document.getElementById('myLink');
console.log(myLinkEl.href);
myLinkEl.href = 'http://www.fmi-plovdiv.org/';
myLinkEl.setAttribute('href','http://www.fmi-plovdiv.org/');

title.style.color = '#ff26ab';
console.log(title.style.color);

var newElement = document.createElement('h5');
newElement.innerHTML = 'I am a new title';

divs[0].appendChild(newElement);
divs[0].removeChild(newElement);

var myInput = document.getElementById('myInput');

function validateInput() {
	var inputValue = myInput.value;

	if(inputValue.indexOf('js') === -1){
		myInput.style.backgroundColor = 'red';
	} else{
		myInput.style.backgroundColor = 'blue';
	}
}

var myBtn = document.getElementById('myButton');
myBtn.addEventListener('click', validateInput);

var string = "Hello, my name is Gery";
console.log(string.substr(10,4));
console.log(string.replace("Gery", "Mery"));

var arr = [1,2,3,4,5];
arr.push("Hello");
arr.splice(2,1)
arr.concat([6,7,8])
console.log(arr.concat([6,7,8]));

console.log(new Date().getFullYear());

function randNumber(){
	return Math.floor(Math.random() * 100);
}

randNumber();

for(var i = 0; i< arr.length; i++){
	console.log(arr[i]);
}

var string = '56.323';
var number = 43;
console.log(parseFloat(string));
console.log(number.toString());