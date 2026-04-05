const impressumTemplate = `
    <div class="impressum-page">
        <nav class="impressum-nav">
            <button class="impressum-hamburger" id="impressumHamburger" aria-label="Menü öffnen">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <img class="nav-logo" src="./logo/bajo_dev_logo_v3.svg" alt="">
            <div class="nav-links">
                <a href="#whyMe" onclick="closeImpressum()" data-i18n="nav-about"></a>
                <a href="#skills" onclick="closeImpressum()" data-i18n="nav-skills"></a>
                <a href="#projects" onclick="closeImpressum()" data-i18n="nav-projects"></a>
                <a href="#contact" onclick="closeImpressum()" data-i18n="nav-contact"></a>
            </div>
            <button class="impressum-close" id="closeImpressum">&#10005;</button>
        </nav>

        <div class="mobile-menu" id="impressumMobileMenu">
            <button class="mobile-menu-close" id="impressumMobileMenuClose">&#10005;</button>
            <a href="#whyMe" class="mobile-nav-link impressum-mobile-link" data-i18n="nav-about"></a>
            <a href="#skills" class="mobile-nav-link impressum-mobile-link" data-i18n="nav-skills"></a>
            <a href="#projects" class="mobile-nav-link impressum-mobile-link" data-i18n="nav-projects"></a>
            <a href="#contact" class="mobile-nav-link impressum-mobile-link" data-i18n="nav-contact"></a>
        </div>
        <div class="mobile-menu-overlay" id="impressumMobileOverlay"></div>

        <button class="impressum-back" id="impressumBack">&#8592;</button>

        <div class="impressum-content">
            <h1 data-i18n="legal-title"></h1>

            <h2 data-i18n="imp-h-impressum"></h2>
            <p data-i18n="imp-subtitle"></p>

            <h3 data-i18n="imp-operator-h"></h3>
            <p>Joannis Ballos<br>
            Oltnerstrasse 48<br>
            5012 Schönenwerd<br>
            <span data-i18n="imp-country"></span></p>

            <h3 data-i18n="imp-contact-h"></h3>
            <p>E-Mail: <a href="mailto:mail@bajo-dev.ch">mail@bajo-dev.ch</a></p>

            <h3 data-i18n="imp-disclaimer-h"></h3>
            <p data-i18n="imp-disclaimer-text"></p>

            <h3 data-i18n="imp-links-h"></h3>
            <p data-i18n="imp-links-text"></p>

            <h3 data-i18n="imp-copyright-h"></h3>
            <p data-i18n="imp-copyright-text"></p>

            <h2 id="datenschutz" data-i18n="imp-h-privacy"></h2>
            <p data-i18n="priv-subtitle"></p>

            <h3 data-i18n="priv-controller-h"></h3>
            <p>Joannis Ballos<br>
            Oltnerstrasse 48<br>
            5012 Schönenwerd<br>
            E-Mail: <a href="mailto:mail@bajo-dev.ch">mail@bajo-dev.ch</a></p>

            <h3 data-i18n="priv-collected-h"></h3>
            <p data-i18n="priv-collected-text"></p>
            <ul>
                <li data-i18n="priv-collected-1"></li>
                <li data-i18n="priv-collected-2"></li>
                <li data-i18n="priv-collected-3"></li>
            </ul>

            <h3 data-i18n="priv-purpose-h"></h3>
            <p data-i18n="priv-purpose-text"></p>

            <h3 data-i18n="priv-retention-h"></h3>
            <p data-i18n="priv-retention-text"></p>

            <h3 data-i18n="priv-rights-h"></h3>
            <p data-i18n="priv-rights-text"></p>

            <h3 data-i18n="priv-cookies-h"></h3>
            <p data-i18n="priv-cookies-text"></p>
        </div>
    </div>
`;

const impressumOverlay = document.getElementById('impressumOverlay');
impressumOverlay.innerHTML = impressumTemplate;

function cloneFooter() {
    const clone = document.querySelector('footer').cloneNode(true);
    const link = clone.querySelector('#openImpressum');
    if (link) {
        link.removeAttribute('id');
        link.addEventListener('click', (e) => { e.preventDefault(); closeImpressum(); });
    }
    impressumOverlay.querySelector('.impressum-page').appendChild(clone);
}

cloneFooter();

function closeImpressum() {
    impressumOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function openImpressum(scrollToId) {
    impressumOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (scrollToId) {
        setTimeout(() => {
            const target = impressumOverlay.querySelector('#' + scrollToId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    }
}
window.openImpressum = openImpressum;

document.getElementById('openImpressum').addEventListener('click', (e) => {
    e.preventDefault();
    openImpressum();
});

impressumOverlay.querySelector('#closeImpressum').addEventListener('click', closeImpressum);
impressumOverlay.querySelector('#impressumBack').addEventListener('click', closeImpressum);

// Impressum Hamburger Menu
const impressumHamburger = impressumOverlay.querySelector('#impressumHamburger');
const impressumMobileMenu = impressumOverlay.querySelector('#impressumMobileMenu');
const impressumMobileMenuClose = impressumOverlay.querySelector('#impressumMobileMenuClose');
const impressumMobileOverlay = impressumOverlay.querySelector('#impressumMobileOverlay');
const impressumMobileLinks = impressumOverlay.querySelectorAll('.impressum-mobile-link');

function openImpressumMenu() {
    impressumMobileMenu.classList.add('open');
    impressumMobileOverlay.classList.add('open');
}

function closeImpressumMenu() {
    impressumMobileMenu.classList.remove('open');
    impressumMobileOverlay.classList.remove('open');
}

function initImpressumMenu() {
    impressumHamburger.addEventListener('click', openImpressumMenu);
    impressumMobileMenuClose.addEventListener('click', closeImpressumMenu);
    impressumMobileOverlay.addEventListener('click', closeImpressumMenu);
    impressumMobileLinks.forEach(link => link.addEventListener('click', () => {
        closeImpressumMenu();
        closeImpressum();
    }));
}

initImpressumMenu();
