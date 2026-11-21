const closeBtn = document.querySelector('.cont-close-btn');
const contactOverlay = document.querySelector('.contact-modal-overlay');

const form = document.querySelector('.contact-modal-form');

const nameInput = form.elements.name;
const nameError = nameInput.nextElementSibling;

const emailInput = form.elements.email;
const emailError = emailInput.nextElementSibling;

const contactModalText = document.querySelector('.contact-modal-text');

const toClose = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

function closeModal() {
    contactOverlay.classList.remove('contact-is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', toClose);

    form.reset();
    nameInput.classList.remove('is-error');
    nameError.classList.add('is-hidden');
    emailInput.classList.remove('is-error');
    emailError.classList.add('is-hidden');
}

function openModal(eventTitle) {
    if (eventTitle) {
        contactModalText.textContent = eventTitle;
    }

    contactOverlay.classList.add('contact-is-open');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', toClose);
}

closeBtn.addEventListener('click', () => {
    closeModal();
});

contactOverlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeModal();
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const inputEmail = formData.get('email').trim();
    const inputName = formData.get('name').trim();

    if (inputEmail === '') {
        emailError.classList.remove('is-hidden');
        emailInput.classList.add('is-error');
    } else {
        emailInput.classList.remove('is-error');
        emailError.classList.add('is-hidden');
    }

    if (inputName === '') {
        nameInput.classList.add('is-error');
        nameError.classList.remove('is-hidden');
    } else {
        nameInput.classList.remove('is-error');
        nameError.classList.add('is-hidden');
    }

    if (inputEmail === '' || inputName === '') {
      return;
    }
    
    const user = {
        name: inputName,
        email: inputEmail
     };

    console.log(user);
    form.reset();

    closeModal();

})

export { openModal };