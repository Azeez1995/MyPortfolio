/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});
function toggleMode() {
    var body = document.body;
    var button = document.getElementById("dark-mode");
    var header = document.querySelector('.l-header');
    var navToggle = document.getElementById('nav-toggle');
    var bxElements = document.querySelectorAll('.bx');

    if (body.classList.contains("dark")) {
        // Toggle to light mode
        body.classList.remove("dark");
        button.innerHTML = '<i class="far fa-moon"></i>'; // Change the button to the moon icon

        // Remove the "white" class from all bx elements
        bxElements.forEach(function (bx) {
            bx.classList.remove("white");
        });

        // Remove the "dark" class from the header
        header.classList.remove("dark");
        // Remove the "dark" class from the nav-toggle
        navToggle.classList.remove("dark");
    } else {
        // Toggle to dark mode
        body.classList.add("dark");
        button.innerHTML = '<i class="fas fa-sun"></i>'; // Change the button to the sun icon

        // Add the "white" class to all bx elements
        bxElements.forEach(function (bx) {
            bx.classList.add("white");
        });

        // Add the "dark" class to the header
        header.classList.add("dark");
        // Add the "dark" class to the nav-toggle
        navToggle.classList.add("dark");
    }
}



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
