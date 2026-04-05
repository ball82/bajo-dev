const contactForm  = document.getElementById('contactForm');
const fieldName    = document.getElementById('fieldName');
const fieldEmail   = document.getElementById('fieldEmail');
const fieldMessage = document.getElementById('fieldMessage');
const privacy      = document.getElementById('privacy');
const submitBtn    = contactForm.querySelector('button[type="submit"]');
const errorName    = document.getElementById('errorName');
const errorEmail   = document.getElementById('errorEmail');
const errorMessage = document.getElementById('errorMessage');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
    const valid = !!fieldName.value.trim();
    errorName.textContent = valid ? '' : 'Bitte geben Sie Ihren Namen ein.';
    return valid;
}

function validateEmail() {
    if (!fieldEmail.value.trim()) {
        errorEmail.textContent = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        return false;
    }
    const valid = emailRegex.test(fieldEmail.value.trim());
    errorEmail.textContent = valid ? '' : 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    return valid;
}

function validateMessage() {
    const valid = !!fieldMessage.value.trim();
    errorMessage.textContent = valid ? '' : 'Bitte geben Sie eine Nachricht ein.';
    return valid;
}

function updateSubmitBtn() {
    const valid = fieldName.value.trim() &&
                  emailRegex.test(fieldEmail.value.trim()) &&
                  fieldMessage.value.trim() &&
                  privacy.checked;
    submitBtn.disabled = !valid;
}

async function sendForm(formData) {
    return fetch(contactForm.action, {
        method: 'POST',
        body: JSON.stringify({
            name:    formData.get('name'),
            email:   formData.get('email'),
            message: formData.get('message'),
        }),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    });
}

function showSuccess() {
    contactForm.reset();
    submitBtn.disabled = true;
    document.getElementById('successDialog').classList.add('open');
}

document.getElementById('dialogCloseBtn').addEventListener('click', () => {
    document.getElementById('successDialog').classList.remove('open');
});

document.getElementById('successDialog').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('successDialog').classList.remove('open');
    }
});

function showError() {
    document.getElementById('formError').style.display = 'block';
    submitBtn.disabled = false;
}

fieldName.addEventListener('blur', () => { validateName(); updateSubmitBtn(); });
fieldEmail.addEventListener('blur', () => { validateEmail(); updateSubmitBtn(); });
fieldMessage.addEventListener('blur', () => { validateMessage(); updateSubmitBtn(); });
privacy.addEventListener('change', updateSubmitBtn);
submitBtn.disabled = true;

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('formSuccess').style.display = 'none';
    document.getElementById('formError').style.display = 'none';
    submitBtn.disabled = true;
    try {
        const response = await sendForm(new FormData(contactForm));
        response.ok ? showSuccess() : showError();
    } catch {
        showError();
    }
});
