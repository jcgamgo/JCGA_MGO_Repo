console.log('Ejercicio 16')
//Manejo DOM

//Número de enlaces de la página
const enlaces = document.getElementsByTagName('a');
console.log("En el documento hay " + enlaces.length + " enlaces")


//Dirección a la que enlaza el penúltimo enlace
const penultimo = enlaces[enlaces.length-2].href;
console.log("El penúltimo enlace apunta a: " + penultimo);


//Número de enlaces del tercer párrafo
const parrafo3 = document.getElementById('third-paragraph');
const enlaces3 = parrafo3.getElementsByTagName('a');
console.log("El tercer párrafo tiene " + enlaces3.length + " enlaces")

//Crear nodo y añadir contenido
const nuevoParrafo = document.createElement('p');
nuevoParrafo.innerHTML = "<br>" + "<h3><b>RESULTADOS</b></h3>" + "<br>" +"En el documento hay " + enlaces.length + " enlaces" + "<br>" + "El penúltimo enlace apunta a " + penultimo + "<br>" + "El tercer párrafo tiene " + enlaces3.length + " enlaces";
document.body.appendChild(nuevoParrafo);

