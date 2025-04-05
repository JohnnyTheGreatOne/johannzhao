// Navigation zwischen den Reitern
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');

    // Standardmäßig den "Home"-Reiter aktivieren
    document.querySelector('#home').classList.add('active');
    document.querySelector('nav a[href="#home"]').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            if (this.getAttribute('href').startsWith('#')) {
                event.preventDefault();

                // Alle Reiter ausblenden
                contentSections.forEach(section => {
                    section.classList.remove('active');
                });

                // Angeklickten Reiter anzeigen
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).classList.add('active');

                // Aktiven Link markieren
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

// Übersetzungslogik
document.addEventListener('DOMContentLoaded', function () {
    const translateButton = document.getElementById('translate-button');
    const translations = {
        de: {
            headerName: "Johann Zhao",
            home: "Home",
            mediathek: "Mediathek",
            news: "News & Presse",
            zhaoZech: "Zhao & Zech",
            kontakt: "Kontakt",
            homeTitle: "Johann Zhao | Pianist",  // Geändert von "Home"
            mediathekTitle: "Mediathek",
            newsTitle: "News & Presse",
            zhaoZechTitle: "Zhao & Zech",
            kontaktTitle: "Kontakt",
            kontaktFormName: "Name:",
            kontaktFormEmail: "E-Mail:",
            kontaktFormMessage: "Nachricht:",
            kontaktFormButton: "Senden",
            confirmationMessage: "Vielen Dank für deine Nachricht!",
        },
        en: {
            headerName: "Johann Zhao",
            home: "Home",
            mediathek: "Media Library",
            news: "News & Press",
            zhaoZech: "Zhao & Zech",
            kontakt: "Contact",
            homeTitle: "Johann Zhao | Pianist",  // Geändert von "Home"
            mediathekTitle: "Media Library",
            newsTitle: "News & Press",
            zhaoZechTitle: "Zhao & Zech",
            kontaktTitle: "Contact",
            kontaktFormName: "Name:",
            kontaktFormEmail: "Email:",
            kontaktFormMessage: "Message:",
            kontaktFormButton: "Send",
            confirmationMessage: "Thank you for your message!",
        },
    };

    let currentLanguage = 'de';

    translateButton.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
        translateButton.textContent = currentLanguage === 'de' ? 'EN' : 'DE';

        // Übersetze Header-Inhalte
        document.getElementById('header-name').textContent = translations[currentLanguage].headerName;
        document.getElementById('nav-home').textContent = translations[currentLanguage].home;
        document.getElementById('nav-mediathek').textContent = translations[currentLanguage].mediathek;
        document.getElementById('nav-news').textContent = translations[currentLanguage].news;
        document.getElementById('nav-zhao-zech').textContent = translations[currentLanguage].zhaoZech;
        document.getElementById('nav-kontakt').textContent = translations[currentLanguage].kontakt;

        // Übersetze Reiter-Titel
        document.getElementById('home-title').textContent = translations[currentLanguage].homeTitle;
        document.getElementById('mediathek-title').textContent = translations[currentLanguage].mediathekTitle;
        document.getElementById('news-presse-title').textContent = translations[currentLanguage].newsTitle;
        document.getElementById('zhao-zech-title').textContent = translations[currentLanguage].zhaoZechTitle;
        document.getElementById('kontakt-title').textContent = translations[currentLanguage].kontaktTitle;

        // Übersetze Kontaktformular
        document.getElementById('kontakt-form-name').textContent = translations[currentLanguage].kontaktFormName;
        document.getElementById('kontakt-form-email').textContent = translations[currentLanguage].kontaktFormEmail;
        document.getElementById('kontakt-form-message').textContent = translations[currentLanguage].kontaktFormMessage;
        document.getElementById('kontakt-form-button').textContent = translations[currentLanguage].kontaktFormButton;

        // Übersetze Home-Text
        const homeTextsDE = document.querySelectorAll('#home-text-de');
        const homeTextsEN = document.querySelectorAll('#home-text-en');
        if (currentLanguage === 'de') {
            homeTextsDE.forEach(text => text.style.display = 'block');
            homeTextsEN.forEach(text => text.style.display = 'none');
        } else {
            homeTextsDE.forEach(text => text.style.display = 'none');
            homeTextsEN.forEach(text => text.style.display = 'block');
        }
    });
});

// Lightbox-Funktionalität
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });

    closeLightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmation');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                confirmationMessage.style.display = 'block'; // Bestätigungsnachricht anzeigen
                contactForm.reset(); // Formular zurücksetzen
            } else {
                throw new Error('Fehler beim Senden der Daten');
            }
        })
        .catch(error => {
            console.error('Fehler:', error);
            alert('Es gab ein Problem beim Absenden des Formulars. Bitte versuche es später erneut.');
        });
    });
});
