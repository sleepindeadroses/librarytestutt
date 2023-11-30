class Libro {
    constructor(titulo, autor, isbn, cantidadDisponible) {
      this.titulo = titulo;
      this.autor = autor;
      this.isbn = isbn;
      this.cantidadDisponible = cantidadDisponible;
      this.cantidadInicial = cantidadDisponible;
    }

    prestar() {
      if (this.cantidadDisponible > 0) {
        this.cantidadDisponible--;
        console.log(`Se ha prestado el libro ${this.titulo}`);
      } else {
        console.log(`No se puede prestar el libro ${this.titulo}, no hay existencias`);
      }
    }

    devolver() {
      this.cantidadDisponible++;
      console.log(`Se ha devuelto el libro ${this.titulo}`);
    }

    informacionLibro() {
      console.log(
        `Titulo: ${this.titulo}, 
        Autor: ${this.autor}, 
        ISBN: ${this.isbn},
        Cantidad inicial de libros: ${this.cantidadInicial}
        Cantidad de libros disponibles: ${this.cantidadDisponible});`
      );
    }
}

class Biblioteca {
    constructor() {
      this.libros = [];
    }

    agregarLibro(libro) {
      this.libros.push(libro);
      console.log(`Se ha agregado el libro ${libro.titulo} a la biblioteca`);
    }

    prestarLibro(isbn) {
      const libroEncontrado = this.libros.find(libro => libro.isbn === isbn);
      if (libroEncontrado) {
        console.log("Libro encontrado");
        libroEncontrado.prestar();
      } else {
        console.log("Libro no encontrado");
      }
    }

    devolverLibro(isbn) {
      const libroEncontrado = this.libros.find(libro => libro.isbn === isbn);
      if (libroEncontrado && libroEncontrado.cantidadInicial > libroEncontrado.cantidadDisponible) {
        console.log(`Libro encontrado`);
        libroEncontrado.devolver();
      } else {
        console.log("Libro no encontrado o no se ha prestado antes");
      }
    }

    mostrarInventario() {
      this.libros.forEach(libro => libro.informacionLibro());
    }
}

const biblioteca = new Biblioteca();

const lb1 = new Libro("El señor de los anillos", "J.R.R. Tolkien", "1234", 5);
const lb2 = new Libro("El hobbit", "J.R.R. Tolkien", "5678", 3);
const lb3 = new Libro("El silmarillion", "J.R.R. Tolkien", "6969", 1);
const lb4 = new Libro("El arte de la guerra", "Sun Tzu", "1010", 0);

biblioteca.agregarLibro(lb1);
biblioteca.agregarLibro(lb2);
biblioteca.agregarLibro(lb3);
biblioteca.agregarLibro(lb4);

biblioteca.mostrarInventario();

biblioteca.prestarLibro("1234");

biblioteca.devolverLibro("5678");

biblioteca.prestarLibro("6969");
biblioteca.devolverLibro("6969");

biblioteca.prestarLibro("1010");

biblioteca.mostrarInventario();