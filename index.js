// Global Variables
const menuButtons = document.querySelectorAll('.menu')
const backArrow = document.getElementById('back-arrow');
const menu = document.getElementById('menu');
const projects = document.querySelectorAll('.project');
const projectExpandButtons = document.querySelectorAll('.project-expand-button');
const projectExpandDowns = document.querySelectorAll('.project-expand-down');
const projectExpandUps = document.querySelectorAll('.project-expand-up');
const projectTitlesExpanded = document.querySelectorAll('.project-title-expanded');
const projectDescriptionsExpanded = document.querySelectorAll('.project-description-expanded');
const projectTitles = document.querySelectorAll('.project-title');
const projectDescriptions = document.querySelectorAll('.project-description');
const launchAppButtons = document.querySelectorAll('.launch-app')

// Event Listeners

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    menu.classList.toggle('visible'); // Toggle Menu
  })
})

backArrow.addEventListener('click', () => {
  menu.classList.toggle('visible'); // Toggle Menu
});

projects.forEach((project, i) => {
  project.addEventListener('click', (event) => {
    // Check if the clicked target is NOT the launch button
    if (!event.target.closest('.launch-app')) {
      // Target the corresponding elements for the current project
      const projectExpandDown = projectExpandDowns[i];
      const projectExpandUp = projectExpandUps[i];
      const projectTitle = projectTitles[i];
      const projectDescription = projectDescriptions[i];
      const projectTitleExpanded = projectTitlesExpanded[i];
      const projectDescriptionExpanded = projectDescriptionsExpanded[i];

      // Toggle classes for the current project
      projectExpandDown.classList.toggle('hidden'); // Toggle Expand Down Button
      projectExpandUp.classList.toggle('hidden'); // Toggle Expand Up Button
      project.classList.toggle('project-expanded'); // Toggle Project Container Styles
      projectTitle.classList.toggle('hidden'); // Toggle Project Title
      projectDescription.classList.toggle('hidden'); // Toggle Project Description
      projectTitleExpanded.classList.toggle('hidden'); // Toggle Project Title Expanded
      projectDescriptionExpanded.classList.toggle('hidden'); // Toggle Project Description Expanded

      // Toggle aria-expanded for accessibility
      const isExpanded = projectExpandDown.getAttribute('aria-expanded') === 'true';
      projectExpandDown.setAttribute('aria-expanded', !isExpanded);
    }
  });
});


