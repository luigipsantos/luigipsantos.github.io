const sections = {
  about: `
ABOUT ME
--------

Name: Your Name
Role: Developer
Interests:
- Web
- Low-level systems
- Retro tech
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

Email: you@email.com
GitHub: github.com/yourname
  `
};

function showSection(section) {
  document.getElementById("content").textContent = sections[section];
}
