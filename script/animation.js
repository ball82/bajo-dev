// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
}

hamburger.addEventListener('click', openMenu);
mobileMenuClose.addEventListener('click', closeMenu);
mobileMenuOverlay.addEventListener('click', closeMenu);
mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));

// Typewriter
        const phrases = ["in Aarau wohnhaft..", "Fullstack Developer..", "leidenschaftlicher Coder.."];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const el = document.getElementById('typewriter');

        function type() {
            const current = phrases[phraseIndex];
            if (!isDeleting) {
                el.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(type, 1800);
                    return;
                }
            } else {
                el.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
            }
            setTimeout(type, isDeleting ? 60 : 100);
        }
        type();