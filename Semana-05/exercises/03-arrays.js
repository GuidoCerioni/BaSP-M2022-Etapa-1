console.log('-- EXERCISE 3: arrays --');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
 "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('- Exercise 3.a:');
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[5], meses[11]);
 
/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('- Exercise 3.b:');
console.table(meses.sort());

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('- Exercise 3.c:');
meses.unshift('Verano');
meses.push('Invierno');
console.table(meses);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('- Exercise 3.d:');
meses.shift();
meses.pop();
console.table(meses);

/* e. Invertir el orden del array (utilizar reverse).*/

console.log('- Exercise 3.e:');
meses.reverse();
console.table(meses);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join). */

console.log('- Exercise 3.f:');
var joined = meses.join("-");
console.log(joined);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('- Exercise 3.g:');
var mesesOrdered = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var sliced = mesesOrdered.slice(mesesOrdered.indexOf("Mayo"), mesesOrdered.indexOf("Noviembre")+1);
console.table(sliced);
