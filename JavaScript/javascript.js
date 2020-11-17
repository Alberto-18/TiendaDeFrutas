// Prueba -----------------------------------------------------------------------------------------------------------------------------------
window.onload = function () {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Patata',
            precio: 1,
            imagen: 'https://source.unsplash.com/random/500x500/?potato&sig=1'
        },
        {
            id: 2,
            nombre: 'Cebolla',
            precio: 1.2,
            imagen: 'https://source.unsplash.com/random/500x500/?onion&sig=2'
        },
        {
            id: 3,
            nombre: 'Calabacin',
            precio: 2.1,
            imagen: 'https://source.unsplash.com/random/500x500/?zucchini&sig=3'
        },
        {
            id: 4,
            nombre: 'Fresas',
            precio: 0.6,
            imagen: 'https://source.unsplash.com/random/500x500/?burrs&sig=4'
        }

    ]
    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $botonVaciar = document.querySelector('#boton-vaciar');

    // Funciones
    function renderItems() {
        for (let info of baseDeDatos) {
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info['imagen']);
            // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info['precio'] + '€';
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function anyadirCarrito () {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();
    }

    function renderizarCarrito() {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Quitamos los duplicados
        let carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
            // Boton de borrar
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito() {
        console.log()
        // Obtenemos el producto ID que hay en el boton pulsado
        let id = this.getAttribute('item');
        // Borramos todos los productos
        carrito = carrito.filter(function (carritoId) {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (let item of carrito) {
            // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
        let totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        calcularTotal();
    }

    // Eventos
    $botonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderItems();
} 

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