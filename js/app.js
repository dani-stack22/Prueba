//1) alert("Hola mundo!");

// Ejercicio 2) 
// document.write("Hola Dani"); //Asi no se hace
//2) document.write("<h1>Hola Dani!</h1>"); //Con esto estamos escribiendo el body directo desde JS

//document.write("<img src="https://picsum.photos/200/300" alt="img aleatoria""); NO FUNCA xq se pone como comentario

// document.write("<br>");

// Ejercicio 3) document.write(10+2);
// document.write("<br>");

// Ejercicio 4) 
//const peli = prompt("Peli favorita"); //Con esto guardamos lo que escribamos en el cuadro en la variable peli

//document.write("Su peli favorita es: " + peli);

//Ejercicio 5) 
//var x = parseInt(prompt("Escribe un numero: ")); lo que hace parseInt es convertir en number al string que ponemos en prompt
// var y = parseInt(prompt("Escribe otro numero: "));
// document.write("<br>");
// document.write( x + y );

// Ejercico 6) var x = parseInt(prompt("Escribe un numero: "));
// var y = parseInt(prompt("Escribe otro numero: "));
// if ( x > y) {
//   alert(x);
// } else {
//   alert(y);
// }

//Ejercicio 7)
// var num1 = parseInt(prompt("Escribe un numero: "));
// var num2 = parseInt(prompt("Escribe otro numero: "));
// var num3 = parseInt(prompt("Escribe otro numero: "));
// if ( num1 > num2 && num1 > num3) {
//    alert(num1);
//  } else if (num2 > num1 && num2 > num3) { //O ( num2 > num3 ) solamente
//    alert(num2);
//  } else {
//    alert(num3);
//  }

//Ejercicio 8)
// var num1 = parseInt(prompt("Escribe un numero: "));
// if (num1 % 2 === 0) {
//   alert("El numero es divisible por 2");
// } else {
//   alert("El numero NO es divisible por 2");
// }
//Otra opcion el Ej 8 seria:
// var numPar = parseInt(prompt("Escribe un numero: "));
// var resultado = (numPar % 2);

// console.log(resultado); //Esto hay que borrar sino nos dan un  PullResquet, osea que esta mal

// if (resultado == 0) { //No me funca, volver a ver (dsp del break)
//   alert(`El numero ${numPAr} es PAR`);
// } else {
//   alert(`El numero ${numPAr} NO es PAR`);
// }

// Ej 9: Escriba un programa que pida una frase y escriba las vocales que aparecen
// var frase = prompt("Escriba una frase: ");
// var cantFrase = frase.length;
// for(i = 0; i < frase.length; i++){
//   if(frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i" || frase.substr(i,1) === "o" || frase.substr(i,1) === "u"){
//     document.write(frase.substr(i,1)); //El 1 nos indica la cant de caracteres que extraera!
//   } 
// }

//Ej. 10: Escribe un programa que pida un numero y nos diga si es divisible por 2,3,5 o 7 (solo hay que comprobar si lo es por 1 de los 4)
// var number1 = parseInt(prompt("Ingrese un numero: "));
// if(number1 % 2 === 0 || number1 % 3 === 0 || number1 % 5 === 0 || number1 % 7 === 0){
//   document.write(`El numero ${number1} es divisible por 2,3,5 o 7`);
// } else{
//   document.write(`El numero ${number1} no es divisible ni por 2,3,5 o 7`);
// }

//Ej. 11: Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
// var number1 = parseInt(prompt("Ingrese un numero: "));
// if(number1 % 2 === 0 || number1 % 3 === 0 || number1 % 5 === 0 || number1 % 7 === 0){
//   document.write(`El numero ${number1} es divisible por 2,3,5 o 7`);
//   if(number1 % 2 === 0){
//     document.write("<br>");
//     document.write(`El numero ${number1} es divisible por 2`);
//   }else if(number1 % 3 === 0){
//     document.write("<br>");
//     document.write(`El numero ${number1} es divisible por 3`);
//   }else if(number1 % 5 === 0){
//     document.write("<br>");
//     document.write(`El numero ${number1} es divisible por 5`);
//   }else{
//     document.write("<br>");
//     document.write(`El numero ${number1} es divisible por 7`);
//   }
// }else{
//   document.write(`El numero ${number1} no es divisible ni por 2,3,5 o 7`);
// }
//La posibilidades de combinacion son 4eleveado a la 4 y todo son if else if!



