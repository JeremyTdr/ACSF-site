//--------- BURGER MENU ----------
const navSlide = () => {
    const burger = document.querySelector('.burger-btn');
    const nav = document.querySelector('.navbar-links');
    const navLinks = document.querySelectorAll('.navbar-links li');

    //Open burger menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    //Close when click on link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
        });
    });

}
navSlide();