
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
  set modificarIsbn(nuevoIsbn){
    this._codigo = nuevoIsbn;
  }
  set modificarTitulo(nuevoTitulo){
    this._titulo = nuevoTitulo;
  }
  set modificarAutor(nuevoAutor){
    this._autor = nuevoAutor;
  }
  set modificarNumPaginas(nuevoNumPaginas){
    this._numeroPaginas = nuevoNumPaginas;
  }
  get nuevoIsbn(){
    return this._codigo;
  }
  get nuevoTitulo(){
    return this._titulo;
  }
  get nuevoAutor(){
    return this._autor;
  }
  get nuevoNumPaginas(){
    return this._numeroPaginas;
  }

  mostrarLibro(){
    document.write(`<br>El libro ${this._titulo} con ISBN (${this._codigo}) creado por el autor ${this._autor} tiene páginas ${this._numeroPaginas}.<br>`)
  }

}


let libro1 = new Libro(1234567891011,'Harry Potter', 'J.K.R',872);
console.log(libro1);
libro1.mostrarLibro();
let libro2 = new Libro(1242314145, 'El señor de los Anillos', 'J.K.T', 1412);