import { home, topNavigation } from "./home.js";

export function login() {
    // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
    // divToAttachUl.innerHTML = '';

    const loginView = document.querySelector('#form-login');
    const allViewSections = document.querySelectorAll('.view-section');
    allViewSections.forEach(section => {
        section.style.display = 'none';
    })
    loginView.style.display = 'block';

    const emailInput = loginView.querySelector('#email');
    const passwordInput = loginView.querySelector('#password');
    const loginButton = loginView.querySelector('button');

    emailInput.value = '';
    passwordInput.value = '';

    loginButton.addEventListener('click', async (e) => {
        e.preventDefault();

        // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
        // divToAttachUl.innerHTML = '';

        if (emailInput.value === '' || passwordInput.value === '') {
            emailInput.value = '';
            passwordInput.value = '';
            alert('Email or password cant be blank.');
            return;
        }
        const loginURL = 'http://localhost:3030/users/login';
        try {
            const res = await fetch(loginURL, {
                method: 'POST',
                body: JSON.stringify({
                    email: emailInput.value,
                    password: passwordInput.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            localStorage.setItem('email', data.email);
            localStorage.setItem('id', data._id);
            localStorage.setItem('accessToken', data.accessToken);
            emailInput.value = '';
            passwordInput.value = '';
            if (data.accessToken) {
                localStorage.setItem('logged', true);
                // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
                // divToAttachUl.innerHTML = '';
                home();
                topNavigation();
            }
            else {
                alert('Invalid username or password');
            }
        }
        catch (err) {
            alert(err.message);
        }
    })
}