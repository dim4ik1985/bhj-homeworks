const rotator = document.querySelector('.rotator'),
    rotatorCases = Array.from(rotator.querySelectorAll('.rotator__case'));

let counter = 0;

setInterval(rotatorCase, 1000);

function rotatorCase() {
    removeActive();
    if (counter < rotatorCases.length) {
        rotatorCases[counter].style.color = rotatorCases[counter].getAttribute('data-color');
        rotatorCases[counter].classList.add('rotator__case_active');
        counter++;
    }

    if (counter >= rotatorCases.length) {
        counter = 0;
    }
}

function removeActive() {
    Array.from(document.querySelectorAll('.rotator__case')).forEach(e => {
        e.classList.remove('rotator__case_active')
    })
}