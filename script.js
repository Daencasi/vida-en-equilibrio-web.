document.addEventListener('DOMContentLoaded', () => {
    // MOBILE MENU
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            // Toggle icon if needed
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close menu after clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // SCROLL REVEAL HEADER
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 5%';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.padding = '0.75rem 5%';
            header.style.background = 'rgba(255, 255, 255, 0.7)';
        }
    });
});

// WHATSAPP REDIRECTION
function contactarWhatsApp(plan) {
    const telefono = "584264240070"; // Número oficial de Vida en Equilibrio
    let mensaje = "";
    
    if(plan === 'General') {
        mensaje = "Hola Vida en Equilibrio, quiero recibir información para anunciar mi negocio.";
    } else {
        mensaje = "Hola Vida en Equilibrio, vengo de la web y me interesa contratar el Plan " + plan + " para mi negocio.";
    }
    
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}
