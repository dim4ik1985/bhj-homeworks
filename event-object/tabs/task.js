const tabs = document.getElementById('tabs1'),
    tab = Array.from(document.querySelectorAll('.tab')),
    tabCont = Array.from(document.querySelectorAll('.tab__content'))

tab.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        removeActive(elem, index);
        elem.classList.add('tab_active');
        tabCont[index].classList.add('tab__content_active');
    })
})


function removeActive() {
    tab.forEach(e => {
        e.classList.remove('tab_active');
    })
    tabCont.forEach(em => {
        em.classList.remove('tab__content_active');
    })
}
