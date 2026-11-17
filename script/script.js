// Project Tabs
document.querySelectorAll('.project-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.project-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.project-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.project-panel')[tab.dataset.project].classList.add('active');
    });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const mainNav = document.querySelector('.main-nav');
const navTrigger = document.querySelector('.nav-trigger');
const navSpacer = document.querySelector('.nav-spacer');

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

function syncHeroNav() {
    if (!mainNav || !navTrigger || !navSpacer) return;
    const shouldFix = navTrigger.getBoundingClientRect().top <= 0;
    mainNav.classList.toggle('is-fixed', shouldFix);
    navSpacer.style.height = shouldFix ? `${mainNav.offsetHeight}px` : '0px';
}

window.addEventListener('scroll', syncHeroNav, { passive: true });
window.addEventListener('resize', syncHeroNav);
syncHeroNav();

// Typewriter
        let phrases = ["in Aarau wohnhaft..", "Fullstack Developer..", "mit Angular & Django unterwegs..", "leidenschaftlicher Coder.."];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const el = document.getElementById('typewriter');

        function typeForward(current) {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                isDeleting = true;
                setTimeout(type, 1800);
                return true;
            }
            return false;
        }

        function typeBackward(current) {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }

        function type() {
            const current = phrases[phraseIndex];
            if (!isDeleting && typeForward(current)) return;
            if (isDeleting) typeBackward(current);
            setTimeout(type, isDeleting ? 60 : 100);
        }
        type();

        window.updateTypewriterPhrases = function(newPhrases) {
            phrases = newPhrases;
            phraseIndex = 0;
            charIndex = 0;
            isDeleting = false;
        };


// ---------- Dynamik ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll-Fortschrittsbalken
const progressBar = document.querySelector('.scroll-progress');
function updateProgress() {
    if (!progressBar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
}

// "Nach oben"-Button erst nach dem Hero einblenden
const scrollTopBtn = document.querySelector('.scroll-top-btn');
function updateScrollTop() {
    if (!scrollTopBtn) return;
    scrollTopBtn.classList.toggle('visible', window.scrollY > window.innerHeight * 0.8);
}
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
}

// Scroll-Spy: aktiver Nav-Link + gleitender Unterstrich
const navAnchors = Array.from(document.querySelectorAll('.main-nav .nav-links a[href^="#"]'));
const mobileAnchors = Array.from(document.querySelectorAll('.mobile-nav-link[href^="#"]'));
const navIndicator = document.querySelector('.main-nav .nav-indicator');
const spySections = navAnchors
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

function moveIndicator(link) {
    if (!navIndicator) return;
    if (!link) { navIndicator.classList.remove('on'); return; }
    navIndicator.style.left = `${link.offsetLeft}px`;
    navIndicator.style.width = `${link.offsetWidth}px`;
    navIndicator.classList.add('on');
}

function setActiveSection(id) {
    let activeLink = null;
    navAnchors.forEach(a => {
        const on = a.getAttribute('href') === `#${id}`;
        a.classList.toggle('active', on);
        if (on) activeLink = a;
    });
    mobileAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    moveIndicator(activeLink);
}

function updateScrollSpy() {
    const marker = window.scrollY + window.innerHeight * 0.4;
    let current = null;
    spySections.forEach(sec => { if (sec.offsetTop <= marker) current = sec.id; });
    setActiveSection(current);
}

// Hover-Vorschau des Unterstrichs
navAnchors.forEach(a => {
    a.addEventListener('mouseenter', () => moveIndicator(a));
    a.addEventListener('mouseleave', () => moveIndicator(navAnchors.find(l => l.classList.contains('active')) || null));
});

let ticking = false;
function onScrollDynamics() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
        updateProgress();
        updateScrollTop();
        updateScrollSpy();
        ticking = false;
    });
}
window.addEventListener('scroll', onScrollDynamics, { passive: true });
window.addEventListener('resize', onScrollDynamics);
window.addEventListener('load', onScrollDynamics);
onScrollDynamics();

// Hero: Lichtkegel folgt der Maus, Portrait bewegt sich leicht mit
const heroHeader = document.querySelector('.hero-header');
const portrait = document.querySelector('.portrait-photo');
if (heroHeader && !reduceMotion && window.matchMedia('(hover: hover)').matches) {
    heroHeader.addEventListener('mousemove', (e) => {
        const rect = heroHeader.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        heroHeader.style.setProperty('--mx', `${x}px`);
        heroHeader.style.setProperty('--my', `${y}px`);
        heroHeader.classList.add('spot-on');
        if (portrait) {
            const dx = (x / rect.width - 0.5) * 14;
            const dy = (y / rect.height - 0.5) * 14;
            portrait.style.setProperty('--px', `${dx}px`);
            portrait.style.setProperty('--py', `${dy}px`);
        }
    });
    heroHeader.addEventListener('mouseleave', () => {
        heroHeader.classList.remove('spot-on');
        if (portrait) {
            portrait.style.setProperty('--px', '0px');
            portrait.style.setProperty('--py', '0px');
        }
    });
}

// Projekt-Tabs: Animation bei jedem Wechsel neu starten
document.querySelectorAll('.project-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const panel = document.querySelectorAll('.project-panel')[tab.dataset.project];
        if (!panel) return;
        panel.style.animation = 'none';
        void panel.offsetWidth;
        panel.style.animation = '';
    });
});
