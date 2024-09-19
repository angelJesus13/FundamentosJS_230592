// Comentarios de una sola línea 

/*
Comentario Multilínea
*/

// Ejercicio 01: Declaración de variables

// a) VAR
var miNombre = "Angel de Jesus";
var misApellidos = "Baños Tellez";
var edad = 19; // Cambiado a número

// El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor
console.warn("---Declaración de variables usando var:");
console.log("Intentando leer variables: ", miNombre, misApellidos);

misApellidos = "Baños Tellez";
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas: ", miNombre, misApellidos); // Corregido: console.loh -> console.log
// Una variable puede cambiar en el proceso de ejecución del programa 

// b) const

console.warn("---Declaración de variables del tipo constante");
const miUniversidad = "Universidad Tecnológica de Xicotepec de Juárez";
const matricula = 230592;
console.log("Hola", miNombre, " ", misApellidos, "Se que estudias en:", miUniversidad, "Tu matrícula es:", matricula, "y tienes una edad de: ", edad);
// Una vez declaradas estas variables estas no pueden cambiar su valor 

// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeof()

console.log("Analizando los datos puedo deducir que: ");
console.log("mi nombre es del tipo: ", typeof(miNombre));
console.log("mi universidad es del tipo: ", typeof(miUniversidad));
console.log("mi matrícula es del tipo: ", typeof(matricula));
console.log("mi edad es del tipo: ", typeof(edad));

// c) let

let miFechadeNacimiento = "2005-07-26";
let miColorFavorito = "Blanco";

console.warn("---Declaración de variables del tipo let");
console.log("Genial, te voy conociendo mejor, ahora se que naciste en: ", miFechadeNacimiento, "y tu color favorito es... mmmmmm déjame pensarlo es:", miColorFavorito);

// Mostrar tipos de datos para las variables `let`
console.log("mi fecha de nacimiento es del tipo: ", typeof(miFechadeNacimiento));
console.log("mi color favorito es del tipo: ", typeof(miColorFavorito));

console.log("Analizando los datos puedo deducir que :");
console.log("miColor favorito es del tipo: ", typeof(miColorFavorito));
console.log("mi fecha de nacimiento es del tipo: ", typeof(miFechadeNacimiento));
