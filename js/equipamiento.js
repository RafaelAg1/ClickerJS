let puntosEquipamientoPechera = 0;
let multiplicadorBase = 1;
let puntosEquipamientoCasco = 0;
let puntosEquipamiento=0;
export const pecheraMejoraPiel = {
    nombre: "Pechera de piel",
    precio: 50,
    multiplicador: 0.25,
    comprado: false
}
export const pecheraMejoraHierro = {
    nombre: "Pechera de hierro",
    precio: 500,
    multiplicador: 0.5,
    comprado: false
}
export const cascoMejoraPiel = {
    nombre: "Casco de piel",
    precio: 250,
    multiplicador: 0.25,
    comprado: false
}
export const cascoMejoraHierro = {
    nombre: "Casco de hierro",
    precio: 2500,
    multiplicador: 0.5,
    comprado: false
}

function calcularPuntosEquipamiento(){
    if(pecheraMejoraPiel.comprado==true){
        puntosEquipamientoPechera=pecheraMejoraPiel.multiplicador;
    }
    if(pecheraMejoraHierro.comprado==true){
        puntosEquipamientoPechera=pecheraMejoraHierro.multiplicador;
    }
    if(cascoMejoraPiel.comprado==true){
        puntosEquipamientoCasco=cascoMejoraPiel.multiplicador;
    }
    if(cascoMejoraHierro.comprado==true){
        puntosEquipamientoCasco=cascoMejoraHierro.multiplicador;
    }
    return multiplicadorBase+puntosEquipamientoCasco+puntosEquipamientoPechera;
}

export function puntosPorClickEquipamiento(){
    puntosEquipamiento=calcularPuntosEquipamiento();
    return puntosEquipamiento;
}
