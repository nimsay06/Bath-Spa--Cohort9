//Calculation function

function equalsTo() {
//setting up variables for 2 numbers
  const x = parseInt(document.getElementById("firstNumber").value);
  const y = parseInt(document.getElementById("secondNumber").value);
  //const for whether user uses +-x÷
  const operator = document.getElementById("operator").value;
  var result;
//if else statements to go through different operators
  if (operator === "add") {
    result = x + y;
  } else if (operator === "subtract") {
    result = x - y;
  } else if (operator === "multiply") {
    result = x * y;
  } else if (operator === "divide" && y != 0) {
    result = x / y;
  }
  //displays result of equation to html
  document.getElementById("answer").innerHTML = result;
}
