// AMBITO SUPERGLOBAL
// Tenemos acceso 
// desde cualquier archivo

// AMBITO GLOBAL***************
// es el contexto que 
// engloba un mismo archivo

// VAR
// Esta en un archivo libre 
//no esta dentro de una funcion
// no esta dentro de un if, 
//ni de una sentencia que tenga 
//llaves esta libre fuera.

var perro= "lucas";

// AMBITO LOCAL****************
// tenemos acceso que engloba
// una funcion

function saltar(){
  var gato= "felino"
}
console.log(gato)
//AMBITO DE BLOQUE**************
// Es el contexto que esta 
// englobado dentro de un bucle
// o condicional if

// VAR

let nombre="Maria"

if(nombre== "Maria"){
  var apellido="Gonzales"
  let mascota="gato"
}


