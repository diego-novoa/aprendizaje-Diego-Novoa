// Operadores de Comparacion

// 1. >   mayor que
// 2. <   menor que
// 3. >=  mayor igual
// 4. <=  menor igual
// 5. ==  igual que (igual valotr)
// 6. === extrictamente igual que (igual valor y tambien)
// 7. !=  diferente que (distinto valor)
// 8. !== extrictamente diferente que
// (distinto valor)

// NOTA: todos estos Operadores 
// de comparacion se usan en bucles y condicionales

let edadMaria=37
let edadJose="34"
let edadAntonio=17
let edadCarmen=18
let edadCasimiro=45

if(edadMaria==edadJose){
 console.log("tenemos la misma edad")
}else{
  console.log("no tenemos la misma edad")
}

// OPERADORES ARITMETICOS

console.log(3+5) // suma
console.log(5-5) // resta
console.log(7*9) // multiplicacion
console.log(5/2) // operador divicion
console.log(10%2) // operador de de modulo o resto

// OPERADORES LOGICOS

// ! de negacion
// &&
// || operador or o 

let nombre='Maria';
let nombreMascota='pipe';

if(!nombreMascota){
  console.log(`la mascota tiene nombre  y su nombre es ${nombreMascota}`);
}else{
  console.log(`la moascota no tiene nombre`);
}

let nombreMujer='carla'
let edadMujer='27'
let estadoMujer='soltera'
let esMujer=true

if(nombreMujer=='carla' && edadMujer =='28'){
  console.log('se cumple la condicion')
}else{
  console.log('No se cumple la condicion')
}

if(nombreMujer=='carla' || edadMujer =='28'){
  console.log('se cumple la condicion')
}else{
  console.log('No se cumple la condicion')
}

