//BACK TO TOP ARROW
const topIcon = document.querySelector('.to-top')
window.addEventListener('scroll', showIcon)

topIcon.addEventListener('click', toTop)

function showIcon() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        topIcon.style.display = "block"
    } else {
        topIcon.style.display = "none"
    }
}
function toTop() {
    document.documentElement.scrollTop = 0
}

//MOVING TEXT
var options = {
    strings: ['<i>Developer</i> .', 'Programmer.',"Freelancer."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
  };
  
var typed = new Typed('#auto-type', options);


//NAV ON ACTIVE
const li = document.querySelectorAll(".nav-li")
const sec = document.querySelectorAll("section")

   function activeMenu() {
    let len = sec.length
    while(--len && window.scrollY +97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"))
    li[len].classList.add("active")
   }
activeMenu()
   window.addEventListener("scroll", activeMenu)