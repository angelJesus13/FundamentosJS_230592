const bg= "linear-gradient(11deg, rgba(2,3,12,1) 0%, rgba(9,1,10,1) 33%, rgba(0,212,25,1) 86%)";

const style_console= `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola

console.warn("Práctica 05: Repaso de Objetos en JavaScript");

//Variables independientes
console.log("%c1.- Variables independientes", style_console);


//Declaramos valores independientes relacionadas a un PRODUCTO

let Producto_Nombre= "Refrigerador\"";
let Producto_Marca= "Samsung";
let Producto_Modelo= "Duplex 22";
let Producto_Precio= 48699.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("SAMG707VV-HX221W");
let Producto_Stock=15;
let Producto_Imagen=null;
let Producto_Barcode;
let Producto_Categorias=["Electrónicos", "Hogar", "Promociones Buen Fin", "Mejor Valorados"];


//accedemos a los valores actuales de las características del producto de manera independiente 

console.log(`Los datos del PRODUCTO son: \n Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}> 
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorías: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);
    
    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    //ahora la declaramos como un objeto
console.log("%c2.- Objeto", style_console)

let Producto=
{
    Nombre: "Shorts Deportivos",
    Marca: "Nike",
    Modelo: "Sport'24",
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "AF5415-612",
    Imagen: "../assets/imagenes-2.jpeg",
    Barcode: null,
    Categorias: ["Deportes", "Tenis", "Juvenil"]
}

//Ahora leemos el objeto completo

console.table(Producto);

//Para acceder a las propiedades del objeto utilizamos un "," y el nombre de la propiedad a leer.

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)

if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto.Stock} unidades disponibles.`)



//Desestructuración de objetos.
console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2=
{
    Clave: 316,
    Nombre: "Lentes para Sol",
    Marca: "Oakley",
    Modelo: "QNTM Kato",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "009481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRe.png",
    Barcode: 888392491626 ,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}

let Comprador={
    Clave: 3216,
    Nombre: "Angel",
    Apellidos: "Tellez",
    Tipo: "Fugaz",
    Correo: "angel1@licuados.com",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido={
    Producto_Id: 316,
    Comprador_clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de compra",
    TipoPago: "Tarjeta de Debito"
}

//En base a los 3 objetos necesitamos calcular el producto el costo y si le alcanza con su saldo a favor

//En base de a los 3 objetos necesitamos calcular el costo de la compra y si nos alcanza a favor del cliente
let{Precio: Producto_Precio2}=Producto2; 
let{Cantidad: Pedido_Cantidad}= Pedido;
let{SaldoActual: Cliente_SaldoActual}= Comprador;
let Costo_Compra= Producto_Precio2*Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: $${(Costo_Compra)}`)

if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")



//console.warn("Práctica 05: Repaso de Objetos en JavaScript");
//Actualizar el valor de los objetos
console.log("%c4.- Actualización de los valores de las propiedades de un objeto", style_console);

console.log(`El objeto tiene los siguientes valores:`)
console.log(JSON.stringify(Producto2,null,2));
//convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)

//Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad
Producto2.Precio=6915.50;
console.log(`Los nuevos valores del Producto son:`)
console.log(Producto2);

// ¿Puedo cambiar no solo el valor sino el tipo de dato de un objeto en JS?



console.log(`-----------------------------------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
var tipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2,null,2)); //Disponibilidad Boolean
Producto2.Disponibilidad="Sí";
let nuevoTipoDisponible= typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El tipo de dato de la disponibilidad es: ${nuevoTipoDisponible}`)

// agregamos nuevas propiedades a un objeto existente

console.log("%c5.- Agregación y/o actualización de las propiedades de un objeto: (Mutacion)", style_console);
// objeto antes de ser modificado
console.log("objeto antes de ser modificado")
console.table(Comprador)

//agregando propiedades
Comprador[`Direccion`] = "AV. 05 de Junio #47, Huachinango, Puebla, México"
Comprador [`Tipo`]= "Gold"
Comprador [`Estatus`] = "Inactivo"
Comprador [`Saldo`] = "473.99"
console.log("Objetos despues de ser modificado: ")
//El objeto fue modificado con valores nuevos y su estructura inicial que tenia antes
console.table(Comprador)
//Eliminacion de las propiedades de un objeto
console.log("%c6.- Eliminacion de prpiedades de un objeto (Mutacion)", style_console);

console.log("objeto antes de ser modificado")
console.table(Pedido)
//Eliminamos la propiedad de tipo de pago
console.log("Objeto modificado con la propiedad eliminada de tipo de pago");
delete Pedido [`TipoPago`];
console.table(Pedido);

console.log("%c7.- Métodos para controlar la mutabilidad de los Objetos, congelación (Freeze)", style_console);

// De esta manera logramos que los objetos no sean modificados ni en estructura, ni en valor. Utilizaremos el método freeze (congelar), lo que nos ayudará a que no sea modificado.
console.log(`La estructura actual del objeto Comprador es:`);
console.table(Comprador);

// Aplicamos el método freeze correctamente
Object.freeze(Comprador);

// Intentamos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "05/09/2024 10:35:40"; // No funcionará
delete Comprador.Tipo; // No funcionará
Comprador.Direccion = "Calle Adolfo Prieto #102, Col. Manantial, Ciudad de México, México"; // No funcionará

console.log(`Verificamos si se realizaron los cambios en el objeto Comprador: `);
console.table(Comprador);

console.log("%c8.- Metodos para controlar la mutabilidad de los objetos, sellado (SEAL)", style_console);
//Sin embargo, en el caso que deseamos poder codificar los valores del objeto de las propiedades del objeto, pero no su estructura , usaremos el SEAL 
//seal sellamos el objeto, este de manera que los valores del objeto a sellar puedan ser modificados pero no su estructura
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido[`FechaPedido`] = "25/09/34 10:43:33"
delete Pedido [`Cantidad`]
console.log (`Verificamos si se realizaron los cambios en el objeto PEDIDO`)
console.table(Pedido)

//intentamos modificar la cantidad de nuestro producto
Pedido.Cantidad = 5
console.log (`Verificamos si se realizaron los cambios en el objeto PEDIDO`)
console.table(Pedido)
//Destructuracion de 2 o más objetos
// Desestructuración de 2 o más objetos
console.log("%c9.- Desestructuración de 2 o más objetos", style_console);

const { Precio: productoPrecio, SKU: productoSKU, Marca: productoMarca } = Producto;
const { Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo } = Comprador;

// Transformar valores cuantitativos en cualitativos sin modificar las constantes
let precioClasificado = productoPrecio > 2000 ? "Caro" : "Barato";
let saldoClasificado = clienteSaldo > 0 ? "a favor" : clienteSaldo < 0 ? "en contra" : "sin deuda";

// Transformar valores cualitativos en cuantitativos
let clienteNivel = 0;
if (clienteTipo.toLowerCase() === "gold") clienteNivel = 1;
else if (clienteTipo.toLowerCase() === "freemium") clienteNivel = 2;
else clienteNivel = 3; // Caso "No identificado"

// Clasificamos al cliente por su país de origen
let clasificacionPais = clientePais === "México" ? "Cliente Nacional" : "Extranjero";

// Object Literal Enhancement para combinar los datos de manera más eficiente
let datosClientePromociones = {
  clienteCorreo,
  clientePais: clasificacionPais,
  clienteNivel,
  productoMarca,
  productoPrecio: precioClasificado,
  clienteSaldo: saldoClasificado
};

console.log("Los datos del cliente y sus hábitos de compra son:");
console.table(datosClientePromociones);
