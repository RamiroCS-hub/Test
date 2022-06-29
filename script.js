
/* FUNCION DE MOSTRAR FIRST SLIDE */
const slideShow = document.querySelector(".slide1");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const body = document.querySelector("#body");
const slideLength = document.querySelectorAll(".length")
function selectImage(index){
    console.log()
    //Guardo la lista HTML en un arr
    let clickImage = []
    for(let i = 0; i < slideLength.length; i++){
        clickImage[i] = document.querySelector(`.imagesGrid__img${i}`); 
    }
    body.style.overflow="hidden";
    //Obtengo el primer nodo de la etiqueta <a>(imagen)
    let firstImage = clickImage[index].firstElementChild;
    //Contenedor de las imagenes
    slideShow.style.display = "block";

    //Primera imagen que aparece
    const img = document.createElement("img");
    firstSibling = firstImage.nextElementSibling;
    img.src = firstImage.src;
    img.setAttribute("class",`slide1__image slider`);
    img.setAttribute("id","slide")
    slideShow.appendChild(img);
    
    /* PASAR IMAGENES */
    let lengthDiv = clickImage[index].querySelectorAll(".classTest").length;//DEFINO LA CANTIDAD DE IMAGENES
    let i = 1;
    console.log("el length es: "+lengthDiv)
    next.addEventListener("click",()=>{
        if(i < lengthDiv){
            let fFirstSibling = firstImage.nextElementSibling;
            slideShow.removeChild(img);
            img.src = fFirstSibling.src;
            slideShow.appendChild(img);
            firstImage = fFirstSibling;
            i++;
            console.log("y vale: "+i)
        }else{
            slideShow.removeChild(img);
            img.src = clickImage[index].firstElementChild.src;
            slideShow.appendChild(img)
            firstImage = clickImage[index].firstElementChild;
            i=1;
        } 
    })
    prev.addEventListener("click",()=>{
        if(i <= lengthDiv && i != 1){
            let fFirstSibling = firstImage.previousElementSibling;
            slideShow.removeChild(img);
            img.src = fFirstSibling.src;
            slideShow.appendChild(img);
            firstImage = fFirstSibling;
            i--;
            console.log("y vale: "+i)
        }else{
            slideShow.removeChild(img);
            img.src = clickImage[index].lastElementChild.src;
            slideShow.appendChild(img)
            firstImage = clickImage[index].lastElementChild;
            i=lengthDiv;
        } 
    })
}

/* FUNCION DE VOLVER */
const backButton = document.querySelector(".fa-xmark"); //Selecciono el icono cross
const sliderImages = document.querySelector(".slider")
backButton.addEventListener("click",()=>{
    slideShow.style.display="none";
    slideShow.removeChild(slideShow.lastElementChild);
    body.style.overflow="visible"
})

    // MENU LATERAL
const menuLogo = document.querySelector(".nav__menuLogo");
const menu = document.querySelector(".nav__menu")
const salir = document.querySelector(".salirMenu");

menuLogo.addEventListener("click",()=>{
    body.style.backgroundColor = "black"
    menu.style.display = "block";
})

salir.addEventListener("click",()=>{
    body.style.backgroundColor = "none"
    menu.style.display = "none";
    menuLogo.style.marginRight = "10px"
})


/* INGRESO A LA PAGINA */

const loadContainer = document.querySelector(".container");
const containerTotal = document.querySelector("#containerTotal");
let text = "BIENVENIDOS"
window.addEventListener('load', ()=>{
    containerTotal.style.display="none";
    let textAnimation = text.split("");
    let i = 0;
    let newText = document.createElement("DIV");
    let printText = setInterval(function(){ 
        newText.innerHTML += textAnimation[i];
        newText.setAttribute("class","loadText");
        loadContainer.appendChild(newText);
        i++;
        if(i == textAnimation.length) clearInterval(printText);
    },150);

    setTimeout(function(){
        containerTotal.style.display = "block";
        loadContainer.style.animation = "loadAnimation 2s 1";
        body.style.overflow="hidden";
    },2300);

    setTimeout(function(){
        loadContainer.style.display = "none";
        body.style.overflow="visible";
    },4300);
});

const arrowHome = document.querySelector(".arrowDown");
const lastElement = document.querySelector(".imagesGrid__img1"); 
arrowHome.addEventListener("click",()=>{
    let y = parseInt(lastElement.getBoundingClientRect().bottom);
    window.scrollBy({
        left: 0, top: y, behavior: 'smooth' 
    });
})