//Inicio de lección Scope

//Inicio de ejercicio Blocks and Scope
//Punto 1. Declare una variable tipo const llamada city e iguale a 'New York City'
//Punto 2. Declare una función sin cuerpo llamada logCitySkyline().
//Punto 3. Dentro de la función, declare una variable tipo let llamada skyscrapper
//         iguale la variable a 'Empire State Building'
//Punto 4. Agregue un return a la función, y asegurese que cumpla la siguiente estructura
//         'The stars over the ' + skyscraper + ' in ' + city.

const city='New York City'

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
return 'The stars over the ' + skyscraper + ' in ' + city;
}