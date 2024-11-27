const coursesBtn = document.getElementById("courses-btn");
const projectsBtn = document.getElementById("projects-btn");
const workingBtn = document.getElementById("working-btn");
const membersBtn = document.getElementById("members-btn");
const concernsBtn = document.getElementById("concerns-btn");

coursesBtn.addEventListener("click", () => {

    projectsBtn.classList.add("bg-white", "text-red-500");
  coursesBtn.classList.add("bg-red-500", "text-white");

  projectsBtn.classList.remove("bg-red-500", "text-white");
  coursesBtn.classList.remove("bg-white", "text-red-500");
 
});

projectsBtn.addEventListener("click", () => {
    coursesBtn.classList.add("bg-white", "text-red-500");
    projectsBtn.classList.add("bg-red-500", "text-white");
  
    coursesBtn.classList.remove("bg-red-500", "text-white");
    projectsBtn.classList.remove("bg-white", "text-red-500");
  
});

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
