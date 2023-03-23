const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener('click', function(){
    navMenu.classList.add('show')
})

function linkAction() {
    navLink.forEach(link => link.classList.remove('active'));
    this.classList.add('active');

    navMenu.classList.toggle('show');
  }
  
  
  navLink.forEach(link => link.addEventListener('click', linkAction));


