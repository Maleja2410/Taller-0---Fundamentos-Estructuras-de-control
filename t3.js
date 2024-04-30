// Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso (sin usar funciones de JavaScript).
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  
  console.log(reverseString("Rodriguez"));