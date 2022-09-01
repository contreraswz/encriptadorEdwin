const textoRes = document.querySelector(".textoResultado");
const textoEnt = document.querySelector(".textoEncriptar");

const btnCopiar = document.querySelector(".buttonCopiar").addEventListener("click", ()=>{
    textoRes.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    textoEnt.focus();
    document.execCommand("selectAll");

});




function encriptar() {
    var textoEnc= document.getElementById("textoEncriptar").value;
    textoEnc =textoEnc.toLowerCase();
    var resultadoEncriptacion ="";
    var conversion="";
    if (textoEnc=='') {
        alert("no hay texto");
    }else{
        for (let index = 0; index < textoEnc.length; index++) {

            if (textoEnc[index]=="a") {
                conversion= "ai";
                resultadoEncriptacion=resultadoEncriptacion+conversion;
            }else{
                if (textoEnc[index]=="e") {
                conversion= "enter";
                resultadoEncriptacion=resultadoEncriptacion+conversion;
                }else{
                    if (textoEnc[index]=="i") {
                        conversion= "imes";
                        resultadoEncriptacion=resultadoEncriptacion+conversion;
                    }else{
                        if (textoEnc[index]=="o") {
                            conversion= "ober";
                            resultadoEncriptacion=resultadoEncriptacion+conversion;
                        }else{
                            if (textoEnc[index]=="u") {
                                conversion= "ufat";
                                resultadoEncriptacion=resultadoEncriptacion+conversion;
                            }
                            else{
                                conversion=textoEnc[index];
                                resultadoEncriptacion=resultadoEncriptacion+conversion;
                            }
                        }
                    }
                }
            }
                
        }
     document.getElementById("textoResultado").innerHTML=resultadoEncriptacion;
    }
}

function desencriptar(){
    var textoDes = document.getElementById("textoEncriptar").value;
    textoDes = textoDes.replaceAll("ai","a");
    textoDes = textoDes.replaceAll("enter","e");
    textoDes = textoDes.replaceAll("imes","i");
    textoDes = textoDes.replaceAll("ober","o");
    textoDes = textoDes.replaceAll("ufat","u");
    document.getElementById("textoResultado").innerHTML=textoDes;
}

