// JavaScript para el Slider
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

// Función para mostrar el slide
function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(${-index * 100}%)`;
}

// Eventos de botones
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Slider automático
setInterval(() => showSlide(index + 1), 3000);










//Script menu de hambruguesas
const links = document.querySelector(".links");
const header = document.querySelector("header");
const icons = document.querySelector(".icons");
const navbar = document.querySelector(".navbar");
const btnMenu = document.getElementById("btn-menu");


const responsiveY = ()=>{
    if(window.innerHeight<=340){
        if(links.classList.contains("mostrar"))
            links.classList.add("min");
        else
            links.classList.remove("min");
    }
    else{
        links.classList.remove("min");
    }
};
const responsive = ()=>{
    if(window.innerWidth<=900){
        header.appendChild(links);
    }else{
        navbar.appendChild(links);
    }
    responsiveY();
}

btnMenu.addEventListener("click",()=>{
    links.classList.toggle("mostrar");
    responsiveY();
});
responsive();

window.addEventListener("resize",responsive);



//Search

const searchButton = document.getElementById('searchButton');
const closeButton = document.getElementById('closeButton');
const searchMenu = document.getElementById('searchMenu');

// Mostrar el menú al hacer clic en la lupa
searchButton.addEventListener('click', () => {
    searchMenu.style.display = 'block';
});

// Ocultar el menú al hacer clic en "Cerrar"
closeButton.addEventListener('click', () => {
    searchMenu.style.display = 'none';
});


// Mostrar el menú y ocultar el botón al hacer clic en la lupa
searchButton.addEventListener('click', () => {
    searchMenu.style.display = 'block';
    searchButton.style.display = 'none'; // Oculta la lupa
});

  // Ocultar el menú y volver a mostrar el botón al hacer clic en "Cerrar"
closeButton.addEventListener('click', () => {
    searchMenu.style.display = 'none';
    searchButton.style.display = 'block'; // Muestra la lupa de nuevo
});


