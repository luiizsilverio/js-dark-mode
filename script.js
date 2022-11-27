const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Event Listener

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    // document.documentElement.setAttribute('data-theme', 'dark');
    document.body.dataset['theme'] = 'dark';
    localStorage.setItem('js-theme', 'dark');
    darkMode();
  } else {
    // document.documentElement.setAttribute('data-theme', 'light');
    document.body.dataset['theme'] = 'light';
    localStorage.setItem('js-theme', 'light');
    lightMode();
  }
}

function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%';
  toggleIcon.children[0].textContent = 'Tema Escuro';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%';
  toggleIcon.children[0].textContent = 'Tema Claro';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// On Load
const currentTheme = localStorage.getItem('js-theme');

if (currentTheme) {
  document.body.dataset['theme'] = currentTheme;
}

if (currentTheme === "dark") {
  toggleSwitch.checked = true;
  darkMode();
}
