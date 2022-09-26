//variable for background when changed in function


var background = document.getElementById("bulbChange");
///function when on button is pressed
function turnOn() {
  background.style.background = "white";
  background.style.color = "black";
  document.getElementById("lightbulb").src = "pic_bulbon.gif";
}
//function when off button is pressed
function turnOff() {
  background.style.background = "black";
  background.style.color = "white";
  document.getElementById("lightbulb").src = "pic_bulboff.gif";
}
//variables for bmi calculation
var heightInput = document.getElementById("height");
var weightInput = document.getElementById("weight");
var result = document.getElementById("result");
//function to calculate bmi to 1 decimal point
function calculateBMI() {
  height = heightInput.value;
  weight = weightInput.value;
  BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.innerText = `Your BMI is ${BMI}`;
}
//function for final image change - moon and su
function dayTime() {
  document.getElementById("skyImage").src = "sun.jpg";
}
function nightTime() {
  document.getElementById("skyImage").src = "moon.jpg";
}
