const email = document.getElementById('id-email');
const password = document.getElementById('id-password');
const form = document.getElementById('id-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const keepLoggedIn = document.getElementById('id-keep-logged').checked;
    if (keepLoggedIn) {
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('keepLoggedIn', 'true');
    }
    else {
        localStorage.setItem('keepLoggedIn', 'false');
    }
    window.location.href = './main-page.html';
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('password'));
    console.log(localStorage.getItem('keepLoggedIn'));
})
