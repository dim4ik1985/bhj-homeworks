const reveal = document.querySelectorAll('.reveal')

function isVisible(elem) {
    const { top, bottom } = elem.getBoundingClientRect();
    return !(bottom < 0 || top > window.innerHeight);
}

setInterval(() => {
    reveal.forEach(e => {
        if (isVisible(e)) {
            e.classList.add('reveal_active')
        } else {
            e.classList.remove('reveal_active')
        }
    })
}, 1000)