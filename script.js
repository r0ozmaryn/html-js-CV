const sysInfo = `Браузер: ${navigator.userAgent}, Платформа: ${navigator.platform}`;

localStorage.setItem('system_info', sysInfo);

document.getElementById('footer-info').innerText = localStorage.getItem('system_info');

const variant = 28;
const reviewsList = document.getElementById('reviews-list');

fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
    .then(res => res.json())
    .then(data => {
        data.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'review-card review-item';
            div.innerHTML = `<strong>${comment.name}</strong><p>${comment.body}</p>`;
            reviewsList.appendChild(div);
        });
    })
    .catch(error => console.error('Помилка завантаження:', error));

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contact-modal');
    setTimeout(() => {
        modal.style.display = 'flex';
    }, 6000);

    document.getElementById('close-modal').onclick = () => {
        modal.style.display = 'none';
    };
});



const themeBtn = document.getElementById('theme-toggle');
const hour = new Date().getHours();

if (hour < 7 || hour >= 21) {
    document.body.classList.add('dark-theme');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.innerText = document.body.classList.contains('dark-theme') ? '☀️' : '🌙'
});