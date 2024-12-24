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
setInterval(() => showSlide(index + 1), 4000);