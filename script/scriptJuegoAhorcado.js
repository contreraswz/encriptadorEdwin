let letra ="";
let letrasEncontradas=[];
let i=0;
let palabraIncognita="";
let falla=0;

const ventanaModal = document.querySelector(".modal");
const ventanaModalResultado = document.querySelector(".modalResultado");
const modalContenidoResultado = document.querySelector(".modalContenidoResultado");
const resultadoP = document.createElement("p");
var canvas=document.querySelector("canvas");
var pincel=canvas.getContext("2d");

const txtPalabraEncontrar = document.querySelector(".txtPalabraEncontrar");
const areaAhorcadoPalabra = document.querySelector(".areaAhorcadoPalabra");
const areaLetraUsada = document.querySelector(".areaLetraUsada");

const fragmento = document.createDocumentFragment();
const txtLetraLeer = document.querySelector(".areaLetraLeer");

const btnNuevo = document.querySelector("#buttonNuevo").addEventListener
("click",()=>{
    ventanaModal.style.opacity=1;
    ventanaModal.style.visibility="visible";
    txtPalabraEncontrar.focus();
});

const btnCerrar = document.querySelector(".buttonCerrar").addEventListener("click",()=>{
    ventanaModal.style.opacity=0;
    ventanaModal.style.visibility="hidden";
    txtLetraLeer.disabled =true;
    
});

const btnCerrarResultado = document.querySelector(".buttonCerrarResultado").addEventListener("click",()=>{
    ventanaModalResultado.style.opacity=0;
    ventanaModalResultado.style.visibility="hidden";
    limpiar();
});


const btnRendirse = document.querySelector("#buttonRendirse").addEventListener("click",()=>{
    resultado("!--PREDISTE CHAMP--¡");
    limpiar();
});

txtLetraLeer.addEventListener("keyup",()=>{
    const elementoNuevoP = document.createElement("p");
    letra=txtLetraLeer.value.toLowerCase();
    for (let index = 0; index < palabraIncognita.length; index++) {
        if (palabraIncognita.includes(letra)) {
            if (!letrasEncontradas.includes(letra)) {
                letrasEncontradas[i]=letra;
                elementoNuevoP.textContent="✔"+letra;
                areaLetraUsada.appendChild(elementoNuevoP);
                if (letrasEncontradas.length==palabraIncognita.length) {
                    areaAhorcadoPalabra.children[i].textContent=letra;
                    resultado("!--GANASTE FELICIDADES--¡");
                } else {
                    for (let i = 0; i < palabraIncognita.length; i++) {
                        if(palabraIncognita[i]==letra){
                            areaAhorcadoPalabra.children[i].textContent=letra;
                        }
                    } 
                }
                txtLetraLeer.value="";
                i++;
                break;
            }else{
                alert("Letra repetida, Intenta con otra")
                txtLetraLeer.value="";
                break;
            }
        } else{
                falla++;
                elementoNuevoP.style.color="#ff6905";
                elementoNuevoP.textContent=letra+" > !FALLASTE¡";
                areaLetraUsada.appendChild(elementoNuevoP);
                pintarAhorcado(falla);
                txtLetraLeer.value="";
            break; 
        } 
    }
});

const btnJugar = document.querySelector(".buttonJugar").addEventListener("click",()=>{   
    palabraIncognita=txtPalabraEncontrar.value.toLowerCase();
    ventanaModal.style.opacity=0;
    ventanaModal.style.visibility="hidden";
    txtLetraLeer.disabled =false;
    limpiar();
    pintarEspacios();
   
    txtLetraLeer.focus();
});

function pintarEspacios(){
    for (let index = 0; index < palabraIncognita.length; index++) {
        const elementoNuevoP = document.createElement("p");
        areaAhorcadoPalabra.appendChild(elementoNuevoP);
    } 
}

function limpiar() {
    var padreLetra =document.querySelector(".areaLetraUsada");
    var hijoLetra = padreLetra.firstChild;

    var padreAhorcado =document.querySelector(".areaAhorcadoPalabra");
    var hijoAhorcado = padreAhorcado.firstChild;

    var padreResultado =document.querySelector(".modalContenidoResultado");
    var hijoResultado = padreResultado.firstChild;
    
    
    
        while (hijoLetra) {
            padreLetra.removeChild(hijoLetra);
            hijoLetra =padreLetra.firstChild;
        }
    
        while (hijoAhorcado) {
            padreAhorcado.removeChild(hijoAhorcado);
            hijoAhorcado=padreAhorcado.firstChild;
        }
    
         while (hijoResultado) {
            padreResultado.removeChild(hijoResultado);
            hijoResultado=padreResultado.firstChild;
        }   
    
     letra ="";
     letrasEncontradas=[];
     i=0;
     falla=0;
    txtPalabraEncontrar.value="";
    pincel.clearRect(0,0,canvas.width,canvas.height)
    alert("paso el limpiar canvas") 
    
}

function pintarAhorcado(){
       
    switch (falla) {
        case 1:
            pincel.fillRect(100,142,100,7);
            pincel.fillRect(100,20,10,122);
            break;
        case 2:
            pincel.fillRect(100,20,65,7);
            pincel.fillRect(165,20,10,25);
            break;
        case 3:
            pincel.beginPath();
            pincel.arc(170, 60, 17, 0, Math.PI * 2, true);
            pincel.stroke();            
            break;
        case 4:
            pincel.beginPath();
            pincel.moveTo(170, 77);
            pincel.lineTo(170, 120);
            pincel.lineTo(150, 140);
            pincel.moveTo(170, 120);
            pincel.lineTo(190, 140);
            pincel.stroke();            
            break;
        case 5:
            pincel.beginPath();
            pincel.moveTo(150, 90);
            pincel.lineTo(190, 90);
            pincel.stroke();            
            break;
        case 6:
            
            pincel.beginPath();
            pincel.moveTo(157, 55);
            pincel.lineTo(167, 65);
            
            pincel.moveTo(167, 55);
            pincel.lineTo(157, 65);
            
            pincel.moveTo(172, 55);
            pincel.lineTo(182, 65);
            
            pincel.moveTo(182, 55);
            pincel.lineTo(172, 65);
            pincel.stroke();

            resultado("!--PREDISTE CHAMP--¡");
            
            break;

    }
}

function resultado(arg){
    const resultadoP = document.createElement("p");
    ventanaModalResultado.style.opacity=1;
    ventanaModalResultado.style.visibility="visible";
    resultadoP.textContent=arg;
    modalContenidoResultado.appendChild(resultadoP.firstChild);   
 
}