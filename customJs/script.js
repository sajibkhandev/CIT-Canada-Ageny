const coursesBtn = document.getElementById("courses-btn");
const projectsBtn = document.getElementById("projects-btn");
const workingBtn = document.getElementById("working-btn");
const membersBtn = document.getElementById("members-btn");
const concernsBtn = document.getElementById("concerns-btn");

const projectPart = document.getElementById("project-part");
const coursePart = document.getElementById("course-part");

const workingPart = document.getElementById("working-part");
const memberPart = document.getElementById("member-part");
const concrenPart = document.getElementById("concren-part");



// Our Service Function Start
coursesBtn.addEventListener("click", () => {
  projectsBtn.classList.add("bg-white", "text-red-500");
  coursesBtn.classList.add("bg-red-500", "text-white");

  projectsBtn.classList.remove("bg-red-500", "text-white");
  coursesBtn.classList.remove("bg-white", "text-red-500");

  projectPart.classList.add("hidden")
  coursePart.classList.remove("hidden")
  
 
});

projectsBtn.addEventListener("click", () => {
    coursesBtn.classList.add("bg-white", "text-red-500");
    projectsBtn.classList.add("bg-red-500", "text-white");
  
    coursesBtn.classList.remove("bg-red-500", "text-white");
    projectsBtn.classList.remove("bg-white", "text-red-500");

    projectPart.classList.remove("hidden")
    coursePart.classList.add("hidden")
  
});
// Our Service Function end




function toggleActiveButton(activeButton) {
    
    [workingBtn, membersBtn, concernsBtn].forEach((btn) => {
      btn.classList.remove("bg-red-500", "text-white");
      btn.classList.add("bg-white", "text-red-500");
    });
  
    
    activeButton.classList.add("bg-red-500", "text-white");
    activeButton.classList.remove("bg-white", "text-red-500");
  }
  
 
  workingBtn.addEventListener("click", () => toggleActiveButton(workingBtn));
  membersBtn.addEventListener("click", () => toggleActiveButton(membersBtn));
  concernsBtn.addEventListener("click", () => toggleActiveButton(concernsBtn));



// Responsive Button Start
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
// Responsive Button Start


// Responsive Button Start

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  
});
// Responsive Button Start