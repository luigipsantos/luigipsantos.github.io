const sections = {
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

function showSection(section) {
  document.getElementById("content").textContent = sections[section];
}
