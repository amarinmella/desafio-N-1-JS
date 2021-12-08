// Solicito los datos al usuario
let nombre = prompt('Introduce tu nombre');
let apellido = prompt('Ingresa tu Apellido');
let edad = prompt('Ingresa tu edad');

let datos = "Hola " + nombre + " " + apellido + ", tu edad es " + edad + " Años";

// Constante
const PI = 3.14;

//Muestro los resultados alert
alert(datos);

//muestro los resultados console.log
console.log(datos)

alert('Vamos a restar, sumar, multiplicar y dividir 2 numeros');

let num1 =  Number(prompt('Ingresa el primer numero entero:'));
let num2 = Number(prompt('Ingresa el segundo numero entero:'));

//Operaciones aritmeticas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

let operaciones = "Suma: " + suma + ", Resta: " + resta + ", Multiplicación: " + multiplicacion + ", División: " + division;

alert(operaciones);

console.log(operaciones)

alert('Vamos a calcular el area de un circulo');

let radio = Number(prompt('Ingresa el radio:'));

let area = PI * (radio * radio);

alert(area);