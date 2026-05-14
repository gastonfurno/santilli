const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

const cards = document.querySelectorAll('.card-contenedor');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100); // delay progresivo
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));

/*----- ANIMACION GALERIA FICHA TECNICA -----*/

document.addEventListener("DOMContentLoaded", () => {

    const imagenPrincipal = document.querySelector("#imagenActiva");
    const miniaturas = document.querySelectorAll(".miniaturas img");

    if(!imagenPrincipal || miniaturas.length === 0){
        console.log("No se encontraron imágenes");
        return;
    }

    let indiceActual = 0;

    function cambiarImagen(index){

    imagenPrincipal.classList.add("animar");

    setTimeout(() => {

        const nuevaImagen = miniaturas[index].getAttribute("src");

        imagenPrincipal.setAttribute("src", nuevaImagen);

        miniaturas.forEach(img => {
            img.classList.remove("active");
        });

        miniaturas[index].classList.add("active");

        imagenPrincipal.classList.remove("animar");

        indiceActual = index;

    }, 250);

}

    setInterval(() => {

        indiceActual++;

        if(indiceActual >= miniaturas.length){
            indiceActual = 0;
        }

        cambiarImagen(indiceActual);

    }, 3000);

});