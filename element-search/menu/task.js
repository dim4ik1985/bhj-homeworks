const menuLink = document.querySelectorAll('.menu__link');

Array.from(menuLink).forEach(item => {
    item.addEventListener("click", (event) => {
        let menuSub = item.closest('.menu__item').querySelector('.menu_sub');

        if (menuSub) {
            if (menuSub.className.includes('menu_active')) {
                closeAllSubMenu();
                item.closest('.menu__item').lastElementChild.classList.remove('menu_active');
                event.preventDefault();
            } else {
                closeAllSubMenu();
                item.closest('.menu__item').lastElementChild.classList.add('menu_active');
                event.preventDefault();
            }
        } else {
            closeAllSubMenu();
        }
    })
})

function closeAllSubMenu(){
    const subMenu = document.querySelectorAll('.menu_sub');
    Array.from(subMenu).forEach(item => item.classList.remove('menu_active'))
}








