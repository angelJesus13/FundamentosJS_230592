// // 1. Tipo de dato undefined

console.warn("---TIPO DE DATO UNDEFINED---");
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Angel";
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato del cliente es: ${typeof(cliente)}`);

cliente = "1928";
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato del cliente es: ${typeof(cliente)}`);


// // 2. Boolean

console.warn("---TIPO DE DATO BOOLEAN---");
let esPremium = "No lo sé";
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`El cliente es premium: ${esPremium}`);
console.log(`Asignando el valor true a la variable`);
esPremium = true;
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("¿Es el cliente premium?");
console.log("Cambiando el valor de esPremium a false");
esPremium = false;

if (esPremium)
    console.log("El cliente pagó por usar el servicio");
else
    console.log("El cliente recibe los servicios gratuitos");

// // 3. Number

var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transaccion;

console.warn("---TIPO DE DATO NUMBER---");
console.log(`Tu saldo al día de hoy es ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`); 
cantidad = 8;
console.log(`Has elegido comprar ${cantidad} de productos`);
console.log(`El importe total de la compra es: ${(cantidad * costo_producto)}`);
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

// El cliente realiza un abono de 1
saldo_cuenta = saldo_cuenta + 1;
console.log(`Después del abono, tu saldo es de: ${saldo_cuenta}`);

// //String o Cadenas de Texto
console.warn("---Tipo de Dato - STRING---");
const alumno = "Angel de Jesus Baños Tellez";
let producto = "Monitor 20 pulgadas";

console.log(typeof producto);

// //BigInt
console.warn("---Tipo de Dato - BIG INT---");
const numeroGrande = BigInt(182371823773218738);
console.log(typeof numeroGrande);

const numeroGrande2 = 1231243
const numeroGrande3 = 123124312132
const numeroGrande4 = 1231243234234234

console.log(`El primer experimento d un numero grande es : ${numeroGrande2}, que si es soportado por number, y su tipo de dato es: {typeof(numeroGrande2})`)

// //Suma con BigInt
const numero = 10;
console.log(numero + Number(numeroGrande));

const numeroString = "30";
const numero2= 30;

console.log(typeof String(numero2));
console.log(typeof Number(numeroString));

// //Symbol
console.warn("---Tipo de Dato - SYMBOL---");
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol);

console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

// //Null
console.warn("---Tipo de Dato - NULL---");
const descuento = null;
console.log(typeof descuento);

// //Objetos
// //Creación de un objeto
const producto4 = {
    nombre : "Tablet", 
    precio : 300,
    disponible: true
};

console.log(producto4);
console.table(producto4);
console.log(producto4.precio);
console.log(producto4.nombre);
console.warn("---Tipo de Dato - Destructuring---")
// //Destructuring
// //Extrayendo propiedades del objeto
const { nombre, precio, disponible } = producto4;
console.log(nombre);
console.log(precio);
console.log(disponible);

// //Creación de un nuevo objeto
const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
};

console.table(nuevoObjeto);
