const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*
    ESTO ES COMO LO RESOLVIO LA PROFESORA DE ALURA LATAM
    https://www.youtube.com/watch?v=DVjp-TJihAM&t=1148s  
    https://www.youtube.com/watch?v=DVjp-TJihAM
    fijarse que link es el correcto
    VOY A SEGUIR SUS PASOS PORQUE DESENCRIPTAR NO SABIA COMO HACERLO
    Y SU FORMA DE RESOLVERLO ME GUSTO MAS, LO VI MAS PROFESIONAL
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"],]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"],]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    //alert("Texto Copiado")
}












/*

// TODO ESTO FUE LO QUEHABIA EMPEZADO A HACER

function EncriptarTexto(texto){
    
    let encriptado = "";

    for(let i=0; i<texto.length; i++){

        let letra = texto[i];
        switch(letra){
            case "a": encriptado += "ai";
                break;
            case "e": encriptado += "enter";
                break;
            case "i": encriptado += "imes";
                break;
            case "o": encriptado += "ober";
                break;
            case "u": encriptado += "ufat";
                break;
            default: encriptado += texto[i];
                break;
        }
    }
    return encriptado;
}


function DesencriptarTexto(texto){
    
    let encriptado = "";

    for(let i=0; i<texto.length; i++){

        let letra = texto[i];
        switch(letra){
            case "a": encriptado += "ai";
                break;
            case "e": encriptado += "enter";
                break;
            case "i": encriptado += "imes";
                break;
            case "o": encriptado += "ober";
                break;
            case "u": encriptado += "ufat";
                break;
            default: encriptado += texto[i];
                break;
        }
    }
    return encriptado;
}


console.log(EncriptarTexto("Hola como estas"));
*/