console.log('Ejercicio 1')
// base 16 * 23 cm
// altura 13 cm

const volumen = 16 * 23 * 13;
console.log('Volumen', volumen + ' cm3');

// A = al + 2ab
const areaLateral = 23 * 13;
const areaBase = 16 * 23;
const areaTotal = areaLateral + 2*areaBase;
console.log('Área total =', areaTotal + ' cm2');

//Generalización
const base = 23;
const altura = 13;
const ancho = 16;
const volumen2 = base * altura * ancho;
console.log('Volumen 2 =', volumen2 + ' cm3');

const area2 = base * altura + 2 * base * ancho;
console.log('Área 2 =', area2 + ' cm2');