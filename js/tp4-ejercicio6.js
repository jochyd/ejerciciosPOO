/*6- Crear una clase Libro que contenga al menos
 las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para
cada propiedad. Crear el método mostrarLibro() para mostrar
la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
  constructor(isbn, titulo, autor, numeroPaginas){
    this._codigo = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._numeroPaginas = numeroPaginas;
  }
  get isbn(){
    return this._codigo;
  }
  get titulo(){
    return this._titulo;
  }
  get autor(){
    return this._autor;
  }
  get numeroPaginas(){
    return this._numeroPaginas;
  }
  set isbn(cod){
    this._codigo = cod;
  }
  set titulo(tit){
    this._titulo = tit;
  }
  set autor(aut){
    this._autor = aut;
  }
  set numeroPaginas(numero){
    this._codigo = numero;
  }
  mostrarLibro(){
    document.write(`<br>El libro ${this.titulo} con ISBN (${this.codigo}) creado por el autor ${this.autor} tiene páginas ${this.numeroPaginas}.<br>`)
  }
  masPaginas(){
    if
  }
}

let libro1 = new Libro(
    isbn = 1234567891011,
    titulo = 'Harry Potter',
    autor = 'J.K.R',
    numeroPaginas = 872,
);

libro1.codigo = 1234567891011;
libro1.titulo = 'Harry Potter';
libro1.autor = 'J.K.R';
libro1.numeroPaginas = 872;

libro1.mostrarLibro();

let libro2 = new Libro(
    isbn = 9826472635789,
    titulo = 'El Señor de los Anillos',
    autor = 'J.K.T',
    numeroPaginas = 1272,
);

let pagina1 = 872;
let pagina2 = 1272;

libro2.codigo = 9826472635789;
libro2.titulo = 'El Señor de los Anillos';
libro2.autor = 'J.K.T';
libro2.numeroPaginas = 1272;

libro2.mostrarLibro();
