// LOGICA QUE AFECTA A TODA LA WEB

/* ==================== NavBar ===================== */

const navbar = document.getElementById('navbar');
const openButton = document.getElementById('open-btn');
const overlay = document.getElementById('overlay');

const media = window.matchMedia('(max-width: 1024px)');
media.addEventListener('change', (e) => updateNavbar(e));

function updateNavbar(e) {
    const isMobile = e.matches;
    console.log(isMobile);

    if (isMobile) {
        navbar.setAttribute('inert', '');
    } else {
        navbar.removeAttribute('inert');
        navbar.classList.add('translate-x-full');
        navbar.classList.remove('translate-x-0');
        overlay.classList.add('hidden');
    }
}

function openMenu() {
    console.log('open clicked')
    navbar.classList.add('translate-x-0');
    navbar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    openButton.setAttribute('aria-expanded', 'true');
    navbar.removeAttribute('inert');
}

function closeMenu() {
    console.log('close clicked')
    navbar.classList.add('translate-x-full');
    navbar.classList.remove('translate-x-0');
    overlay.classList.add('hidden');
    openButton.setAttribute('aria-expanded', 'false');
    navbar.setAttribute('inert', '');
}

updateNavbar(media);

/* ==================== Active Link ===================== */

function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a[href]');
    
    navLinks.forEach(link => {
        link.removeAttribute('aria-current');
        const href = link.getAttribute('href');
        
        // Comparar rutas
        if (href === currentPath || 
            (currentPath === '/' && href === '/') ||
            (currentPath.includes(href) && href !== '/')) {
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Ejecutar al cargar
setActiveLink();