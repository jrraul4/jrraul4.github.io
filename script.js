 /*Menu Window*/ 
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

/* Projects Section/Generate Cards */
const projects = [
  {
    name: 'My Recent Works',
    other: 'Multi-Post Stories',
    img: 'img/main-project-img.png',
    imgPosition: '',
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['CSS', 'HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },
];