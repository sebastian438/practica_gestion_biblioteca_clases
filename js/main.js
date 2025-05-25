class Libro {
    constructor(tituloLibro, autorLibro, isbnLibro, _prestado) {
        this.tituloLibro = tituloLibro;
        this.autorLibro = autorLibro;
        this.isbnLibro = isbnLibro;
        this._prestado = "Disponible";
    }

    prestar() {
        if (this._prestado == "Disponible") {
            this._prestado = "Prestado";
            return `El libro "${this.tituloLibro}" ha sido prestado`;
        } else {
            return `El libro "${this.tituloLibro}" ya está prestado`;
        }
    }

    devolver() {
        if (this._prestado = "Prestado") {
            this._prestado = "Disponible";
            return `El libro "${this.tituloLibro}" ha sido devuelto`;
        } else {
            return `El libro "${this.tituloLibro}" no estaba presatado`;
        }
    }

    getEstado() {
        return this._prestado;
    }
}

class Biblioteca {
    constructor(nombreBiblioteca, arrayLibros) {
        this.nombreBiblioteca = nombreBiblioteca;
        this.arrayLibros = [];
    }

    agregarLibro(libro) {
        return this.arrayLibros.push(libro);
    }

    buscarPorIsbn(isbn) {
        return this.arrayLibros.find((libro) => libro.isbnLibro == isbn);
    }

    prestarLibro(isbn) {
        const libroPrestado = this.arrayLibros.find((libro) => libro.isbnLibro == isbn);
        if (libroPrestado) {
            return libroPrestado.prestar();
        } else {
            return `Libro con ISBN ${isbn} no encontrado`;
        }
    }

    devolverLibro(isbn) {
        const libroDevuelto = this.arrayLibros.find((libro) => libro.isbnLibro == isbn);
        if (libroDevuelto) {
            return libroDevuelto.devolver();
        } else {
            return `Libro con ISBN ${isbn} no encontrado`;
        }
    }

    mostrarLibros() {
        console.log(`Biblioteca: ${this.nombreBiblioteca}`);
        this.arrayLibros.forEach(libro => {
            console.log(`- ${libro.tituloLibro} (${libro.autorLibro}) | Estado: ${libro.getEstado()}`);
        });
    }
}

// const biblioteca = new Biblioteca("Biblioteca Central");
// const libro01 = new Libro("1984", "George Orwell", "12345");
// const libro02 = new Libro("El Principito", "Antoine de Saint-Exupéry", "67890");
// biblioteca.agregarLibro(libro01);
// biblioteca.agregarLibro(libro02);
// console.log(biblioteca);
// biblioteca.prestarLibro("12345");
// biblioteca.mostrarLibros();



// class Libro {
//     constructor(tituloLibro, autorLibro, isbnLibro, _prestado) {
//         this.tituloLibro = tituloLibro;
//         this.autorLibro = autorLibro;
//         this.isbnLibro = isbnLibro;
//         this._prestado = "Disponible";
//     }

//     set estadoLibro(libro) {
//         return libro.this._prestado = "Prestado";
//     }

//     get estadoLibro() {
//         return this._prestado;
//     }

//     devolver() {
//         return this._prestado = "Disponible";
//     }


// }

// class Biblioteca {
//     constructor(nombreBiblioteca, arrayLibros) {
//         this.nombreBiblioteca = nombreBiblioteca;
//         this.arrayLibros = [];
//     }

//     agregarLibro(libro) {
//         return this.arrayLibros.push(libro);
//     }

//     buscarPorIsbn(isbn) {
//         return this.arrayLibros.find((libro) => libro.isbnLibro == isbn);
//     }

//     prestarLibro(isbn) {
//         const libroPrestado = this.arrayLibros.find((libro) => libro.isbnLibro == isbn);
//         return libroPrestado.estadoLibro(libroPrestado);
//     }

//     devolverLibro(isbn) {
//         const libroDevuelto = this.arrayLibros.find((libro) => libro.isbnLibro == isbn);
//         return libroDevuelto.prestar();
//     }

//     mostrarLibros() {
//         return this.arrayLibros;
//     }
// }


// const biblioteca = new Biblioteca("Biblioteca Central");
// const libro01 = new Libro("1984", "George Orwell", "12345");
// libro01.estadoLibro();
// biblioteca.agregarLibro(libro01);
// console.log(biblioteca);
// biblioteca.prestarLibro("12345");
// console.log(biblioteca.mostrarLibros());