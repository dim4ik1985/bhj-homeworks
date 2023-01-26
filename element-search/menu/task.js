const menuLink = document.querySelectorAll('.menu__link');

Array.from(menuLink).forEach(item => item.onclick = () => {

    if (item.nextElementSibling.classList.length < 3) {
        closeAllSubMenu();
        item.closest('.menu__item').lastElementChild.classList.add('menu_active')

        return false;
    }
    if (item.nextElementSibling.classList.length === 3) {
        item.closest('.menu__item').lastElementChild.classList.remove('menu_active')

        return false;
    }

})

function closeAllSubMenu(){
    const subMenu = document.querySelectorAll('.menu_sub');
    Array.from(subMenu).forEach(item => item.classList.remove('menu_active'))
}



















//     menuSub = document.querySelectorAll('.menu_sub');
//
//
// for (let i=0; i < menuLink.length; i++) {
//     const menuItem = menuLink[i].closest('.menu__item');
//
//     menuLink[i].onclick = () => {
//         // menuSub.forEach(elem => {
//         //     elem.classList.toggle('menu_active');
//         //     }
//         // );
//
//         if (menuItem.querySelector('.menu_sub')) {
//             console.log(menuItem.querySelector('.menu_sub'))
//             menuItem.querySelector('.menu_sub').classList.toggle('menu_active');
//             return false
//         }
//     }
// }





