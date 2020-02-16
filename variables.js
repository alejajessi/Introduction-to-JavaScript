//Inicio lección 2 -Variables

//Inicio de ejercicio create a variable:var
//Punto 1. Declare una variable llamada favoriteFood e iguale a 'pizza'
//Punto 2. Declare una variable llamada numOfSlices e iguale a 8.
//Punto 3. Imprima el valor guardado en los dos puntos anteriores.

var favoriteFood='pizza';
var numOfSlices=8;
console.log(favoriteFood);
console.log(numOfSlices);

//Inicio de ejercicio create a variable:let
//Punto 1. Declare una variable llamada changeMe e iguale a true
//Punto 2. Haciendo uso de la variable declarada, cambie su valor a false e imprimalo.

let changeMe=false
console.log(changeMe);

//Inicio de ejercicio create a variable: const
//Punto 1. Declare una variable entree e iguale a 'Enchiladas'
//Punto 2. Imprima el valor de la variable creada
//Punto 3. Coloque entree='Tacos'. Debe generar un error. (Luego elimine)

const entree='Enchiladas';
console.log(entree);
//entree='Tacos'

//Inicio de ejercicio Mathematical Assignment Operators
//Punto 1. Realice un incremento, use +=5 en variable levelUp
//Punto 2. Realice un decremento, use -=100  en variable powerLevel
//Punto 3. Realice una multiplicación, use *=11 en variable multiplyMe
//Punto 4. Realice una división, use /=4 en variable quarterMe

 /*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp+=5;
powerLevel-=100;
multiplyMe*=11;
quarterMe/=4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//Inicio de ejercicio The Increment and Decrement Operator
//Punto 1. Haciendo uso de los operadores aprendidos, incremente la variable gainedDollar
//Punto 2. Haciendo uso de los operadores aprendidos, decremente la variable lostDollar

 /*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

//Inicio de ejercicio String Concatenation with Variables
//Punto 1. Cree una variable llamada favoriteAnimal e iguale a su animal favorito
//Punto 2. Imprima "my favorite animal:". Continuo a ello, haga uso de la variable para adjuntar el animal favorito.

let favoriteAnimal='Perro';
console.log('my favorite animal:'+ favoriteAnimal);

//Inicio de ejercicio String Interpolation
//Punto 1. Declare una variable denominada myName y coloque su nombre.
//Punto 2. Declare una variable denominada myCity y coloque su ciudad.
//Punto 3.Imprima haciendo uso del single template literal.
//        Use el siguiente formato `My name is NAME. My favorite city is CITY
//        La letra en mayúscula debe ir reemplazada por la variable correspondiente.

let myName = 'Jessica Alejandra';
let myCity = 'Cali';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

//Inicio de ejercicio Typeof Operator
//Punto 1. Imprima la variable dada inicialmente pero haga uso de typeof.
//Punto 2. Re asigne un valor númerico. Para este caso use el 1. Por último, imprima.
//Punto 3. Vuelva a hacer uso del typeof y console.log.

 /*Código copiado de Codecademy
 Curso: Introduction to JavaScript
 */

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable=1;
console.log(newVariable);
console.log(typeof newVariable);
