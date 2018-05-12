//window.alert('I am an alert box');
//console.log("I am in the console");

var array = [1,2,3,"One", "Two"];

var obj = {
  key : 'value',
  name : 'Gery',
  age : 21,
  myFunc : function(x, y){
     return x / y;
  }
};

//function expressiohn = variable + anonymous function
var myFunc = function (x, y){
  return x * y;
};


//var result = myFunc(10,15);
var result2 = obj.myFunc(10, 2);

console.log(result2);
console.log(obj.age);

console.log(obj["name"])