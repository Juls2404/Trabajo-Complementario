// Creamos la clase genero.

class Genero {
    constructor({
    nombreGenero,
    fechaSurgimiento ,
    instrumental,
})
{
    this.nombreGenero = nombreGenero,
    this.fechaLanzamiento = fechaSurgimiento 
    this.instrumental = instrumental
}

get nombreGenero(){
    return this.nombreGenero
}
get fechaSurgimiento(){
    return this.fechaSurgimiento 
}
get instrumental(){
    return this.instrumental
}
crear_Genero(){
}

}

//Creamos el objeto Genero1

const Genero1 = new Genero({
    nombreGenero: "pop",
    fechaSurgimiento :"1950",
    instrumental: "Voz, guitarra, bajo, batería, guitarra eléctrica, teclado, sintetizador, caja de ritmos, secuenciador, sampler, percusión"
})