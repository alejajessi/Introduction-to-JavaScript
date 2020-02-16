//Inicio de lección de functions
//Punto 1. Cree una función llamada getReminder()
//Punto 2. En el cuerpo de la función creada, imprima 'Water the plants.'
//Punto 3. Cree una función greetInSpanish(), luego imprima.
//Punto 4. En el cuerpo de la función creada, imprima 'Buenas Tardes.'

console.log(getReminder()); 

function getReminder() {
  console.log('Water the plants.');
}

console.log(greetInSpanish());

function greetInSpanish() {
  console.log('Buenas Tardes');
}

// Inicio de ejercicio Calling a Function
//Punto 1. Cree una función llamada sayThanks() e imprima
//         'Thank you for your purchase! We appreciate your business.'  
//Punto 2. Llame la función que acabo de crear.
//Punto 3. Llame dos veces más esta función.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}
  
sayThanks();
sayThanks();
sayThanks();

//Inicio de ejercicio Parameters and Arguments
//Punto 1. Agregue un parametro name a la función dada inicialmente.
//Punto 2. Agregue el parametro al mensaje a imprimir en el console.
//Punto 3. Lla,e la función e ingrese en el parametro solicitado el nombre 'Cole'

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
  
sayThanks('Cole');

  //Inicio de default parameters
  //Punto 1. Asigne valores default a los parametros de la función.
  //         Para el item1 = milk, para el item2 = bread, para el item3 = eggs

  /*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//Inicio de ejercicio return
//Punto 1. Declare una función llamada monitorCount que tenga 2 parametros: rows, columns.
//Punto 2. Retorne la multiplicación de estos 2 parametros
//Punto 3. Declare una variable numOfMonitors tipo const e invoque la función con los parametros 5 y 4.

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
const numOfMonitors = monitorCount(5, 4);
  
console.log(numOfMonitors);

//Inicio de ejercicio Helper functions
//Punto 1. Cree una nueva función debajo de la función inicial dada. 
//         Esta función debe llamarse costOfMonitors
//Punto 2. Agregue un return, haga un llamado a monitorCount y multiplique ese valor por 200.
//Punto 3. Cree una variable tipo const llamada totalCost para asignar el valor que arrojará la función.
//Punto 4. Imprima el valor totalCost.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
function costOfMonitors(rows, columns){
    return monitorCount(rows,columns)*200;
  }
  
const totalCost = costOfMonitors(5,4);
  
console.log(totalCost);

//Function expressions
//Punto 1. Cree una variable llamada plantNeedWater tipo const.
//         Asigne una función anonima con parametro day a la variable creada en el punto 1.
//Punto 2. En el cuerpo de la función, realice un if...else. La condición será que day sea
//         igual a 'Wednesday'.
//         Además, en el cuerpo del if, retornen true. 
//Punto 3. En el cuerpo del else, retorne false.
//Punto 4. Llamar la función plantNeedsWater() e ingrese como parametro 'Tuesday'
//Punto 5. Imprima el valor del llamado realizado. Debe dar false.

const plantNeedsWater = function(day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  };
  
plantNeedsWater('Tuesday');
  
console.log(plantNeedsWater('Tuesday'));

//Inicio de ejercicio arrow functions
//Punto 1. Modifique la función dada inicialmente a una sintaxis arrows functions.


/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

//Inicio de ejercicio Concise body arrow functions
//Punto 1. Convierta el código inicial dado en una sola línea.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const plantNeedsWater = day =>   day === 'Wednesday' ? true : false;
