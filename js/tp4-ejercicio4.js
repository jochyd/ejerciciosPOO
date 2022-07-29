/*4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, 
nombre y precio, además del método imprime datos,
 el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y 
guárdalas en un array.
Por último, utilice el método imprime datos para
 mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto{
    constructor(codigo, nombre, precio){
        this.codigoProducto = codigo;
        this.nombreProducto = nombre;
        this.precioProducto = precio;
    }
    imprimirDatos(){
        document.write(`
        <ul>
            <li>Codigo: ${this.codigoProducto}</li>
            <li>Nombre: ${this.nombreProducto}</li>
            <li>Precio: ${this.precioProducto}</li>
            </ul>`);
    }
}

let celular = new Producto('6654246', 'Xiaomi', '$129000');
let televisor = new Producto('2274546', 'LG', '$117230');
let notebook = new Producto('88376', 'MacBook Air', '$144000');

let productos = [celular, televisor, notebook];

console.log(celular);
console.log(televisor);
console.log(notebook);

celular.imprimirDatos();
televisor.imprimirDatos();
notebook.imprimirDatos();

