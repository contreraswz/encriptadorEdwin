let letra ="";
let letrasEncontradas=[];
let i=0;
let palabraIncognita="";
let falla=0;
const ventanaModal = document.querySelector(".modal");
var canvas=document.querySelector("canvas");
var pincel=canvas.getContext("2d");

const txtPalabraEncontrar = document.querySelector(".txtPalabraEncontrar");
const areaAhorcadoPalabra = document.querySelector(".areaAhorcadoPalabra");
const areaLetraUsada = document.querySelector(".areaLetraUsada");
const elementoNuevoP = document.createElement("p");
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


const btnRendirse = document.querySelector("#buttonRendirse").addEventListener("click",()=>{
    alert("Entró a rendirse");
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
                for (let i = 0; i < palabraIncognita.length; i++) {
                    if(palabraIncognita[i]==letra){
                        areaAhorcadoPalabra.children[i].textContent=letra;
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
    pintarEspacios();
    txtLetraLeer.focus();
});

function pintarEspacios(){
    limpiar();
    for (let index = 0; index < palabraIncognita.length; index++) {
        const elementoNuevoP = document.createElement("p");
        areaAhorcadoPalabra.appendChild(elementoNuevoP);
    } 
}

function limpiar() {
    
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
            alert("PERDISTE CARNAL");
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
            break;

    }
}