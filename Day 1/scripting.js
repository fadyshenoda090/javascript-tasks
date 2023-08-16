// alert("welcom tom my first site")
// var cash=prompt("enter your cash in L.E")
// function calcCurruncy(mount){
//     return mount/30
// }
// console.log(calcCurruncy(cash))
function displaynimbers() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log("i'm even");
    } else {
      console.log(i);
    }
  }
}

var firstName = prompt("enter your first name");
while (isFinite(firstName) == true) {
  firstName = prompt("enter a valid name");
}
var mobileNumber = prompt("enter your number");
let length = mobileNumber.length;
while (isFinite(mobileNumber) == false || mobileNumber.length != 11) {
  mobileNumber = prompt("enter a valid number");
}
var birthDay = prompt("enter your birth year");
var currentYear = new Date().getFullYear();
function calcage(birthDay) {
  return currentYear - birthDay;
}
var color = prompt("Choose a color from green, red, or darkviolet");
if (color == "red" || color == "green" || color == "darkviolet") {
  document.write("<h2 style='color: " + color + "'>Enter some info about you</h2><br>");
  document.write("<span style='color: " + color + "'>Welcome dear</span>" + " : <span style='color: " + color + "'>" + firstName + "</span>");
  document.write("<br>");
  document.write("<span style='color: " + color + "'>Your mobile number is</span>" + " : <span style='color: " + color + "'>" + mobileNumber + "</span>");
  document.write("<br>");
  document.write("<span style='color: " + color + "'>Your birth year is</span>" + " : <span style='color: " + color + "'>" + birthDay + "</span>");
  document.write("<br>");
  document.write("<span style='color: " + color + "'>Your age is</span>" + " : <span style='color: " + color + "'>" + calcage(birthDay) + "</span>");
}

