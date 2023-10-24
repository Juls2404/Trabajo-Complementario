// Creamos la clase Artista

class Artista{
    constructor({
        nombreArtista,
        fechaSurgimiento,
        nacionalidad,
        numeroCanciones
    })
    {
       this.nombreArtista = nombreArtista,
       this.fechaSurgimiento = fechaSurgimiento,
       this.nacionalidad = nacionalidad,
       this.numeroCanciones = numeroCanciones 
    }
    get nombreArtista(){
        return this.nombreArtista
    }
    get fechaSurgimiento(){
        return this.fechaSurgimiento
    }
    get nacionalidad(){
        return this.nacionalidad
    }
    get numeroCanciones(){
        return this.numeroCanciones
    }
    crear_Artista(){

    }
} 

// Creamos el objeto Artista

const Artista1 = new Artista ({
    nombreArtista: "SIA",
    fechaSurgimiento: "1975",
    nacionalidad: "Australiana",
    numeroCanciones: "323"
})