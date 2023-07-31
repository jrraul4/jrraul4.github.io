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
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['CSS', 'HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },

  {
    name: 'Profesional Art Printing Data',
    img: 'img/project-background-normal.png',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'Ruby', 'Bootstrap'],
    liveLink: 'https://jrraul4.github.io',
    source: 'https://github.com/jrraul4/jrraul4.github.io',
  },
];

const cardsContainer = document.querySelector('#Portfolio');

function popUpAppear (index) {

  //Cambiar las clases por unas nuevas
  const mainProject = document.createElement('div');
  mainProject.classList.add('main-project');

  const cardContent = document.createElement('div');
  cardContent.classList.add('cardContent');

  let project = projects[index];
  let projectName = project.name;
  let projectDescription = project.shortDescription;
  let projectImage = project.img;
  let projectLiveLink = project.liveLink;
  let projectSource = project.source;
  let projectTech = project.technologies;

  cardContent.innerHTML = `
  <h3>${project.name}</h3>
  <p>${projectDescription}</p>
  <ul class="project-features">
    ${projectTech.map((element) => `<li>${element}</li>`).join('')}
  </ul>
  <div class='rhgfhgbn'>
    <button class="button-projects">See Project</button>
  </div>
  `;

  mainProject.appendChild('cardContent');
  cardsContainer.appendChild('mainProject');

  const button = cardContent.querySelector('rhgfhgbn');
  const closeButton = button.querySelector('zzzzzzzzzzz');

  closeButton.addEventListener('click', () => {
    mainProject.style.display = 'none';
    cardsContainer.removeChild('mainProject');
  });

  window.addEventListener('click',(ev) => {
    if (ev.target === mainProject){
      mainProject.style.display = 'none';
      cardsContainer.removeChild('mainProject');
    }
  })

};

function createProjects (projects, index){
   //Mantener clases originales del CSS
  const variable1DeLaFuncion = document.createElement('div');
  variable1DeLaFuncion.add('xxxxxx');

  const variable2DeLaFuncion= document.createElement('div');
  variable2DeLaFuncion.add('yyyyyy');
  variable2DeLaFuncion.add('yyyyyyyyy');
  let project = projects[index];
  let projectName = project.name;
  let projectDescription = project.shortDescription;
  let projectImage = project.img;
  let projectLiveLink = project.liveLink;
  let projectSource = project.source;
  let projectTech = project.technologies;

  variable2DeLaFuncion.innerHTML = `
  <h3>${projects[i].name}</h3>
  <p>${projectDescription}</p>
  <ul class="project-features">
    ${projectTech.map((element) => `<li>${element}</li>`).join('')}
  </ul>
  <div class='rhgfhgbn'>
    <button class="button-projects">See Project</button>
  </div>
  `;

  variable1DeLaFuncion.appendChild(variable2DeLaFuncion)
  const ButtonProjects = variable2DeLaFuncion.querySelector('button-projects');
  ButtonProjects.addEventListener('click', () => {
    popUpAppear(index);
  })

};

for(let i = 1; i < projects.length; i += 1) {
  const card = createProjects(projects[i], i);
  cardsContainer.appendChild(card);
}

const mainProject = document.createElement('div');
  mainProject.classList.add('main-project');

  const cardContent = document.createElement('div');
  cardContent.classList.add('cardContent');

  cardContent.innerHTML = `
  <h3>${projects[0].name}</h3>
  <p>${projectDescription}</p>
  <ul class="project-features">
    ${projectTech.map((element) => `<li>${element}</li>`).join('')}
  </ul>
  <div class='rhgfhgbn'>
    <button class="button-projects">See Project</button>
  </div>
  `;

  const ButtonProjects = variable2DeLaFuncion.querySelector('button-projects');
  ButtonProjects.addEventListener('click', () => {
    popUpAppear([0]);
  })

