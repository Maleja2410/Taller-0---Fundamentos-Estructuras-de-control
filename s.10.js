// Escriba un programa que tome dos números base y altura para calcular el area de un triángulo.

function triangleArea(base, height) {
    return 0.5 * base * height;
  }
  Enter the base of the triangle: 4
    Enter the height of the triangle: 6
    The area of the triangle is: 12

area = (base * height) / 2
  
  let base = parseFloat(prompt("Enter the base of the triangle: "));
  let height = parseFloat(prompt("Enter the height of the triangle: "));
  
  let area = triangleArea(base, height);
  
  console.log(`The area of the triangle is: ${area}`);