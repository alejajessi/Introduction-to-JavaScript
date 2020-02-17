//Inicio de lección higher-order functions

//Inicio de ejercicio Functions as data
//Punto 1. Declare una variable llamada is2p2 y asignele el valor de
//         checkThatTwoPlusTwoEqualsFourAMillionTimes
//Punto 2. Llame la función is2p2;
//Punto 3. Si a usted se le olvida ese nombre tan largo, imprima el nombre
//         original haciendo uso de is2p2.

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  is2p2();
  console.log(is2p2.name);

//Inicio de ejercicio Functions as parameters
//Punto 1. Declare una variable time2p2, asignele el valor de
//         timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
//Punto 2. Escribe una función que tenga dos parametros llamados func y val

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
};
  
const addTwo = num => num + 2;
  
const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};
  
// Write your code below
  
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
const checkConsistentOutput = (func, val) => {
      let firstTry = func(val);
      let secondTry = func(val);
      if (firstTry === secondTry) {
          return firstTry
      } else {
          return 'This function returned inconsistent results'
      }
};

