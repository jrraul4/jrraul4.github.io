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

const cardsContent = `
<section class="work-section" id="Portfolio">
<h2>My Recent Works</h2>
<div class="separator"></div>

<div class="main-project">
  <div class='cardContent'>
    <div id="main-project-img"><img src="img/main-project-img.png" alt="Project image"></div>
    <div class="main-project-content">
      <h3>Multi-Post Stories</h3>
      <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
      <ul class="main-project-features">
        <li class="features-main"><a>CSS</a></li>
        <li class="features-main"><a>HTML</a></li>
        <li class="features-main"><a>Bootstrap</a></li>
        <li class="features-main"><a>Ruby</a></li>
      </ul>
      <button class="button-main-project">See Project</button>
    </div>
  </div> 
</div> 
`;

const insertCardsContent = () => {
  const container = document.querySelector('.work-section');

  container.innerHTML = cardsContent;
};

insertcardsContent();
const projects = [

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

const cardsContainer = document.querySelector('.projects');

const cardsHTML = cards.map((project) => `
  <div class = .projects>
    <h2 class=".projects h3">${project.name}</h2>
    <p class=".projects p">${project.shortDescription}</p>
    <img class="img-feature" src="${project.img}" alt="${project.name}">
    <ul class="main-project-features">
      ${project.technologies.map((technology) => `<li>${technology}</li>`).join('')}
    </ul>
    <a class="links" href="${project.liveLink}" target="_blank">Ver proyecto</a>
    <a class="links" href="${project.source}" target="_blank">Ver código fuente</a>
    <button class="button-projects">See project</button>
  </div>
`).join('');

cardsContainer.innerHTML = cardsHTML;

const body = document.querySelector('body');
const openModal = document.querySelectorAll('.button-projects');
openModal.forEach((button) => {
  button.addEventListener('click', () => {
    const popSection = document.createElement('div');
    const popUp = document.createElement('div');
    popUp.innerHTML = `
    <section class="eachWork" >
    <div class="eachWork_Content">
      <div class="content2">
        <h2 class="subtitle-pop1">Multi Post Stories</h2>
        <h2 class="subtitle-pop2">Keeping track of hundreds  of components website</h2>
        <img onclick="closePopup(); "class="close-button" src="img/close.png" alt="">
        <ul class="tecnologies"> 
          <li>HTML</li>
          <li>Bootstrap</li>
          <li>Ruby on Rails</li>
        </ul>

        <div class="description">
          <div class="eachWorkImgContent">
            <img class ="eachWorkImg" src="img/Snapshoot Portfolio.png" alt="" srcset="">
          </div>
          <div class="container_inf_button">
            <p class="description-p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
            <p class="description-p2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
            <div class="containerEachWorkButton">
              <a href="https://jrraul4.github.io/" target="_blank"><button id="liveBtn" class="liveBtn">See live<img src="img/Icon-see live.png"></button></a>
              <a href="https://github.com/jrraul4" target="_blank"><button id="sourceBtn">See source<img src="img/Vector.png"></button></a>
            </div>
          </div>
        </div>
        
    </div>
  </section>
          `;
    popSection.appendChild(popUp);
    body.appendChild(popSection);
    const popCloseButton = popSection.querySelector('.close-button');
    popCloseButton.addEventListener('click', () => {
      popSection.remove();
    });
  });
});

