/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

let contacto ={
    nombre: '',
    apellido: '',
    telefono:'',
    ingresar(ingresarDatos){
        this.nombre = prompt('ingrese un nombre');
        ingresarDatos = this.nombre;
        
    }
}

contacto.ingresar();




// class Agenda {

//     constructor(nombre, apellido, telefono){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.telefono = telefono;
        
//     }
//     agregarContacto(){
    
//     }
//     existeContacto(){

//     }
//     listaContacto(){

//     }
//     buscarContacto(){

//     }
//     eliminarContacto(){
        
//     }
//     agendaLlena(){

//     }
//     huecosLibres(){
        
//     }
// }




// let contacto1 = new Contacto ('Vicky','Palacio', 12341234);

// let contacto2 = new Contacto ('Eliseo','Espindola', 123852234);

// let contacto3 = new Contacto ('Josefina', 'Daoua', 123495733);

// let contacto4 = new Contacto ();
// contacto4.agregarContacto('pepe');

// console.log(contacto4);

