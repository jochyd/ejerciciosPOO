/*Escribe una clase que permita crear distintos 
objetos “rectángulos”, con las propiedades de alto y
 ancho, mas los métodos necesarios para modificar y 
 mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
  constructor(altoRectangulo, anchoRectangulo) {
    this.alto = altoRectangulo;
    this.ancho = anchoRectangulo;
  }
  calcularArea() {
    return this.ancho * this.alto;
  }
  calcPerimetro() {
    return 2 * (this.alto * this.ancho);
  }
}

let rectangulo = new Rectangulo(50,40);

document.write(rectangulo.calcularArea());
document.write('<br>'+rectangulo.calcPerimetro());
