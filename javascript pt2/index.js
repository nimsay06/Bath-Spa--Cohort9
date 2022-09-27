function equalsTo() {
  const x = parseInt(document.getElementById("firstNumber").value);
  const y = parseInt(document.getElementById("secondNumber").value);
  const operator = document.getElementById("operator").value;
  var result;

  if (operator === "add") {
    result = x + y;
  } else if (operator === "subtract") {
    result = x - y;
  } else if (operator === "multiply") {
    result = x * y;
  } else if (operator === "divide" && y != 0) {
    result = x / y;
  }
  document.getElementById("answer").innerHTML = result;
}
