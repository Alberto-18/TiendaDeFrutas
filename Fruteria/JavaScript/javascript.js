// Prueba -----------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------
var cantidadFruta = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var precioFruta = new Array(1.1, 1.2 , 1.3, 1.4 ,1.5, 1.6, 1.7, 1.8, 1.9, 1.99);
var nombreFruta = new Array("Pera","Manzana", "Uva", "Melocoton", "Sandia", "Melón", "Platanos", "Kiwi", "Fresa", "Naranja" );

var precioTotal = 0;
var precioMedio = 0;


class Fruta{
    constructor(kilos, precio, nombre){
        this.kilos = kilos;
        this.precio = precio;
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    getKilos(){
        return this.kilos;
    }

    getPrecio(){
        return this.precio;
    }
                    º
    sumarKilos(kilos){
        this.kilos += kilos;
    }

}


class FrutaVerano extends Fruta{
    constructor(kilos, precio, nombre, region){
        super(kilos, precio, nombre);
        this.region = region;

    }
    getProximidad(){
        return this.proximidad;

    }

}


//"Pera","Manzana", "Uva", "Melocoton", "Sandia", "Melón", "Platanos", "Kiwi", "Fresa", "Naranja"
let Pera = new FrutasInvierno(0,1.1,"Pera","no conservar en nevera");
let Manzana = new FrutasInvierno(0,1.2,"Manzana","no conservar en nevera");
let Uva = new FrutasInvierno(0,1.3,"Uva","no conservar en nevera");
let Melocoton = new FrutasInvierno(0,1.4,"Melocoton","no conservar en never");
let Sandia = new FrutasInvierno(0,1.5,"Sandia","no conservar en nevera");
let Melón = new FrutasVerano(0,1.6,"Melón"," conservar en nevera");
let Platanos = new FrutasVerano(0,1.7,"Platanos","de proximidad","Extremadura");
let Kiwi = new FrutasVerano(0,1.8,"Kiwi","de proximidad","Andalucía");
let Fresa = new FrutasVerano(0,1.9,"Fresa","de proximidad","Pais Vasco");
let Naranja = new FrutasVerano(0,1.99,"Naranja","de proximidad","Andalucía");


function compra(frutas){
    let derecha = document.getElementById("parteDerecha");
    let texto = document.createTextNode("Se han añadido " + kilos + " kilos de " + frutas + "\n");
    parrafo.appendChild(texto);


    switch(frutas){
        case Pera.getNombre():
            Pera.sumarKilos(kilos);
            break;

        case Manzana.getNombre():
            Manzana.sumarKilos(kilos);
            break;

        case Uva.getNombre():
            Uva.sumarKilos(kilos);
            break;

        case Melocoton.getNombre():
            Melocoton.sumarKilos(kilos);
            break;

        case Sandia.getNombre():
            Sandia.sumarKilos(kilos);
            break;

        case Melón.getNombre():
            Melón.sumarKilos(kilos);
            break;

        case Platanos.getNombre():
            Platanos.sumarKilos(kilos);
            break;

        case Kiwi.getNombre():
            Kiwi.sumarKilos(kilos);
            break;

        case Fresa.getNombre():
            Fresa.sumarKilos(kilos);
            break;

        case Naranja.getNombre():
            Naranja.sumarKilos(kilos);
            break;

    }
    
    
}


function funcion(Fruta){
    let fecha = new Date();
    document.getElementById("cajaTexto").value = "Fecha de compra: " + fecha.toString() + "\n";

    //"Pera","Manzana", "Uva", "Melocoton", "Sandia", "Melón", "Platanos", "Kiwi", "Fresa", "Naranja"
    document.getElementById("cajaTexto").value += Pera.getNombre() + " - " + Pera.getKilos() + " --- " + Pera.getPrecio() + " --- " + Pera.getPrecio()*Pera.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Manzana.getNombre() + " ---- " + Manzana.getKilos() + " --- " + Manzana.getPrecio() + " --- " + Manzana.getPrecio()*Manzana.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Uva.getNombre() + " ---- " + Uva.getKilos() + " --- " + Uva.getPrecio() + " --- " + Uva.getPrecio()*Uva.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Melocoton.getNombre() + " ---- " + Melocoton.getKilos() + " --- " + Melocoton.getPrecio() + " --- " + Melocoton.getPrecio()*Melocoton.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Sandia.getNombre() + " ---- " + Sandia.getKilos() + " --- " + Sandia.getPrecio() + " --- " + Sandia.getPrecio()*Sandia.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Melón.getNombre() + " ---- " + Melón.getKilos() + " --- " + Melón.getPrecio() + " --- " + Melón.getPrecio()*Melón.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Platanos.getNombre() + " ---- " + Platanos.getKilos() + " --- " + Platanos.getPrecio() + " --- " + Platanos.getPrecio()*Platanos.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Kiwi.getNombre() + " ---- " + Kiwi.getKilos() + " --- " + Kiwi.getPrecio() + " --- " + Kiwi.FresagetPrecio()*Kiwi.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Fresa.getNombre() + " ---- " + Fresa.getKilos() + " --- " + Fresa.getPrecio() + " --- " + Fresa.getPrecio()*Fresa.getKilos() + "\n";
    document.getElementById("cajaTexto").value += Naranja.getNombre() + " ---- " + Naranja.getKilos() + " --- " + Naranja.getPrecio() + " --- " + Naranja.getPrecio()*Naranja.getKilos() + "\n";

    var precioTotal = 0;
    var precioMedio = 0;
    var contador = 0;

    //"Pera","Manzana", "Uva", "Melocoton", "Sandia", "Melón", "Platanos", "Kiwi", "Fresa", "Naranja"
    if(Pera.getKilos() != 0){
        texto += Manzana.getNombre() + " Fruta de Invernal " + Pera.getConservar();
        precioTotal += Pera.getKilos()*Pera.getPrecio();
        contador++;
    }

    if(Manzana.getKilos() != 0){
        texto += Manzana.getNombre() + " Fruta de Invernal " + Manzana.getProximidad();
        precioTotal += Manzana.getKilos()*Manzana.getPrecio();
        contador++;


    }

    if(Uva.getKilos() != 0){
        texto += Uva.getNombre() + " Fruta de Invernal " + Uva.getConservar() ;
        precioTotal += Uva.getKilos()*Uva.getPrecio();
        contador++;
    }

    if(Melocoton.getKilos() != 0){
        texto += Melocoton.getNombre() + " Fruta de Invernal " + Melocoton.getProximidad() ;
        precioTotal += Melocoton.getKilos()*Melocoton.getPrecio();
        contador++;
    }

    if(Sandia.getKilos() != 0){
        texto += Sandia.getNombre() + "  Fruta de Invernal  " + Sandia.getConservar() ;
        precioTotal += Sandia.getKilos()*Sandia.getPrecio();
        contador++;
    }

    if(Melón.getKilos() != 0){
        texto += Melón.getNombre() + "Fruta de Verano  " + Melón.getProximidad();
        precioTotal += Melón.getKilos()*Melón.getPrecio();
        contador++;
    }

    if(Platanos.getKilos() != 0){
        texto += Platanos.getNombre() + "Fruta de Verano  " + Platanos.getProximidad() ;
        precioTotal += Platanos.getKilos()*Platanos.getPrecio();
        contador++;
    }

    if(Kiwi.getKilos() != 0){
        texto += Kiwi.getNombre() + " Fruta de Verano  " + Kiwi.getConservar() ;
        precioTotal += Kiwi.getKilos()*Kiwi.getPrecio();
        contador++;
    }

    if(Fresa.getKilos() != 0){
        texto += Fresa.getNombre() + "Fruta de Verano  " + Fresa.getProximidad() ;
        precioTotal += Fresa.getKilos()*Fresa.getPrecio();
        contador++;
    }

    if(Naranja.getKilos() != 0){
        texto += Naranja.getNombre() + "Fruta de Verano  " + Naranja.getConservar() ;
        precioTotal += Naranja.getKilos()*Naranja.getPrecio();
        contador++;
    }

}
