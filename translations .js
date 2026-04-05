const translations = {
  de: {
    'nav-about':    'Über mich',
    'nav-skills':   'Skills',
    'nav-projects': 'Projekte',
    'nav-contact':  'Kontakt',

    'section-why-me':    'Warum ich',
    'typewriter-static': 'Ich bin ',
    'about-text': 'Ich bin Joannis Ballos, professioneller Fullstack Developer aus der Region Aarau. Durch meine langjährige Erfahrung in den Bereichen Bau, Industrie und Technik habe ich gelernt, wie unterschiedlich Probleme in der echten Welt aussehen und wie man sie wirklich löst. Dieses Wissen bringe ich heute direkt in meine Arbeit als Entwickler ein. Ich verstehe die Prozesse hinter den Projekten, nicht nur den Code davor.',

    'section-skills':    'Meine Skills',
    'skills-circle-text': 'Ich arbeite mich von der ersten Zeile bis zum fertigen Produkt durch – egal ob Frontend, Backend oder beides. Wichtig ist mir dabei sauberer Code, der auch in sechs Monaten noch verständlich ist.',

    'section-projects': 'Meine Projekte',
    'tab-4': '4. Bestell App',

    // El Pollo Loco
    'p0-h1': 'Über das Projekt <span class="project-duration">Dauer: 4 Wochen</span>',
    'p0-p1': 'Ein klassisches Jump-and-Run in purem JavaScript. Die komplette Spiellogik – Steuerung, Animationen, Kollisionen und Gegner – habe ich selbst aufgebaut und dabei objektorientierte Programmierung durchgehend eingesetzt.',
    'p0-h2': 'Meine Arbeitsorganisation',
    'p0-p2': 'Saubere, wartbare Code-Struktur durch modulare Klassen und klare Verantwortlichkeiten. Regelmässige Commits und strukturiertes Vorgehen nach Spielmechaniken.',
    'p0-h3': 'Meine Erfahrung',
    'p0-p3': 'Einzelprojekt. Eigenverantwortliche Umsetzung der kompletten Spiellogik, von Charakter-Steuerung über Kollisionserkennung bis hin zu Gegner-KI.',

    // Join
    'p1-h1': 'Über das Projekt <span class="project-duration">Dauer: 6 Wochen</span>',
    'p1-p1': 'Gemeinsam mit anderen Teilnehmern entwickelt — ein Projektmanagement-Tool, das den Status und die Verantwortlichkeiten von Aufgaben übersichtlich visualisiert. Gebaut mit HTML, CSS, JavaScript, Git und Firebase.',
    'p1-h2': 'Meine Arbeitsorganisation',
    'p1-p2': 'Arbeit in klar definierten Feature-Branches, regelmässige Code-Reviews im Team und strukturierte Aufgabenverteilung über ein Kanban-Board.',
    'p1-h3': 'Meine Erfahrung',
    'p1-p3': 'Gruppenprojekt mit 3 Entwicklern. Zuständig für das Board-Feature, Drag & Drop sowie die Firebase-Datenbankanbindung.',

    // Pokédex
    'p2-h1': 'Über das Projekt <span class="project-duration">Dauer: 2 Wochen</span>',
    'p2-p1': 'Eine Pokédex-App, die Daten direkt von der PokéAPI lädt und übersichtlich darstellt. Der Fokus lag auf sauberem Umgang mit externen APIs und asynchronem JavaScript.',
    'p2-h2': 'Meine Arbeitsorganisation',
    'p2-p2': 'Klare Trennung von API-Logik und UI. Saubere Fehlerbehandlung bei asynchronen Anfragen und übersichtliche Komponentenstruktur.',
    'p2-h3': 'Meine Erfahrung',
    'p2-p3': 'Einzelprojekt. Vollständige Umsetzung von API-Integration, Datendarstellung und responsivem Design.',

    // Bestell App
    'p3-h1': 'Über das Projekt <span class="project-duration">Dauer: 2 Wochen</span>',
    'p3-p1': 'Eine Food-Bestellapp mit Warenkorb, Menüverwaltung und Bestellübersicht – alles in Vanilla JavaScript. Der Fokus lag auf klarer Datenstruktur und einer logisch aufgebauten UI.',
    'p3-h2': 'Meine Arbeitsorganisation',
    'p3-p2': 'Modularer Aufbau mit getrennter Logik für Warenkorb, Bestellverwaltung und UI-Rendering. Klare Datenstrukturen für Menü und Bestellstatus.',
    'p3-h3': 'Meine Erfahrung',
    'p3-p3': 'Einzelprojekt. Eigenverantwortliche Umsetzung der kompletten Bestell- und Warenkorb-Logik.',

    // Contact
    'contact-title': 'Kontaktieren Sie mich',
    'contact-text': 'Sie haben ein Projekt, eine Idee oder einfach eine Frage? Schreiben Sie mir – ich antworte in der Regel innerhalb von 24 Stunden.',
    'label-name':    'Ihr Name',
    'label-email':   'Ihre E-Mail',
    'label-message': 'Ihre Nachricht',
    'privacy-text':  'Ich habe die <a href="#" id="openPrivacyPolicy">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
    'btn-send':      'Senden',
    'form-success':  'Ihre Nachricht wurde erfolgreich gesendet!',
    'form-error':    'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    'footer-legal':  'Impressum',

    // Impressum & Datenschutz
    'legal-title':          'Rechtliche Hinweise',
    'imp-h-impressum':      'Impressum',
    'imp-subtitle':         'Angaben gemäss Art. 3 Abs. 1 lit. s UWG',
    'imp-operator-h':       'Betreiber der Website',
    'imp-country':          'Schweiz',
    'imp-contact-h':        'Kontakt',
    'imp-disclaimer-h':     'Haftungsausschluss',
    'imp-disclaimer-text':  'Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.',
    'imp-links-h':          'Haftung für Links',
    'imp-links-text':       'Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt.',
    'imp-copyright-h':      'Urheberrechte',
    'imp-copyright-text':   'Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich dem Betreiber oder den speziell genannten Rechteinhabern.',
    'imp-h-privacy':        'Datenschutzerklärung',
    'priv-subtitle':        'Angaben gemäss Schweizer Datenschutzgesetz (DSG)',
    'priv-controller-h':    'Verantwortliche Stelle',
    'priv-collected-h':     'Welche Daten werden erhoben?',
    'priv-collected-text':  'Über das Kontaktformular werden folgende Daten erhoben, sofern Sie diese freiwillig angeben:',
    'priv-collected-1':     'Name',
    'priv-collected-2':     'E-Mail-Adresse',
    'priv-collected-3':     'Nachrichteninhalt',
    'priv-purpose-h':       'Zweck der Datenverarbeitung',
    'priv-purpose-text':    'Die über das Kontaktformular übermittelten Daten werden ausschliesslich zur Beantwortung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte findet nicht statt.',
    'priv-retention-h':     'Speicherdauer',
    'priv-retention-text':  'Ihre Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage notwendig ist, oder soweit gesetzliche Aufbewahrungspflichten bestehen.',
    'priv-rights-h':        'Ihre Rechte',
    'priv-rights-text':     'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich dazu an: <a href="mailto:mail@bajo-dev.ch">mail@bajo-dev.ch</a>',
    'priv-cookies-h':       'Cookies & Tracking',
    'priv-cookies-text':    'Diese Website verwendet keine Tracking-Cookies und keine externen Analyse-Tools. Es wird lediglich die gewählte Spracheinstellung lokal im Browser gespeichert (localStorage).',
  },

  en: {
    'nav-about':    'About me',
    'nav-skills':   'Skills',
    'nav-projects': 'Projects',
    'nav-contact':  'Contact',

    'section-why-me':    'Why me',
    'typewriter-static': 'I am ',
    'about-text': 'I am Joannis Ballos, a professional full-stack developer from the Aarau region. Through years of experience in construction, industry, and engineering, I have learned to recognise how diverse real-world problems can be — and how to truly solve them. I bring this knowledge directly into my work as a developer. I understand the processes behind the projects, not just the code in front of them.',

    'section-skills':    'My Skills',
    'skills-circle-text': 'I work through a project from the first line to the finished product — frontend, backend, or both. What matters to me is clean code that\'s still readable six months down the line.',

    'section-projects': 'My Projects',
    'tab-4': '4. Order App',

    // El Pollo Loco
    'p0-h1': 'About the Project <span class="project-duration">Duration: 4 weeks</span>',
    'p0-p1': 'A classic jump-and-run game built in pure JavaScript. I built the entire game logic myself — controls, animations, collision detection, and enemies — applying object-oriented programming throughout.',
    'p0-h2': 'My Work Organisation',
    'p0-p2': 'Clean, maintainable code structure through modular classes and clear responsibilities. Regular commits and a structured approach organised by game mechanics.',
    'p0-h3': 'My Experience',
    'p0-p3': 'Solo project. Independently implemented the complete game logic — from character controls and collision detection through to the final boss.',

    // Join
    'p1-h1': 'About the Project <span class="project-duration">Duration: 6 weeks</span>',
    'p1-p1': 'Developed together with 2 other participants — a project management tool that clearly visualises the status and responsibilities of tasks. Built with HTML, CSS, JavaScript, Git, and Firebase.',
    'p1-h2': 'My Work Organisation',
    'p1-p2': 'Work in clearly defined feature branches, regular team code reviews, and structured task distribution via a Kanban board.',
    'p1-h3': 'My Experience',
    'p1-p3': 'Group project with 2 developers. Responsible for the board feature, drag & drop functionality, and the Firebase database integration.',

    // Pokédex
    'p2-h1': 'About the Project <span class="project-duration">Duration: 2 weeks</span>',
    'p2-p1': 'A Pokédex app that fetches data directly from the PokéAPI and displays it clearly. The focus was on clean handling of external APIs and asynchronous JavaScript.',
    'p2-h2': 'My Work Organisation',
    'p2-p2': 'Clear separation of API logic and UI. Clean error handling for asynchronous requests and a well-structured component layout.',
    'p2-h3': 'My Experience',
    'p2-p3': 'Solo project. Full implementation of API integration, data display, and responsive design.',

    // Order App
    'p3-h1': 'About the Project <span class="project-duration">Duration: 2 weeks</span>',
    'p3-p1': 'A food ordering app with cart, menu management, and order overview — all in Vanilla JavaScript. The focus was on a clear data structure and a logically built UI.',
    'p3-h2': 'My Work Organisation',
    'p3-p2': 'Modular structure with separate logic for cart, order management, and UI rendering. Clear data structures for menu items and order status.',
    'p3-h3': 'My Experience',
    'p3-p3': 'Solo project. Independently implemented the complete ordering and shopping cart logic.',

    // Contact
    'contact-title': 'Contact me',
    'contact-text': 'Got a project, an idea, or just a question? Write to me — I usually reply within 24 hours.',
    'label-name':    'Your name',
    'label-email':   'Your Email',
    'label-message': 'Your Message',
    'privacy-text':  'I\'ve read the <a href="#" id="openPrivacyPolicy">privacy policy</a> and agree to the processing of my data as outlined.',
    'btn-send':      'Send',
    'form-success':  'Your message has been sent successfully!',
    'form-error':    'Something went wrong. Please try again.',
    'footer-legal':  'Legal notice',

    // Impressum & Privacy Policy
    'legal-title':          'Legal Notice',
    'imp-h-impressum':      'Legal Notice',
    'imp-subtitle':         'Information pursuant to Art. 3 Para. 1 lit. s UCA',
    'imp-operator-h':       'Website Operator',
    'imp-country':          'Switzerland',
    'imp-contact-h':        'Contact',
    'imp-disclaimer-h':     'Disclaimer',
    'imp-disclaimer-text':  'The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. Liability claims against the author arising from material or immaterial damage caused by the use or non-use of the published information are excluded.',
    'imp-links-h':          'Liability for Links',
    'imp-links-text':       'References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is rejected.',
    'imp-copyright-h':      'Copyright',
    'imp-copyright-text':   'The copyright and all other rights to content, images, photos, or other files on this website belong exclusively to the operator or the specifically named rights holders.',
    'imp-h-privacy':        'Privacy Policy',
    'priv-subtitle':        'Information pursuant to the Swiss Data Protection Act (DPA)',
    'priv-controller-h':    'Data Controller',
    'priv-collected-h':     'What data is collected?',
    'priv-collected-text':  'The following data is collected via the contact form, provided you submit it voluntarily:',
    'priv-collected-1':     'Name',
    'priv-collected-2':     'Email address',
    'priv-collected-3':     'Message content',
    'priv-purpose-h':       'Purpose of Data Processing',
    'priv-purpose-text':    'The data submitted via the contact form is used exclusively to respond to your enquiry. It will not be passed on to third parties.',
    'priv-retention-h':     'Retention Period',
    'priv-retention-text':  'Your data will only be stored for as long as necessary to process your enquiry, or as required by statutory retention obligations.',
    'priv-rights-h':        'Your Rights',
    'priv-rights-text':     'You have the right to access, rectification, deletion, and restriction of the processing of your personal data at any time. Please contact: <a href="mailto:mail@bajo-dev.ch">mail@bajo-dev.ch</a>',
    'priv-cookies-h':       'Cookies & Tracking',
    'priv-cookies-text':    'This website does not use tracking cookies or external analytics tools. Only the selected language setting is stored locally in the browser (localStorage).',
  }
};

const typewriterPhrases = {
  de: ['in Aarau wohnhaft..', 'Fullstack Developer..', 'leidenschaftlicher Coder..'],
  en: ['based in Aarau..', 'Fullstack Developer..', 'a passionate coder..']
};

function translateElements(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = translations[lang]?.[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
}

function updateLangSwitcher(lang) {
  document.querySelectorAll('.lang-switcher span').forEach(span => {
    span.classList.toggle('active', span.textContent.trim() === lang.toUpperCase());
  });
}

function bindPrivacyLink() {
  const link = document.getElementById('openPrivacyPolicy');
  if (link && window.openImpressum) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.openImpressum('datenschutz');
    });
  }
}

function applyLanguage(lang) {
  translateElements(lang);
  bindPrivacyLink();
  if (window.updateTypewriterPhrases) window.updateTypewriterPhrases(typewriterPhrases[lang]);
  updateLangSwitcher(lang);
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-switcher span').forEach(span => {
    span.addEventListener('click', () => applyLanguage(span.textContent.trim().toLowerCase()));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  applyLanguage(localStorage.getItem('lang') || 'de');
});
