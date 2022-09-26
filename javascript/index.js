function turnOn() {
  document.getElementById("lightbulb").src = "pic_bulbon.gif";
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

function turnOff() {
  document.getElementById("lightbulb").src = "pic_bulboff.gif";
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
