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


if(boton.addEventListener("click",()=>{
    esCritico();
    if(golpeCritico){
        puntos+=puntosPorClick*puntosPorClickEquipamiento()*multiplicadorCritico;
    }else{
        puntos+=puntosPorClick*puntosPorClickEquipamiento();
    }
    let puntuacionClick = "Puntos: "+puntos;
    textoPuntos.textContent=`${puntuacionClick}`;
    textoPuntosTienda.textContent = `Puntos: ${puntos}`;
}));

if(botonMejora.addEventListener("click", ()=>{
    if(puntos>=precioMejora){
        puntosPorClick++;
        puntos-=precioMejora;
        precioMejora*=2
        botonMejora.textContent = `Precio: ${precioMejora}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
}));

if(botonDarkMode.addEventListener("click",()=>{
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
}));

if(botonClickPorSegundo.addEventListener("click", ()=>{
    if(puntos>=precioCps){
        puntos-=precioCps;
        precioCps*=1.5;
        puntosCPS++;
        botonClickPorSegundo.textContent = `Mejora: +1 CPS. Precio: ${precioCps}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
}));
botonCPS5.addEventListener("click",()=>{
    if(puntos>=precioCPS5){
        puntos-=precioCPS5;
        precioCPS5*=1.5;
        puntosCPS+=5;
        botonCPS5.textContent = `Mejora: +5 CPS Precio ${precioCPS5}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
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
    if(puntos>=precioPecheraEquipamientoPrecio && pecheraMejoraPiel.comprado==false){
        pecheraMejoraPiel.comprado=true;
        puntos-=precioPecheraEquipamientoPrecio;
        precioPecheraEquipamientoPrecio = pecheraMejoraHierro.precio;
        botonPecheraEquipamiento.textContent = `${pecheraMejoraHierro.nombre}. Precio: ${pecheraMejoraHierro.precio}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
    if(puntos>=precioPecheraEquipamientoPrecio && pecheraMejoraHierro.comprado==false){
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
    if(puntos>=precioCascoEquipamientoPrecio && cascoMejoraPiel.comprado==false){
        cascoMejoraPiel.comprado=true;
        puntos-=precioCascoEquipamientoPrecio;
        precioCascoEquipamientoPrecio = cascoMejoraHierro.precio;
        botonCascoEquipamiento.textContent = `${cascoMejoraHierro.nombre}. Precio: ${precioCascoEquipamientoPrecio}`;
        textoPuntos.textContent = `Puntos: ${puntos}`;
        textoPuntosTienda.textContent = `Puntos: ${puntos}`;
    }
    if(puntos>=precioCascoEquipamientoPrecio && cascoMejoraHierro.comprado==false){
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
    textoPuntos.textContent = `Puntos: ${puntos}`;
    textoPuntosTienda.textContent = `Puntos: ${puntos}`;
};
setInterval(puntosPorSegundo,1000);