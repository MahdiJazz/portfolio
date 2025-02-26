const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// Show menu
navToggle.addEventListener('click', () => { navMenu.classList.toggle('show'); })

// Hide menu
closeMenu.addEventListener('click', () => { navMenu.classList.remove('show'); })

// Remove menu mobile
const navLink = document.querySelectorAll('.nav-link');

function linkAction() { navMenu.classList.remove('show'); }
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
