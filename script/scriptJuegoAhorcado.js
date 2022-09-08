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
                elementoNuevoP.style.color="#ff6905";
                elementoNuevoP.textContent=letra+" > !FALLASTE¡";
                areaLetraUsada.appendChild(elementoNuevoP);
                txtLetraLeer.value="";
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