const chat = document.querySelector('.chat-widget');
const inputUser = document.getElementById('chat-widget__input');
const message = document.getElementById('chat-widget__messages');
const messagesBot = [
    'Добрый день!',
    'Очень слушаю вас',
    'Не рад вас слышать',
    'Кто ты?',
    'Никого нет дома)))',
    'Бот устал',
    'У нас неполадки и надолго',
    'Буду рад вам помочь, но позже!!!',
];

let date = new Date();
let house = date.getHours();
let minutes = date.getMinutes();
let timer;
console.log(Math.floor(Math.random() * messagesBot.length))


chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
})

inputUser.addEventListener('change', () => {
    if (inputUser.value.trim()) {
        message.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${house}:${minutes}</div>
        <div class="message__text">${inputUser.value}</div>
    </div>
    <div class="message">
        <div class="message__time">${house}:${minutes}</div>
        <div class="message__text">${messagesBot[Math.floor(Math.random() * messagesBot.length)]}</div>
    </div>               
    `;
        inputUser.value = '';
        document.getElementById('chat-widget__messages').scrollIntoView(false)
    }
})

