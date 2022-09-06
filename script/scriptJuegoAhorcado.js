let letra ="";
let letrasEncontradas=[];
let i=0;
let palabraIncognita="";
const ventanaModal = document.querySelector(".modal");

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
                txtLetraLeer.value="";
                i++;
                break;
            }else{
                alert("Letra repetida, Intenta con otra")
                txtLetraLeer.value="";
                break;
            }
        } else{
                elementoNuevoP.style.color="#ff6905";
                elementoNuevoP.textContent=letra+" -> !FALLASTE¡";
                areaLetraUsada.appendChild(elementoNuevoP);
                txtLetraLeer.value="";
        } 
    }
});

const btnNuevoModal = document.querySelector(".buttonNuevoModal").addEventListener("click",()=>{
    palabraIncognita=txtPalabraEncontrar.value.toLowerCase();
    ventanaModal.style.opacity=0;
    ventanaModal.style.visibility="hidden";
    txtLetraLeer.disabled =false;
    txtLetraLeer.focus();
    pintarLetras();
});

function pintarLetras(){
    const elementoNuevoP = document.createElement("p");
    let espacios="";
    for (let index = 0; index < palabraIncognita.length; index++) {
        espacios=espacios + "-";
        elementoNuevoP.textContent=espacios;
        areaAhorcadoPalabra.appendChild(elementoNuevoP);
        /* if (palabraIncognita.includes(letra)) {
            if (!letrasEncontradas.includes(letra)) {
                letrasEncontradas[i]=letra;
                elementoNuevoP.textContent="✔"+letra;
                
                txtLetraLeer.value="";
                i++;
                break;
            }else{
                alert("Letra repetida, Intenta con otra")
                txtLetraLeer.value="";
                break;
            }
        } else{
                elementoNuevoP.style.color="#ff6905";
                elementoNuevoP.textContent=letra+" -> !FALLASTE¡";
                areaLetraUsada.appendChild(elementoNuevoP);
                txtLetraLeer.value="";
        } */ 
    } 
    alert(espacios);
}

