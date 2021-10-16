let number = prompt("Put your number pleas!");
let degree = prompt("Enter degree of the number pleas!");
function result(num, pow = 1) {

 if (num === null || pow === null) {
   return alert("arg is invalid");
 } else if (num === "" || pow === "") {
   return alert("arg is invalid");
 } else if (isNaN(+num, +pow)) {
   return alert("arg is invalid");
 } else {
   return alert(num**pow);
 }
}
let userResult = result(number,degree);
