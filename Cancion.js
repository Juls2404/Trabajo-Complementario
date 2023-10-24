class Cancion {
    constructor({
        nombreCancion,
        fechaLanzamiento,
        tiempoDuracion,
    })

    {
        this.nombreCancion = nombreCancion,
        this.fechaLanzamiento = fechaLanzamiento,
        this.tiempoDuracion = tiempoDuracion 
    }

    get nombreCancion() { 
        return this.nombreCancion
    }
    get fechaLanzamiento(){
        return this.fechaLanzamiento
    }
    get tiempoDuracion() {
        return this.tiempoDuracion
    }
    crear_Cancion() {
    }
}

// Creamos el objeto Cancion1

const Cancion1= new Cancion ({
    nombreCancion: "Cheap Thrills", 
    fechaLanzamiento: "10/06/2016",
    tiempoDuracion: "3:38 minutos",

})
