//Inicio de lección Scope

//Inicio de ejercicio Blocks and Scope
//Punto 1. Declare una variable tipo const llamada city e iguale a 'New York City'
//Punto 2. Declare una función sin cuerpo llamada logCitySkyline().
//Punto 3. Dentro de la función, declare una variable tipo let llamada skyscrapper
//         iguale la variable a 'Empire State Building'
//Punto 4. Agregue un return a la función, y asegurese que cumpla la siguiente estructura
//         'The stars over the ' + skyscraper + ' in ' + city.
//Punto 5. Imprima la función logCitySkyline()

const city='New York City'

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
return 'The stars over the ' + skyscraper + ' in ' + city;
}

//Inicio de ejercicio Global Scope
//Punto 1. Declare 3 variables:
//         satellite = 'The Moon'
//         galaxy = 'The Milky Way'
//         stars = 'North Star'
//Punto 2. Delcare una función llamada callMyNightSky().
//         En el cuerpo de la función, return 'Night Sky: '
//         + satellite + ', ' + stars + ', and ' + galaxy; 
//Punto 3. Imprimir la función.

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars='North Star';

function callMyNightSky(){
return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//Inicio de ejercicio Block Scope
//Punto 1. Declare la función logVisibleLightWaves.
//Punto 2. En el cuerpo de la función, declare una
//         const ligthWaves iguale a 'Moonlight'.
//Punto 3. Haga un llamado a la función creada en el punto 2.
//Punto 4. Imprima la variable lightWaves fuera de la función.

function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
}
  
logVisibleLightWaves();
  
console.log(lightWaves);

//Inicio de ejercicio Scope Pollution
//Punto 1. Dentro de la función callMyNightSky, antes del return
//         Reasigne el valor a stars, iguale a 'Sirius'
//Punto 2. Asigne una nueva impresión debajo de la impresión dada 
//         inicialmente. Imprima stars.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars='Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

//Inicio de ejercicio Practice good scoping
//Punto 1. Después del comentario, añada un if que verifique si región es
//         igual a 'The Arctic'
//Punto 2. Dentro del if, declare una variable tipo let llamada lightWaves
//         e iguale a 'Northern Lights'
//Punto 3. Imprimir dentro del if la variable creada.

/*Código copiado de Codecademy
 Curso: Introduction to JavaScript
*/

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic'){
      let lightWaves='Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
};
  
logVisibleLightWaves();

