let number = prompt("Put your number pleas!");
let degree = prompt("Enter degree of the number pleas!");
function result(num, pow = 1) {

 if (num === null || pow === null) {
   return alert("error");
 } else if (num === "" || pow === "") {
   return alert("error 1");
 } else if (isNaN(+num, +pow)) {
   return alert("error 2");
 } else {
   return alert(num**pow);
 }
}
let userResult = result(number,degree);
