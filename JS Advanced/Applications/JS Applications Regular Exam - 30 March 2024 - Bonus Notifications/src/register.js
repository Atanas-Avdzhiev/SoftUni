import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

const main = document.querySelector('#main-element');

const template = (formHandler) => html`
            <section id="register">
                <div class="form">
                    <h2>Register</h2>
                    <form @submit=${formHandler} class="register-form">
                        <input type="text" name="email" id="register-email" placeholder="email" />
                        <input type="password" name="password" id="register-password" placeholder="password" />
                        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                        <button type="submit">register</button>
                        <p class="message">Already registered? <a href="/login">Login</a></p>
                    </form>
                </div>
            </section>
`;

export function registerView() {
    render(template(registerHandler), main);
}

async function registerHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const notification = document.querySelector('.notification');

    if (data.password !== data['re-password']) {
        notification.style.display = 'block';
        notification.querySelector('span').textContent = "Passwords don't match"
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
        return;
    }

    if (data.email === '' || data.password === '' || data['re-password'] === '') {
        notification.style.display = 'block';
        notification.querySelector('span').textContent = "Passwords don't match"
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
        return;
    }

    const registerURL = 'http://localhost:3030/users/register';

    const res = await fetch(registerURL, {
        method: 'POST',
        body: JSON.stringify({
            email: data.email,
            password: data.password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const serverData = await res.json();
    if (serverData.accessToken) {
        localStorage.setItem('userData', JSON.stringify(serverData));
        page.redirect('/');
    }
    else {
        notification.style.display = 'block';
        notification.querySelector('span').textContent = serverData.message;
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
    }
}