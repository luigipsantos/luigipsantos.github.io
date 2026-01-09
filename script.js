const sections = {
  main: `
  WELCOME
  
  > SELECT OPTION
  `,

  about: `
ABOUT ME
--------

Name: Luís Filipe Pereira dos Santos
Role: Developer
Interests:
- Full-stack Java developer
- Low-level systems
- More!
  `,

  projects: `
PROJECTS
--------

1. Project One
   - Short description

2. Project Two
   - Short description
  `,

  contact: `
CONTACT
-------

Email: luigipsantos@gmail.com
GitHub: github.com/luigipsantos
  `
};

// New: Typewriter effect function
function typeWriter(text, element, speed = 30) {
  element.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// New: Play click sound (optional - add audio file)
function playClickSound() {
  const click = new Audio();
  click.src = 'click.wav'; // Optional: add a click sound file
  click.volume = 0.3;
  click.play().catch(e => console.log("Audio play failed:", e));
}

function showSection(section) {
  playClickSound();
  const content = document.getElementById("content");
  content.style.opacity = "0.5";
  
  setTimeout(() => {
    typeWriter(sections[section], content);
    content.style.opacity = "1";
  }, 200);
}

function showMainMenu() {
  playClickSound();
  const content = document.getElementById("content");
  content.style.opacity = "0.5";
  
  setTimeout(() => {
    typeWriter(sections.main, content);
    content.style.opacity = "1";
  }, 200);
}

// Initialize with main menu
window.onload = function() {
  const content = document.getElementById("content");
  typeWriter(sections.main, content, 50);
  
  // New: Add random CRT flicker
  setInterval(() => {
    const flicker = document.querySelector('.flicker');
    if (Math.random() > 0.7) {
      flicker.style.animation = 'flicker 0.1s';
      setTimeout(() => {
        flicker.style.animation = 'none';
      }, 100);
    }
  }, 3000);
};