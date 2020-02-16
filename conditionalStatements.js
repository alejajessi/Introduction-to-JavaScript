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

//Inicio de ejercicio Truthy and Falsy Assignment
//Punto 1. Asigna a writingUtensil el valor de tool y si tool es falsa, asigna un valor por defecto de 'pen'.
//Punto 2. Re-asignar el valor de tool para marker.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let tool = '';

tool = 'marker';

// Use short circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Inicio de ejercicio Ternary Operator
//Punto 1. Modifique el primer if..else, precisamente el bloque usando un ternary operator.
//Punto 2. Modifique el segundo if..else, precisamente el bloque usando un ternary operator.
//Punto 3. Modifique el tercer if..else, precisamente el bloque usando un ternary operator.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let isLocked = false;

isLocked ?
  console.log('You will need a key to open the door.') :
  console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ?
  console.log('Correct!') :
  console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
  console.log('I love that!') :
  console.log("I don't love that!");

  //Inicio de ejercicio Else if Statements
  //Punto 1. Agregue un else if, dónde la condición sea
  //         season === 'winter' y dentro de él, imprima 
  //         'It\'s winter! Everything is covered in snow.'
  //Punto 2. Agrege un else if, dónde la condición sea 
  //         season === 'fall' y dentro de él, imprima 
  //         'It\'s fall! Leaves are falling!'
  //Punto 3. Agrege un else if, dónde la condición sea 
  //         season === 'summer' y dentro de él, imprima 
  //         'It\'s sunny and warm because it\'s summer!'

  /*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

//Inicio de ejercicio The switch keyword
//Punto 1. Inicialize un switch case.
//Punto 2. Agregue los siguientes case:
//         case 1: el valor 'first place' e imprime 'You get the gold medal!'
//         case 2: el valor 'second place' e imprima 'You get the silver medal!' 
//         case 3: el valor 'third place' e imprima 'You get the bronze medal!'
//Punto 3. Agrege un default, e imprima en él lo siguiente
//         'No medal awarded.'

  /*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place' :
    console.log('You get the gold medal!');
    break;
  case 'second place' :
    console.log('You get the silver medal!');
    break;
  case 'third place' :
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
