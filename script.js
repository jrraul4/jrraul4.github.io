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

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    imgPosition: '',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    imgPosition: '',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    imgPosition: '',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    imgPosition: '',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    imgPosition: '',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    imgPosition: '',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },
];

const cardsContainer = document.getElementById('Portfolio');

let project = projects[index];
let projectName = project.name;
let projectOther = project.other;
let projectDescription = project.shortDescription;
let projectImage = project.img;
let projectImagePosition = project.imgPosition;
let projectLiveLink = project.liveLink;
let projectSource = project.source;

for (let i = 1; i <= projects.length; i += 1) {
const cardContent = `
  <div class="projects${project.imgPosition}">
    <div class="project-background-normal">
      <img src="${project.img}" alt="Project number ${i} image">
    </div>
    <div class="project-features">
      <h2>${project.name}</h2>
      <p class="projects p">${project.shortDescription}</p>
      <ul class="features">
        ${project.technologies.map((element) => `<li><a>${element}</a></li>`).join('')}
      </ul>
      <button class="button-projects projectButtons">See Project</button>
    </div>
  </div>
`;
cardsContainer.innerHTML += cardContent;
}