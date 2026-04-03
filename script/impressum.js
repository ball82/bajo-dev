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
                <a href="#whyMe" onclick="closeImpressum()">Über mich</a>
                <a href="#skills" onclick="closeImpressum()">Skills</a>
                <a href="#projects" onclick="closeImpressum()">Projekte</a>
                <a href="#contact" onclick="closeImpressum()">Kontakt</a>
            </div>
            <button class="impressum-close" id="closeImpressum">&#10005;</button>

        </nav>

        <div class="mobile-menu" id="impressumMobileMenu">
            <button class="mobile-menu-close" id="impressumMobileMenuClose">&#10005;</button>
            <a href="#whyMe" class="mobile-nav-link impressum-mobile-link">Über mich</a>
            <a href="#skills" class="mobile-nav-link impressum-mobile-link">Skills</a>
            <a href="#projects" class="mobile-nav-link impressum-mobile-link">Projekte</a>
            <a href="#contact" class="mobile-nav-link impressum-mobile-link">Kontakt</a>
        </div>
        <div class="mobile-menu-overlay" id="impressumMobileOverlay"></div>

        <button class="impressum-back" id="impressumBack">&#8592;</button>

        <div class="impressum-content">
            <h1>Legal Notice</h1>

            <h2>Impressum</h2>
            <p>Angaben gemäss Art. 3 Abs. 1 lit. s UWG</p>

            <h3>Betreiber der Website</h3>
            <p>Joannis Ballos<br>
            Oltnerstrasse 48<br>
            5012 Schönenwerd<br>
            Schweiz</p>

            <h3>Kontakt</h3>
            <p>E-Mail: <a href="mailto:mail@bajo-dev.ch">mail@bajo-dev.ch</a></p>

            <h3>Haftungsausschluss</h3>
            <p>Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.</p>

            <h3>Haftung für Links</h3>
            <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt.</p>

            <h3>Urheberrechte</h3>
            <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich dem Betreiber oder den speziell genannten Rechteinhabern.</p>
        </div>

        <footer>
            <div class="footer-left">
                <span id="closeImpressumFooter" style="cursor:pointer;">Legal notice</span>
                <span>© Joannis Ballos 2025</span>
            </div>
            <div class="footer-center">
                <img src="./logo/bajo_dev_logo_v3.svg" alt="Bajo Dev Logo">
            </div>
            <div class="footer-right">
                <a href="#"><img src="./icon/github.svg" alt="GitHub"></a>
                <a href="mailto:mail@bajo-dev.ch"><img src="./icon/mail.svg" alt="E-Mail"></a>
                <a href="#"><img src="./icon/linkedin.svg" alt="LinkedIn"></a>
            </div>
        </footer>
    </div>
`;

const impressumOverlay = document.getElementById('impressumOverlay');
impressumOverlay.innerHTML = impressumTemplate;

function closeImpressum() {
    impressumOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('openImpressum').addEventListener('click', (e) => {
    e.preventDefault();
    impressumOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
});

impressumOverlay.querySelector('#closeImpressum').addEventListener('click', closeImpressum);
impressumOverlay.querySelector('#closeImpressumFooter').addEventListener('click', closeImpressum);
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

impressumHamburger.addEventListener('click', openImpressumMenu);
impressumMobileMenuClose.addEventListener('click', closeImpressumMenu);
impressumMobileOverlay.addEventListener('click', closeImpressumMenu);
impressumMobileLinks.forEach(link => link.addEventListener('click', () => {
    closeImpressumMenu();
    closeImpressum();
}));
