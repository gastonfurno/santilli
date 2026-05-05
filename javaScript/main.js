
const nav = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    // transición progresiva (NO brusca)
    let opacity = Math.min(scroll / 200, 0.75);
    let blur = Math.min(scroll / 20, 12);

    nav.style.background = `rgba(15,17,21,${opacity})`;
    nav.style.backdropFilter = `blur(${blur}px)`;
    nav.style.webkitBackdropFilter = `blur(${blur}px)`;

    // sombra cuando ya bajaste un poco
    if (scroll > 80) {
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
    } else {
        nav.style.boxShadow = "none";
    }
});



// CAMBIO DE IMAGEN
const miniaturas = document.querySelectorAll(".miniaturas img");
const imagenActiva = document.getElementById("imagenActiva");

miniaturas.forEach(img => {
    img.addEventListener("click", () => {

        miniaturas.forEach(i => i.classList.remove("active"));
        img.classList.add("active");

        imagenActiva.src = img.src;
    });
});


// WHATSAPP DINAMICO
function enviarWhatsApp() {
    const producto = document.getElementById("nombreProducto").innerText;

    const mensaje = `Hola, quiero consultar por la cubierta ${producto}`;

    const url = `https://wa.me/543404XXXXXX?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}