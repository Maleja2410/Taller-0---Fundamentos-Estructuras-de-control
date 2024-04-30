// Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.

Function to perform the selected operation
function performOperation(num1, num2, operation) {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error: Invalid operation.";
  }