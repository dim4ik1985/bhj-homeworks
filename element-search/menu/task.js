const menuLink = document.querySelectorAll('.menu__link');

Array.from(menuLink).forEach(item => item.onclick = () => {

    if (!item.nextElementSibling.className.includes('menu_active')) {
        // closeAllSubMenu();
        item.closest('.menu__item').lastElementChild.classList.add('menu_active')

        return false;
    }
    if (item.nextElementSibling.className.includes('menu_active')) {
        item.closest('.menu__item').lastElementChild.classList.remove('menu_active')

        return false;
    }

})

function closeAllSubMenu(){
    const subMenu = document.querySelectorAll('.menu_sub');
    Array.from(subMenu).forEach(item => item.classList.remove('menu_active'))
}






