// Creamos la clase Autor

class Autor{
    constructor({
        nombreAutor,
        fechaNacimientoA,
        numeroCanciones,
    })

    {
        this.nombreAutor = nombreAutor,
        this.fechaNacimientoA = fechaNacimientoA,
        this.numeroCanciones = numeroCanciones
    }

    get nombreAutor (){
        return this.nombreAutor
    }
    get fechaNacimientoA (){
        return this.fechaNacimientoA
    }
    get numeroCanciones (){
        return this.numeroCanciones
    }
    crear_Autor(){
    }
}

// Creamos el objeto Autor1

const Autor1 = new Autor({
    nombreAutor: "Sia",
    fechaNacimientoA: "18 Diciembre 1975",
    numeroCanciones: "200"
})
