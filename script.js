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
