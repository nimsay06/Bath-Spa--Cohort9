const number1 = document.getElementById("firstNumber").value;
const number2 = document.getElementById("secondNumber").value;
const equalsButton = document.getElementById("result");
const addition = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const resultDisplay = document.getElementById("answer");

// function add() {
//   resultDisplay.innerHTML = number1 + number2;
// }
// subtract();
// multiply();
// divide();
function equalsTo() {
  // take the operator input
  const operator = addition || subtract || multiply || divide;

  // using if...else if... else
  if (operator == addition) {
    result = number1 + number2;
  } else if (operator == subtract) {
    result = number1 - number2;
  } else if (operator == multiply) {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  // display the result
  console.log(`${number1} ${operator} ${number2} = ${result}`);
}
