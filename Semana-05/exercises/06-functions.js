console.log('-- EXERCISE 6: functions --');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador. */

console.log('- Exercise 6.a:');

function addNumbers(num1, num2) {
  return num1 + num2;
}

var result = addNumbers(7, 8);
console.log('suma = ', result);
 
/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('- Exercise 6.b:');

function addNumbersValidated(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    console.warn('there is an error with some parameter, please pass numbers.')
    return NaN;
  }
  return num1 + num2;
}

console.log('(2,2) returns ');
console.log(addNumbersValidated(2, 2));
console.log('(100,100) returns ');
console.log(addNumbersValidated(100, 100));
console.log('("100",100) returns ');
console.log(addNumbersValidated('100', 100));
console.log('("a",100) returns ');
console.log(addNumbersValidated('a', 100));

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log('- Exercise 6.c:');

function validateInteger(int) {
  return Number.isInteger(int);
}
console.log('validateInteger(1) returns ');
console.log(validateInteger(1));
console.log('validateInteger("a") returns ');
console.log(validateInteger("a"));

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('- Exercise 6.d:');

function addIntegers(num1, num2) {
  if (!validateInteger(num1)) {
    console.warn('there is an error with first parameter.');
    return Math.trunc(num1);
  } else if (!validateInteger(num1)) {
    console.warn('there is an error with second parameter.');
    return Math.trunc(num2);
  }
  return num1 + num2;
}

console.log('addIntegers(1, 2) returns ');
console.log(addIntegers(1,2));
console.log('addIntegers(1.232323, 2) returns ');
console.log(addIntegers(1.232323, 2));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
probando que todo siga funcionando igual. */

console.log('- Exercise 6.e:');

function validateIntegerTrunc(int) {
  if (!validateInteger(int)) {
    console.warn('there is an error with the number.');
    return Math.trunc(num1);
  }
  return int; 
}

function addIntegersValidated(int1, int2) {
  if (typeof(int1) !== 'number' || typeof(int2) !== 'number') {
    console.warn('there is an error with some parameter, please pass numbers.')
    return NaN;
  }
  return num1 + num2;
}

console.log('(2,2) returns ');
console.log(addIntegersValidated(2, 2));
console.log('(100.1231,100) returns ');
console.log(addIntegersValidated(100,1231, 100));
console.log('("100",100) returns ');
console.log(addIntegersValidated('100', 100));
console.log('("a",100) returns ');
console.log(addIntegersValidated('a', 100));
