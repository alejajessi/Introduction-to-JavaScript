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