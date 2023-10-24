const nombre = document.getElementById("nombre");
const fecha_Lanzamiento = document.getElementById("fecha_Lanzamiento");
const canciones = document.getElementById("canciones");
const artista = document.getElementById("artista");

class Album {
    constructor({
        nombreAlbum,
        fechaLanzamiento,
        canciones,
        artista 
    })
    {
        this.nombreAlbum = nombreAlbum
        this.fechaLanzamiento = fechaLanzamiento,
        this.canciones = canciones,
        this.artista = artista
    }
    get nombreAlbum() { 
        return this.nombre
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

const boton = document.getElementById("button")

boton.addEventListener("click", () =>{

    const album1 = new Album ({
        nombreAlbum: nombre ,
        fechaLanzamiento:fecha_Lanzamiento,
        canciones: canciones,
        artista: artista
    })
    
    console.log (album1)
})



