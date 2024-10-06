// Objetos

// const bg =
//   "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
// const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;
const bg =
  "linear-gradient(45deg, rgba(250,0,0,1) 0%, rgba(233,0,5,1) 50%, rgba(125,10,150,1) 100%)";
const style_console = `background: ${bg}; 
                      color: white; 
                      border-radius: 12px; 
                      padding: 8px 12px; 
                      font-size: 1.2rem; 
                      font-weight: bold; 
                      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
                      text-shadow: 2px 2px 4px rgba(0,0,0,0.5); 
                      border: 1px solid rgba(255,255,255,0.3)`;

console.warn("Practica 05: Repaso de Objetos en Java Script");
//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);
//Declaramos valores independientes relacionadas a un PRODUCTO
let Producto_Nombre = 'Apple Iphone 16"';
let Producto_Marca = "Apple";
let Producto_Modelo = "Iphone";
let Producto_Precio = 25000.0;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("IOS787VV-HX9921W");
let Producto_Stock = 666;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias = [
  "Electrónicos",
  "Celulares",
  "Ios",
  "Promociones CyberMonday",
  "Mejor Valorados",
];

// Accedemos a los valores de las carácterísticas del producto de manera indepentiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof Producto_Nombre}>
    Marca:  ${Producto_Marca}, Tipo de Dato <${typeof Producto_Marca}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof Producto_Modelo}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof Producto_Precio}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof Producto_Disponibilidad}>   
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof Producto_Stock}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof Producto_Barcode}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof Producto_Imagen}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof Producto_Categorias}>`);

console.log(
  "En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior"
);
console.log(Producto_SKU);
console.log(typeof Producto_SKU);

// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto", style_console);
let Producto = {
  Nombre: "Tenis Deportivos",
  Marca: "Hoka",
  Modelo: "SpeedGoat 6",
  Precio: 4000.0,
  Disponibilidad: false,
  Stock: 0,
  ID: 3216,
  SKU: "HK23525-S98",
  Imagen: ".",
  Barcode: null,
  Categorias: ["Deportes", "Running"],
};
// Ahora leemos el objeto completo
console.table(Producto);

console.log("Accediendo a propiedades específicas del PRODUCTO");
console.log(
  `Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`
);
console.log(`Precio: ${Producto.Precio}`);
if (Producto.Disponibilidad == 0) console.log(`Estatus: Agotado`);
else console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);

// Desestructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 = {
  ID: 316,
  Nombre: "Lentes para Sol",
  Marca: "RayBan",
  Modelo: "Aviador",
  Precio: 4000.0,
  Disponibilidad: true,
  Stock: 5,
  SKU: "OO9481D-0356",
  Imagen: "../assets/products/sunglasses/KatoRed.png",
  Barcode: 888392491626,
  Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"],
};

let Comprador = {
  ID: 3010,
  Nombre: "Angel de jesus",
  Apellidos: "Baños Tellez",
  Tipo: "Frecuente",
  Correo: "tellezutxj@gmail.com",
  PaisOrigen: "México",
  SaldoActual: 25000.0,
};

let Pedido = {
  ID: 5816,
  Producto_ID: 316,
  Comprador_ID: 3010,
  Cantidad: 2,
  Estatus: "Carrito de Compra",
  TipoPago: "Tarjeta de Crédito",
};

// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let { Precio: Producto_Precio2 } = Producto2;
let { Cantidad: Pedido_Cantidad } = Pedido;
let { SaldoActual: Cliente_SaldoActual } = Comprador;
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad;

console.log(
  `El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: $${Costo_Compra}`
);
if (Costo_Compra < Cliente_SaldoActual)
  console.log("El cliente tiene saldo suficiente.");

//Actualizar el valor de los objetos

console.log(
  "%c4.- Actualizacion de los valores de las propiedades de un objeto",
  style_console
);

console.log(`-------------------------------------`);
console.log("El objeto actualmente tiene los siguientes valores");
let tipoDisponibilidad = typeof Producto2.Disponibilidad;
console.log();
console.log(JSON.stringify(Producto2, null, 2));

//Agregar nuevas propiedades a un objeto existente

console.log(
  "%c5.- Actualizacion de las propiedades de un Objeto",
  style_console
);
console.log(JSON.stringify(Comprador));
console.log("Objeto antes de ser modificado");
console.table(Comprador);

//Agregando propiedades
Comprador["Direccion"] =
  "Benito Juarez #6, Colonia Los Alpes, Juan Galindo, Puebla, Mexico";
Comprador["Tipo"] = "Premium";
Comprador["Estatus"] = "Inactivo";
Comprador["TotalCompra"] = 175000.0;
console.log("Objeto despues de ser modificado: ");
console.table(Comprador);

//Eliminar propiedades de un objeto existente

console.log(
  "%c6.- Eliminacion de propiedadrs de un objeto (MUTACION)",
  style_console
);
console.log("Objeto antes de ser modificado");
console.table(Pedido);
//Eliminamos la propiedad de tipopago de pedido
delete Pedido["TipoPago"];
console.log("Objeto despues de ser modificado");
console.table(Pedido);

//

console.log(
  "%c7.- Metodos par controlar la nmutabilidad de los Objetos, Congelacion (FREEZE)",
  style_console
);
//Si deseamos no permitir que los objetos sean modificados ni en estrutrura, ni el valor, utilizaremos METODO FREEZE
console.log("La estructura actual del objeto COMPRADOR es: ");
console.table(Comprador);
Object.freeze(Comprador);
//Intentamos agregar, eliminar o modificar los valores de las propiedades
Comprador.FechaUltimaCompra = "03/07/2024 10:59:33";
delete Comprador.Tipo;
Comprador.Direccion =
  "Calle Pedro Moreno #7, Col. Los Alpes, Juan Galindo, Puebla, Mexico";
console.log(
  "Verificamos si se realizaron los cambios en el objeto COMPRADOR: "
);
console.table(Comprador);

console.log(
  "%c8.- Metodos para controlar la mutabilidad de los objetos sellado (SEAL)",
  style_console
);
//Sin embargo, en el caso que desamos pooder modificar los valores de las propiedades del objeto, pero no su estrutura, usaremos SEAL
Object.seal(Pedido);
//Intentamos modificar su estructura
Pedido["FechaPedido"] = " 24/09/2024 16:56:21";
delete Pedido["Cantidad"];
console.log("Verificamos si se realizaron los cambios en el objeto PEDIDO: ");
console.table(Pedido);
//Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad = 5;
console.log("Verificamos si se realiaron los cambjos en el objeto PEDIDO: ");
console.table(Pedido);

//Destructuracion de 2 o mas objetos

console.log("%c9.- Destructuracion de 2 o mas objetos", style_console);

const {
  Precio: productoPrecio,
  SKU: productoSKU,
  Marca: productoMarca,
} = Producto;

const {
  Correo: clienteCorreo,
  Pais: clientePais,
  SaldoActual: clienteSaldo,
  Tipo: clienteTipo,
} = Comprador;

// Transformar valores cuantitativos en cualitativos

// if (productoPrecio > 2000) productoPrecio = "Caro";
// else productoPrecio = "Barato";

// if (clienteSaldo > 0) clienteSaldo = "A favor";
// else if (clienteSaldo < 0) clienteSaldo = "En contra";
// else clienteSaldo = "Sin deuda";

// Transformar valores cualitativos en cuantitativos

let clienteNivel;

if (clienteTipo == "Premium") clienteNivel = 1;
if (clienteTipo == "Free") clienteNivel = 2;
if (clienteTipo == "No identificado") clienteNivel = 3;

// Clasificamos al cliente por su País de Origen
// if (clientePaís == "México") clientePais = "Nacional";
// else clientePais = "Extranjero";

// OLE - Object Literal Enhancement

let datosClientesPromociones = {
  clienteCorreo,
  clientePais,
  clienteNivel,
  clienteSaldo,
  productoMarca,
  productoPrecio,
};

//

console.log("Los datos del cliente y sus habitos de compra son: ");
console.table(datosClientesPromociones);

console.log("%c10.- Destructuracion de 2 o mas objetos", style_console);

console.log("Imprimimos la estructura y valores  del Objeto PRODUCTO");
console.table(Producto);

console.log("Imprimimos la estructura y valores del objeto PEDIDO");
console.table(Pedido);

//

const Venta = Object.assign(Producto, Pedido);
console.log("Consultamos este nuevo objeto venta");
console.table(Venta);

console.log(
  "%c11.- UNION DE OBJETOS USANDO EL SPREAD OPERATOR (...)",
  style_console
);

Producto.ID = 100;

let Venta2 = {
  producto: { ...Producto },
  Comprador: { ...Comprador },
  Pedido: { ...Pedido },
};
console.log("Fusionamos los 3 objetos a uno nuevo, sin perdida de informacion");
console.log(Venta2);
console.table(Venta2);

// vERIFICAR EL ESTATUS DE MUTABILIDAD DE LOS OBJETOS

console.log("Vamos a verificar el estatus de mutabilidad del objecto PEDIDO");
console.log("Esta el objeto de Pedido Congelado? : ", Object.isFrozen(Pedido));
console.log("Esta el objeto de Pedido Sellado? : ", Object.isSealed(Pedido));

console.log(
  "Vamos a verificar el estatus de mutabilidad del objecto COMPRADOR"
);
console.log(
  "Esta el objeto de Pedido Congelado? : ",
  Object.isFrozen(Comprador)
);
console.log("Esta el objeto de Pedido Sellado? : ", Object.isSealed(Comprador));

console.log("Vamos a verificar el estatus de mutabilidad del objecto PRODUCTO");
console.log(
  "Esta el objeto de Pedido Congelado? : ",
  Object.isFrozen(Producto)
);
console.log("Esta el objeto de Pedido Sellado? : ", Object.isSealed(Producto));

// Modificamos la estructura de producto, agregando una nueva propiedad
Producto["IsLegacy"] = false;
console.log(Producto);
console.table(Venta2);