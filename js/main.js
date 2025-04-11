import { puntosPorClickEquipamiento } from './equipamiento.js';
import { pecheraMejoraPiel } from './equipamiento.js';
import { pecheraMejoraHierro } from './equipamiento.js';
import { cascoMejoraPiel } from './equipamiento.js';
import { cascoMejoraHierro } from './equipamiento.js';

const boton = document.getElementById("botonClick");
const textoPuntos = document.getElementById("puntuacionClick");
const botonMejora = document.getElementById("botonMejora");
const botonDarkMode = document.getElementById("modoNocheBoton");
const imagenLunaSol = document.getElementById("imagenLunaSol");
const DarkModeImages = ["img/darkmode/darkmodeluna.png","img/darkmode/darkmodesol.png"]
const botonClickPorSegundo = document.getElementById("botonMejora2x");
const tiendaDiv = document.getElementById("tiendaDiv");
const abrirTienda = document.getElementById("botonClickTienda");
const cerrarTienda = document.getElementById("cerrarTienda");
const textoPuntosTienda = document.getElementById("puntosTienda");
const botonCPS5 = document.getElementById("botonCPS5");
const botonPecheraEquipamiento = document.getElementById("pecheraEquipamiento");
const botonCascoEquipamiento = document.getElementById("cascoEquipamiento");

//Estadisticas
const puntosPorClickEstadisticas = document.getElementById("puntosPorClick");
const puntosPorSegundoEstadisticas = document.getElementById("puntosPorSegundo");
const multiplicadorClicksEstadisticas = document.getElementById("multiplicadorClicks");
const probabilidadCriticoEstadisticas = document.getElementById("probabilidadCritico");
const multiplicadorCriticoEstadisticas = document.getElementById("multiplicadorCritico");



let golpeCritico = false;
let probabilidadCritico = 5; //5%
let multiplicadorCritico = 2; //2x
let puntos=0;
let puntosPorClick = 1;
let precioMejora=10;
let precioCps = 50;
let puntosCPS=0;
let precioCPS5 = 500;
let precioPecheraEquipamientoPrecio = pecheraMejoraPiel.precio;
let precioCascoEquipamientoPrecio = cascoMejoraPiel.precio;

botonClickPorSegundo.textContent = `Mejora: +1 CPS. \nPrecio: ${precioCps}`;
botonMejora.textContent = `Precio: ${precioMejora}`;
textoPuntos.textContent = `Puntos: ${puntos}`;
textoPuntosTienda.textContent = `Puntos: ${puntos}`;
botonCPS5.textContent = `Mejora: +5 CPS Precio ${precioCPS5}`;
botonPecheraEquipamiento.textContent = `${pecheraMejoraPiel.nombre}. Precio: ${precioPecheraEquipamientoPrecio}`;
botonCascoEquipamiento.textContent = `${cascoMejoraPiel.nombre}. Precio: ${precioCascoEquipamientoPrecio}`;


boton.addEventListener("click",()=>{
    esCritico();
    if(golpeCritico){
        puntos+=puntosPorClick*puntosPorClickEquipamiento()*multiplicadorCritico;
    }else{
        puntos+=puntosPorClick*puntosPorClickEquipamiento();
    }
    let puntuacionClick = "Puntos: "+puntos;
    textoPuntos.textContent=`${puntuacionClick}`;
    textoPuntosTienda.textContent = `Puntos: ${puntos}`;
});

botonMejora.addEventListener("click", ()=>{
    if(puntos>=precioMejora){
        puntosPorClick++;
        puntos-=precioMejora;
        precioMejora=Math.floor(precioMejora*1.3);
        botonMejora.textContent = `Precio: ${precioMejora}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
});

botonDarkMode.addEventListener("click",()=>{
    if(document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor="rgb(40,40,40)";
        document.body.style.color="white";
        imagenLunaSol.setAttribute("src",`${DarkModeImages[1]}`)
    }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        imagenLunaSol.setAttribute("src",`${DarkModeImages[0]}`)
    }
    botonDarkMode.style.color="white";
});

botonClickPorSegundo.addEventListener("click", ()=>{
    if(puntos>=precioCps){
        puntos-=precioCps;
        precioCps=Math.floor(precioCps*1.3);
        puntosCPS++;
        botonClickPorSegundo.textContent = `Mejora: +1 CPS. Precio: ${precioCps}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
});
botonCPS5.addEventListener("click",()=>{
    if(puntos>=precioCPS5){
        puntos-=precioCPS5;
        precioCPS5=Math.floor(precioCPS5*1.3);
        puntosCPS+=5;
        botonCPS5.textContent = `Mejora: +5 CPS Precio ${precioCPS5}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }<<
});
abrirTienda.addEventListener("click",()=>{
    tiendaDiv.style.display="flex";
});
cerrarTienda.addEventListener("click",()=>{
    tiendaDiv.style.display="none";
});

//EQUIPAMIENTO

//pechera
botonPecheraEquipamiento.addEventListener("click",()=>{
    if(puntos>=precioPecheraEquipamientoPrecio && !pecheraMejoraPiel.comprado){
        pecheraMejoraPiel.comprado=true;
        puntos-=precioPecheraEquipamientoPrecio;
        precioPecheraEquipamientoPrecio = pecheraMejoraHierro.precio;
        botonPecheraEquipamiento.textContent = `${pecheraMejoraHierro.nombre}. Precio: ${pecheraMejoraHierro.precio}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
    if(puntos>=precioPecheraEquipamientoPrecio && !pecheraMejoraHierro.comprado){
        pecheraMejoraHierro.comprado=true;
        puntos-=precioPecheraEquipamientoPrecio;
        precioPecheraEquipamientoPrecio = pecheraMejoraHierro.precio;
        botonPecheraEquipamiento.textContent = `${pecheraMejoraHierro.nombre}. Comprado`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
});

//casco
botonCascoEquipamiento.addEventListener("click",()=>{
    if(puntos>=precioCascoEquipamientoPrecio && !cascoMejoraPiel.comprado){
        cascoMejoraPiel.comprado=true;
        puntos-=precioCascoEquipamientoPrecio;
        precioCascoEquipamientoPrecio = cascoMejoraHierro.precio;
        botonCascoEquipamiento.textContent = `${cascoMejoraHierro.nombre}. Precio: ${precioCascoEquipamientoPrecio}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
    if(puntos>=precioCascoEquipamientoPrecio && !cascoMejoraHierro.comprado){
        cascoMejoraHierro.comprado=true;
        puntos-=precioCascoEquipamientoPrecio;
        precioCascoEquipamientoPrecio = cascoMejoraHierro.precio;
        botonCascoEquipamiento.textContent = `${cascoMejoraHierro.nombre}. Comprado`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
});

function esCritico(){
    let numRandom = Math.floor(Math.random() * 101); //0 a 100
    if(numRandom<probabilidadCritico){
        golpeCritico = true;
    }else{
        golpeCritico=false;
    }
    return golpeCritico;
}
function puntosPorSegundo(){
    puntos+=puntosCPS*puntosPorClickEquipamiento();
    puntosPorSegundoEstadisticas.textContent = `Puntos por segundo: ${puntosCPS}`;
    textoPuntos.textContent = `Puntos: ${puntos}`;
    textoPuntosTienda.textContent = `Puntos: ${puntos}`;
};

function actualizarEstadisticas(){
    puntosPorClickEstadisticas.textContent = `Puntos por click: ${puntosPorClick}`;
    puntosPorSegundoEstadisticas.textContent = `Puntos por segundo: ${puntosCPS}`;
    multiplicadorClicksEstadisticas.textContent = `Multiplicador de clicks: ${puntosPorClickEquipamiento()}x`;
    probabilidadCriticoEstadisticas.textContent = `Probabilidad critico: ${probabilidadCritico}%`;
    multiplicadorCriticoEstadisticas.textContent = `Multiplicador critico ${multiplicadorCritico}x`;
};

setInterval(puntosPorSegundo,1000);
setInterval(actualizarEstadisticas,1000);