const navbar = document.querySelector('nav');

const navcolor = () => {
        navbar.classList.toggle('window-scroll', window.scrollY > 0);
}
                                                        
window.addEventListener('scroll',navcolor);

const faqs = document.querySelectorAll(".faq");

faqs.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle("active");
  });
})  

const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#menu-bar");
const closebtn = document.querySelector("#close-bar");

menubtn.addEventListener('click',() =>{
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
})

closebtn.addEventListener('click',() =>{
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
})