const modalTriggers = document.querySelectorAll('.modal-trigger');
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.buttons-modal-cancel');



modalTriggers.forEach(modalTrigger => {
    modalTrigger.addEventListener('click', () => {
        modal.style.display = 'block';
    })
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/assets/hamburgMenu.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "/assets/closeMenu.svg"
    }
}