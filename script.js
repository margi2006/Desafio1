
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptar(){
    const encriptar = document.getElementById("input-texto").value;
// i para que afecte tanto mayusculas como minúsculas
// g para que afecte toda la linea u oración
// m para que afecte múltiples lineas o párrafos
// gi afeca todo mayúsculas, minúsculas y toda la linea u oración.
    const textoEntrada = encriptar
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        document.getElementById("msg").value = textoEntrada;
        
}

function desencriptar(){
    const desencriptar = document.getElementById("input-texto").value;

    const textoSalida = desencriptar
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        document.getElementById("msg").value = textoSalida;
       
}

function copiar(){
    var contenido = document.getElementById("msg");
    contenido.select();
    document.execCommand("copy");
    alert("¡Texto Copiado!")

}