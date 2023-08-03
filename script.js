/* Menu Window */
const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#close');
const linkNavPort = document.querySelector('#linkNav-port');
const linkNavAbout = document.querySelector('#linkNav-about');
const linkNavCont = document.querySelector('#linkNav-cont');
const windowUl = document.querySelector('.links');

function openWindow() {
  windowUl.classList.add('show');
}

function closeWindow() {
  windowUl.classList.remove('show');
}

closeBtn.addEventListener('click', closeWindow);
openBtn.addEventListener('click', openWindow);
linkNavPort.addEventListener('click', closeWindow);
linkNavAbout.addEventListener('click', closeWindow);
linkNavCont.addEventListener('click', closeWindow);

/* Contact validation */

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const small = document.getElementById('small');

function checkInput() {
  const emailValue = email.value.trim();

  if (emailValue !== emailValue.toLowerCase()) {
    small.classList.add('displayError');
    return false;
  }

  small.classList.remove('displayError');
  return true;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkInput()) {
    form.submit();
  }
});

/* Preserve Form Data */
const nameForm = document.getElementById('fullname');
