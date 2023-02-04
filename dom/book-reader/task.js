const controlSize = document.querySelector('.book__control_font-size'),
    controlColor = document.querySelector('.book__control_color'),
    controlBg = document.querySelector('.book__control_background'),

    sizesText = controlSize.querySelectorAll('a'),
    colorsText = controlColor.querySelectorAll('a'),
    bg = controlBg.querySelectorAll('a');



sizesText.forEach(e => {
    e.addEventListener('click', (event) => {
        let lastClick = controlSize.querySelector('.font-size_active').dataset.size;

        removeActive(sizesText, lastClick);
        getChoiceSize(e);

        event.preventDefault();
    })
})

colorsText.forEach(e => {
    e.addEventListener('click', (event) => {
        let lastClick = controlColor.querySelector('.color_active').dataset.textColor;
        controlColor.querySelector('.color_active').classList.remove('color_active');
        document.querySelector('#book').classList.remove(`book_color-${lastClick}`);

        getChoiceColor(e);

        event.preventDefault()

    })
})

bg.forEach(e => {
    e.addEventListener('click', (event) => {
        let lastClick = controlBg.querySelector('.color_active').dataset.bgColor;
        controlBg.querySelector('.color_active').classList.remove('color_active');
        document.querySelector('#book').classList.remove(`book_bg-${lastClick}`)

        getChoiceBg(e);

        event.preventDefault()

    })
})

function removeActive(el, click) {
    document.querySelector('#book').classList.remove(`book_fs-${click}`);
    el.forEach(e => {
        e.classList.remove('font-size_active');
    })
}

function getChoiceSize(el) {
    el.classList.add('font-size_active');
    el.closest('#book').classList.add(`book_fs-${el.dataset.size}`)
}

function getChoiceColor(el) {
    el.classList.add('color_active');
    el.closest('#book').classList.add(`book_color-${el.dataset.textColor}`)
}

function getChoiceBg(el) {
    el.classList.add('color_active');
    el.closest('#book').classList.add(`book_bg-${el.dataset.bgColor}`)
}
