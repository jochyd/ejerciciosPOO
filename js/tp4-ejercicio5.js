/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), 
peso y altura, año de nacimiento. Si quieres añadir alguna propiedad 
extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a 
qué generación pertenece la persona creada y cual es el rasgo característico 
de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoDeNacimiento = anoDeNacimiento;
  }
  mostrarGeneracion() {
    if (this.anoDeNacimiento >= 1930 && this.anoDeNacimiento <= 1948) {
      document.write(
        "Perteneces a la generación: Silent Generation (los niños de la postguerra). Tu rasgo característico es: Austeridad"
      );
    } else if (this.anoDeNacimiento >= 1949 && this.anoDeNacimiento <= 1968) {
      document.write(
        "Perteneces a la generación: Baby Boom. Tu rasgo característico es: Ambición"
      );
    } else if (this.anoDeNacimiento >= 1969 && this.anoDeNacimiento <= 1980) {
      document.write(
        "Perteneces a la generación: Generación X. Tu rasgo característico es: Obsesión por el éxito"
      );
    } else if (this.anoDeNacimiento >= 1981 && this.anoDeNacimiento <= 1993) {
      document.write(
        "Perteneces a la generación: Generación Y (Milennials). Tu rasgo característico es: Frustración"
      );
    } else if (this.anoDeNacimiento >= 1994 && this.anoDeNacimiento <= 2010) {
      document.write(
        "Perteneces a la generación: Generación Z. Tu rasgo característico es: Irreverencia"
      );
    } else {
      alert("El numero ingresado todavia no esta permitido");
      document.write("<br> El numero ingresado todava no esta permitido<br>");
    }
  }
  mostrarDatos() {
    document.write(`
            <ul>
                <li>Nombre: ${this.nombre}</li>
                <li>Edad:${this.edad}</li>
                <li>DNI:${this.dni}</li>
                <li>Sexo:${this.sexo}</li>
                <li>Peso:${this.peso}</li>
                <li>Altura:${this.altura}</li>
                <li>Año de Nacimiento:${this.anoDeNacimiento}</li>
                </ul>`);
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write("<br>Es mayor de 18 años <br>");
    } else {
      document.write("<br>Es menor de edad <br>");
    }
  }
  generaDNI() {
    let dni = Math.floor(Math.random() * (50000000 - 8000000 + 1) + 8000000);
    document.write("<br> El DNI es :" + dni + "<br>");
  }
}

let juan = new Persona(
  "Juan",
  "30",
  "37.812.344",
  "M",
  "60kg",
  "1,87mt",
  "1992"
);
let jose = new Persona(
  "jose",
  "38",
  "30.765.987",
  "M",
  "87kg",
  "1,60mt",
  "1985"
);
let luciana = new Persona(
  "Luciana",
  "30",
  "37.583.612",
  "F",
  "45kg",
  "1,66mt",
  "1992"
);
let miguel = new Persona(
  "Miguel",
  "65",
  "11.223.665",
  "M",
  "75kg",
  "1,96mt",
  "1955"
);
let pilar = new Persona(
  "Miguel",
  "13",
  "55.059.433",
  "F",
  "30kg",
  "1,30mt",
  "2013"
);

juan.mostrarGeneracion();
juan.mostrarDatos();
juan.esMayorDeEdad();
juan.generaDNI();

jose.mostrarGeneracion();
jose.mostrarDatos();
jose.esMayorDeEdad();
jose.generaDNI();

luciana.mostrarGeneracion();
luciana.mostrarDatos();
luciana.esMayorDeEdad();
luciana.generaDNI();

miguel.mostrarGeneracion();
miguel.mostrarDatos();
miguel.esMayorDeEdad();
miguel.generaDNI();

pilar.mostrarGeneracion();
pilar.mostrarDatos();
pilar.esMayorDeEdad();
