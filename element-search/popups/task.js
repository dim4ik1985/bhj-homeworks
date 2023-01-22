const modalMain = document.getElementById('modal_main'),
    modalSuccess = document.getElementById('modal_success'),
    close = document.querySelectorAll('.modal__close'),
    success = document.querySelector('.show-success');


modalMain.classList.add('modal_active')

close.forEach(elem => {
    elem.onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
})


success.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

