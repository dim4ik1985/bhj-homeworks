let dead = document.getElementById('dead'),
    lost = document.getElementById('lost'),
    hole = document.querySelectorAll('.hole')



hole.forEach((elem) => {
    elem.onclick = () => {
        if (elem.classList.contains('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
            if (+dead.textContent === 10) {
                alert('Победа!!!');
                lost.textContent = '0';
                dead.textContent = '0';
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (+lost.textContent === 5) {
                alert('Game Over!!!!');
                lost.textContent = '0';
                dead.textContent = '0';
            }
        }

    }
})




