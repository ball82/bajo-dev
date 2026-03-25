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