//Inicio lección  loops

//Inicio de ejercicio repeating tasks manually
//Punto 1. Crear variable vacationSpots y añada
//         tres ciudades que quiera visitar.
//Punto 2. Imprima uno a uno los elementos del array.

// Write your code below
const vacationSpots =['Aruba','Curacao','New York'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//Inicio de ejercicio the for loop 
//Punto 1. Realice un loop dónde el contador inicié en 5 y terminé en 10.
//         En el cuerpo del loop, imprima el número del contador.

for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

//Inicio de ejercicio looping in reverse
//Punto 1.Cree un loop en reversa que imprima de 3 a 0 en consola.

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}

//Inicio de ejercicio looping through arrays
//Punto 1. Haga un loop, que recorra todo el array vacationSpots
//          dentro de él, imprima 'I would love to visit '+ vacationSpots[i]

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length ; i++){
  console.log('I would love to visit '+ vacationSpots[i]);
}

//Inicio de ejercicio nested loops
//Punto 1. Construya un array llamado bobsFollowers e ingrese tres nombres
//Punto 2. Construya un array llamado tinasFollowers e ingrese tres nombres
//         Tener en cuenta: 2 nombres entre estos arrays deben ser iguales.
//Punto 3. Declare un array llamado mutualFollowers, dejelo vacío.
//Punto 4. Haga un loop que recorra el array de bob y otro dentro que recorra
//         el array de tina. Dentro del segundo loop, compare si algún elemento
//         tienen en común.

// Write your code below
const bobsFollowers =['Alexandra','Luis', 'Marco', 'Evelin'];
const tinasFollowers = ['Ingrid', 'Luis', 'Marco'];
const mutualFollowers=[];

for (let i=0; i < bobsFollowers.length; i++){

  for(let j=0; j< tinasFollowers.length; j++){

    if( bobsFollowers[i] === tinasFollowers[j]){

      mutualFollowers.push(tinasFollowers[j]);

    }
  }
}

//Inicio de ejercicio the while loop
//Punto 1. ​Declare una variable sin asignarle valor alguno
//         Esta variable debe llamarse currentCard.
//Punto 2. Realice un while, el cual tenga como condición que 
//         currentCard sea diferente a 'spade'.Por último en el
//         cuerpo, añada currentCard =                 cards[Math.floor
//         (Math.random() * 4)]; 
//Punto 3. Imprima currentCard por debajo de la declaración de currentCard.

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while(currentCard!='spade'){
currentCard = cards[Math.floor (Math.random() * 4)];
}

//Inicio de ejercicio do..while statements
//Punto 1. Declare dos variables. La primera llamela cupsOfSugarNeeded y 
//         la otra variable se debe llamar cupsAdded.
//         La 1er variable asigne el valor que desee y la segunda dejela en 0.
//Punto 2. Cree un do..while. Dónde cupsAdded sea menor a cupsOfSugarNeeded.

// Write your code below
const cupsOfSugarNeeded=9;
let cupsAdded=0;

do{
  cupsAdded++;
}while (cupsAdded < cupsOfSugarNeeded);

//Inicio de ejercicio the break keyword
//Punto 1. Cree un loop que recorra el rapperArray dado. el iterador debe ser i.
//         Por último, imprima cada elemento del array.
//Punto 2. Después del loop, imprima lo siguiente "And if you don't know, now you know.
//Punto 3. Construya un if dentro del loop, abajo de la impresión ya hecha.
//         Este if debe comparar si el elemento del array es igual a 'Notorious B.I.G.'
//         Si sí, debe hacer break.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");



​
