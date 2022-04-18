console.log('-- EXERCISE 5: for --');
console.log('');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */

console.log('- Exercise 5.a:');

var animals =
  ["cat", "dog", "elephant", "tiger", "fish"];

for (let i = 0; i < animals.length; i++) {
  alert('ex05-a: ' + animals[i]);
  
}
console.log('');

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula
 y mostrar una alerta por cada palabra modificada. */

console.log('- Exercise 5.b:');

for (let i = 0; i < animals.length; i++) {
  animals[i] =
    animals[i].substring(0, 1).toUpperCase() +
    animals[i].substring(1, animals[i].length);
  alert('ex05-b: ' +animals[i]);
}
console.log('');

/* c. Crear una variable llamada “sentence” que tenga un string vacío,
luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa. */

console.log('- Exercise 5.c:');

var sentence = '';

for (let i = 0; i < animals.length; i++) { 
  sentence = sentence + animals[i];
}
alert('ex05-c: sentence: '+ sentence);
console.log('');

/* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */

console.log('- Exercise 5.d:');

var numbers = [];

for (let i = 0; i < 10; i++) { 
  numbers[i] = i;
}

console.log('numbers: ', numbers);
console.log('');
console.log('');

