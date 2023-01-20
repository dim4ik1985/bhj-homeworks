const timer = document.getElementById('timer')
console.log(timer)

let timerId = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1
}, 1000);

setTimeout(() => {
    clearInterval(timerId);
    alert('Вы победили в конкурсе!');
}, (timer.textContent + 1) * 100)