console.log('-- EXERCISE 4: arrays --');

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5”
y sino un alerta con el mensaje “Lower than 0,5”. */

console.log('- Exercise 4.a:');

var random = Math.random();
console.log("random = ", random);

if (random < 0.5) {
  console.warn("Lower than 0,5")
}else {
  console.warn("Greater than 0,5")
};

 
/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.
*/

console.log('- Exercise 4.b:');

var age = Math.random() * 100;
console.log("age = ", age);

if (age < 2) {
  console.warn("Bebe");
}
else if (age < 13) {
  console.warn("Niño");
}
else if (age < 20) {
  console.warn("Adolescente");
}
else if (age < 31) {
  console.warn("Joven");
}
else if (age < 61) {
  console.warn("Adulto");
}
else if (age < 75) {
  console.warn("Adulto mayor");
}
else if (1) {
  console.warn("Anciano");
}
