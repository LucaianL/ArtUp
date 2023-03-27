const modalTriggers = document.querySelectorAll('.modal-trigger');
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.close-modal');

modalTriggers.forEach(modalTrigger => {
    modalTrigger.addEventListener('click', () => {
        modal.style.display = 'block';
    })
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});