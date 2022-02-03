console.log('Ejercicio 10')
//Separar números pares e impares

let number =[253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
let pares = number.filter(function(numero){  /*Crea un nuevo array con todos los elementos que cumplan la condición dada por la función 
    para buscar números pares.*/
  return numero % 2 ==0; //Busca números pares.
});
let impares = number.filter(function(numero2){ /*Crea un nuevo array con todos los elementos que cumplan la condición dada por la función 
    para buscar números impares.*/
  return numero2 % 2 !=0; // Busca números impares.
})
console.log('Números pares ->', pares);
console.log('Números impares ->', impares);