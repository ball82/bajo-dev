const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const successMsg = document.getElementById('formSuccess');
    const errorMsg   = document.getElementById('formError');
    const button     = contactForm.querySelector('button[type="submit"]');

    successMsg.style.display = 'none';
    errorMsg.style.display   = 'none';
    button.disabled = true;

    try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: JSON.stringify({
                name:    formData.get('name'),
                email:   formData.get('email'),
                message: formData.get('message'),
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if (response.ok) {
            successMsg.style.display = 'block';
            contactForm.reset();
        } else {
            errorMsg.style.display = 'block';
        }
    } catch {
        errorMsg.style.display = 'block';
    } finally {
        button.disabled = false;
    }
});
