//Inicio de lección Arrays

//Inicio de ejercicio create an Array
//Punto 1. Declare un array con 3 strings conformandolo.
//Punto 2. Imprima hobbies

const hobbies = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(hobbies);

//Inicio de ejercicio accessing elements
//Punto 1. Cree una variable llamada listItem e iguale su primer item de famousSayings
//         e imprima.
//Punto 2. Imprima el tercer elemento de famousSayings.
//Punto 3. Imprima el elemento en el indice número 3 de famousSayings.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(listItem);

console.log(famousSayings[2]);

console.log(famousSayings[3]);

//Inicio de ejercicio Update Elements
//Punto 1. Cambie el segundo elemento del Array por 'avocados'

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1]='avocados';

//Inicio de ejercicio Array with let and const
//Punto 1. Cambie el elemento del array condiments
//         de la posición 0 a 'Mayo' e imprima todo el array.
//Punto 2. Cambie por completo el array  condiments
//         el único elemento que tendrá el array será 'Mayo'
//         e imprimir.
//Punto 3. Reasigne el último elemento del array utensils y 
//         cambielo por 'Spoon'. Imprima el array.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0]='Mayo';

console.log(condiments);

condiments=['Mayo'];

console.log(condiments);

utensils[3]='Spoon';

console.log(utensils);

//Inicio de ejercicio The .length property
//Punto 1. Imprima el tamaño del array dado.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

//Inicio de ejercicio the .push() method.
//Punto 1. Con .push, añada dos elementos más a chores.
//Punto 2. Imprima el array.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('item3', 'item4');

console.log ( chores);

//Inicio de ejercicio the .pop method
//Punto 1. Elimine el último elemento de la lista con .pop
//Punto 2. Imprima el array chores.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores);

//Inicio de more array methods.
//Punto 1. Elimine el primer elemento del array con .shift();
//         Imprima el array.
//Punto 2. Añada un elemento al inicio del array con .unshift()
//         e imprima el array.
//Punto 3. Imprima el array desde el 1-4 con .slice()
//Punto 4. Imprima el array
//Punto 5. Cree una constante llamada pastaIndex y asignele el elemento
//         del array correspondiente.Por último, imprima.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

//Inicio de ejercicio array and functions
//Punto 1. Imprima el array.
//Punto 2. Cree la función removeElement con
//         parametro newArr. En su cuerpo, hagale 
//         .pop al parametro.
//Punto 3.  Llame la función creada y de parametro
//          agregue concept.
//Punto 4. Imprima el array concept.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);

console.log(concept);

//Inicio de ejercicio Nested Arrays
//Punto 1. Declare una variable, su primer arreglo es [1,2], el
//         segundo es [3,4], el tercero es [5,6].
//Punto 2. Declare una variable tipo const llamada target y saque
//         el número 6 del array.

const numberClusters=[[1,2], [3,4], [5,6]];

const target= numberClusters[2][1];

