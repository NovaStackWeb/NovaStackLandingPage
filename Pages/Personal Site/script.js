const navMenu = document.getElementById('nav-menu');
const toggleBtn = document.getElementById('mobile-toggle');
const navLinks = document.querySelectorAll('.nav-link');

// Abre e fecha o menu ao clicar no ícone
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        // Muda o ícone de bars para X ao abrir
        const icon = toggleBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
}

// Fecha o menu ao clicar em qualquer link (importante para UX mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        const icon = toggleBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// 2. MUDANÇA DE BACKGROUND DO HEADER NO SCROLL
function scrollHeader() {
    const header = document.getElementById('header');
    // Quando o scroll for maior que 50px de altura, adiciona a classe
    if (this.scrollY >= 50) {
        header.classList.add('scroll-active');
    } else {
        header.classList.remove('scroll-active');
    }
}
window.addEventListener('scroll', scrollHeader);

// 3. SCROLL SPY (Destacar link conforme a seção visível)
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Offset para compensar o header fixo
        const sectionId = current.getAttribute('id');
        
        const linkElement = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            linkElement?.classList.add('active-link');
        } else {
            linkElement?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);