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