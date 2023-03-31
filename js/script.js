
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // remove a classe 'active' de todos os links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // adiciona a classe 'active' ao link que foi clicado
        this.classList.add('active');

    });
});


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/assets/hamburgMenu.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "/assets/closeMenu.svg"
    }
}