console.log('-- EXERCISE 2: strings --');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo
el texto en mayúscula (utilizar toUpperCase). */

console.log('-Exercise 2.a:');
var stringA = 'Holamundo hola mundo';
var resultA = stringA.toUpperCase();
console.log(resultA);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring). */

console.log('-Exercise 2.b:');
var stringB = 'Holamundo hola mundo';
var resultB = stringB.substring(0, 5);
console.log(resultB);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un
nuevo string con los últimos 3 caracteres guardando el resultado en una nueva
variable (utilizar substring). */

console.log('-Exercise 2.c:');
var stringC = 'Holamundo hola mundo';
var resultC = stringC.substring(stringC.length - 3, stringC.length);
console.log(resultC);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el
operador +). */

console.log('-Exercise 2.d:');
var stringD = 'holamundo hola mundo';
var resultD =
  stringD.substring(0, 1).toUpperCase() + stringD.substring(1, stringD.length);
console.log(resultD);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio
en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf). */

console.log('-Exercise 2.e:');
var stringE = 'holamundo hola mundo';
var resultE = stringE.indexOf(' ');
console.log(resultE);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres
y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y
las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +). */

console.log('-Exercise 2.f:');
var stringF = 'holamundo chaumundo';

var resultF =
  stringF.substring(0, 1).toUpperCase() +
  stringF.substring(1, stringF.indexOf(' ') + 1) +
  stringF
    .substring(stringF.indexOf(' ') + 1, stringF.indexOf(' ') + 2)
    .toUpperCase() +
  stringF.substring(stringF.indexOf(' ') + 2, stringF.length);

console.log(resultF);
