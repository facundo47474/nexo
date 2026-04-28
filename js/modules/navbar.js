export function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const isOpen = navLinks.classList.contains('open');
            hamburger.innerHTML = isOpen ? '<i data-lucide="x" size="28"></i>' : '<i data-lucide="menu" size="28"></i>';
            if (window.lucide) window.lucide.createIcons();
        });

        // Close menu on link click (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('open');
                    hamburger.innerHTML = '<i data-lucide="menu" size="28"></i>';
                    if (window.lucide) window.lucide.createIcons();
                }
            });
        });
    }

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}
