const sliderArrow = document.querySelectorAll('.slider__arrow'),
    sliderItems = document.querySelectorAll('.slider__item');

let counter = 0;

const getStepNext = (count, arrItems) => {
    if (count < arrItems.length) {
        Array.from(arrItems)[count].classList.add('slider__item_active');
        Array.from(arrItems)[count - 1].classList.remove('slider__item_active');
    } else {
        Array.from(arrItems)[0].classList.add('slider__item_active');
        Array.from(arrItems)[arrItems.length - 1].classList.remove('slider__item_active');
    }
},

    getStepPrev = (count, arrItems) => {
    if (count >= 0) {
        Array.from(sliderItems)[count].classList.add('slider__item_active');
        Array.from(sliderItems)[count + 1].classList.remove('slider__item_active');
    } else {
        Array.from(arrItems)[arrItems.length - 1].classList.add('slider__item_active');
        Array.from(arrItems)[0].classList.remove('slider__item_active');
    }
};

Array.from(sliderArrow).forEach(elem => {
    elem.addEventListener("click", () => {
        if (elem.className.includes('next') && counter < sliderItems.length) {
            counter++;
            getStepNext(counter, sliderItems);
            if (counter === sliderItems.length) { counter = 0 }
        }


        if (elem.className.includes('prev') && counter > -1) {
            counter--;
            getStepPrev(counter, sliderItems);
            if (counter < 0) { counter = sliderItems.length - 1 }
        }
    })
})
