document.addEventListener('DOMContentLoaded', function () {
    // Animación de aparición
    const cards = document.querySelectorAll('.destino-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Botones de desplazamiento del carrusel
    const carrusel = document.querySelector('.carrusel-destinos');
    const btnIzq = document.querySelector('.carrusel-btn-izq');
    const btnDer = document.querySelector('.carrusel-btn-der');
    const scrollAmount = 320;

    if (btnIzq && btnDer && carrusel) {
        btnIzq.addEventListener('click', () => {
            carrusel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        btnDer.addEventListener('click', () => {
            carrusel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // Mostrar oferta con descuento
    document.querySelectorAll('.btn-oferta').forEach(btn => {
        btn.addEventListener('click', function () {
            const card = btn.closest('.destino-card');
            const precioElem = card.querySelector('.precio span');
            const ofertaElem = card.querySelector('.oferta');
            const descuento = parseInt(btn.getAttribute('data-descuento'));
            const precio = parseFloat(precioElem.textContent.replace(/[^0-9.]/g, ''));
            const precioFinal = (precio * (1 - descuento / 100)).toFixed(2);
            ofertaElem.textContent = `¡Oferta! ${descuento}% de descuento: USD ${precioFinal}`;
            ofertaElem.style.display = 'block';
        });
    });
});