import { alertaAdvertencia } from "./Alertas";

export function validamosCampo(texto) {
    if (texto.trim().length == 0){
        alertaAdvertencia('Ingresas Datos Erróneos')
        return "Invalido" 
    } 
}

function validar_email(email) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

export function validamosEmail(texto) {
    if (texto.trim().length == 0){
        alertaAdvertencia('Ingresas Datos Erróneos')
        return "Invalido"
    } 

    if (validar_email(texto)) {
        return
    }
    else {
        alertaAdvertencia('Ingresas Datos Erróneos')
        return "Invalido";
    }
}