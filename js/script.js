const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
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