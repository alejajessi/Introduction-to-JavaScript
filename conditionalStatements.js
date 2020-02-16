//Lección Conditional Statements

//Inicio de ejercicio The if keyword
//Punto 1. Declare una variable let llamada sale e iguale a true.
//Punto 2. Haga uso del if, coloque sale como parametro y dentro imprima 'Time to buy!'
//Punto 3. Cambie el valor de sale a false, antes de iniciar el if.

let sale=true;
 sale=false;
if(sale){
  console.log('Time to buy!');
}

//Inicio de ejercicio if...else statements
//Punto 1. Teniendo en cuenta el código inicial, añada un else
//         e imprima 'Time to wait for a sale.'

 /*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else{
  console.log('Time to wait for a sale.');
}

//Inicio de ejercicio Comparison Operators
//Punto 1. Declare una variable let llamada hungerLever e iguale a 7.
//Punto 2. Cree un if...else. La condición es que la variable hungerLevel sea mayor a 7.
//         Dentro del if imprima 'Time to eat!' y del else imprima 'We can eat later!')

let hungerLevel=7;
if (hungerLevel > 7){
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

//Inicio de ejercicio Logical Operators
//Punto 1. Cree en un if...else. El condicional es:
//         mood debe ser 'sleepy' y tirednessLevel debe ser mayor a 8
//         Dentro del if, imprima 'time to sleep' y en el else, imprimir
//         'not bed time yet'

 /*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else{
  console.log('not bed time yet');
}

//Inicio de ejercicio Truthy and Falsy
//Punto 1. Cambie el valor de la variable wordCount para que entre al if.
//Punto 2. Cambie el valor de la variable favoritePhrase para que entre al else.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

