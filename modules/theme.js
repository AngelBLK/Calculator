const themeBtn = document.getElementById("btn-theme");
const bgCalculator = document.getElementById("page");
const bgDisplay = document.querySelector(".display");
const bgBtn = document.querySelectorAll(".btn");

themeBtn.addEventListener('click', () => {   

   bgCalculator.classList.toggle('light');
   bgDisplay.classList.toggle('light');
   bgBtn.forEach(bgBtn => {
      bgBtn.classList.toggle('light');
   });
   themeBtn.classList.toggle('active');
})