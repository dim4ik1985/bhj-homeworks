let dropList = document.querySelectorAll('.dropdown__list'),
    value = '';


function getList() {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
}

function isNewValue(value) {
     document.querySelector('.dropdown__value').textContent = value;
}


document.querySelector('.dropdown__value').addEventListener("click", getList);
Array.from(dropList).forEach(e => {
    e.addEventListener("click", (event) => {
        value = (event.target).textContent;
        event.preventDefault();
        getList();
        isNewValue(value);
    })
})