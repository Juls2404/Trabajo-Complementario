// canciones 

// El objetivo de la sesion de hoy es crear 5 clases...

// Canción 
// - Nombre cancion
// - Fecha de lanzamiento 
// - Letra Cancion
// - Tiempo de duracion 
 

// Artista/ Banda
//- Nombre Artista/Banda
//- Fecha de nacimiento/Surgimiento de la banda
//- Nacionalidad
//- Generos musicales


// Album (Lista de canciones)
//- Nombre Album
//- Fecha de lanzamiento
//- Numero de canciones


// Genero 
//- Nombre Genero
//- Fecha de surgimiento 
//- Instrumental


// Autor
//- Nombre Autor (Autores)
//- Fecha de nacimiento del autor
//- Fecha de composicion 
//- Numero de canciones escritas

//-----------Inicio codigo-----------

// Creamos la clase Cancion

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

class Album {
    constructor({
        nombreAlbum,
        fechaLanzamiento,
        canciones = [],
        artista = {}
    })
    {
        this.nombreAlbum = nombreAlbum,
        this.fechaLanzamiento = fechaLanzamiento,
        this.canciones = canciones,
        this.artista = artista
    }
    get nombreAlbum() { 
        return this.nombreAlbum
    }
    get fechaLanzamiento (){
        return this.fechaLanzamiento
    }
    get canciones (){
        return this.canciones
    }
    get artista(){
        return this.artista
    }
    crear_Album(){

    }
}

const album1 = new Album ({
    nombreAlbum: "Flowers",
    fechaLanzamiento:"2023",
    canciones: [Cancion1],
    artista: Artista1
})

console.log (album1)