import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { navigationView } from "./navigation.js";

const main = document.querySelector('#main-element');

const template = html`
            <section id="login">
                <div class="form">
                    <h2>Login</h2>
                    <form @submit=${loginHandler} class="login-form">
                        <input type="text" name="email" id="email" placeholder="email" />
                        <input type="password" name="password" id="password" placeholder="password" />
                        <button type="submit">login</button>
                        <p class="message">
                            Not registered? <a href="/register">Create an account</a>
                        </p>
                    </form>
                </div>
            </section>
`;

export function loginView() {
    render(template, main);
}

async function loginHandler(e) {
    e.preventDefault();

    const notification = document.querySelector('.notification');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.email === '' || data.password === '') {
        notification.style.display = 'block';
        notification.querySelector('span').textContent = "Fields cannot be empty.";
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
        return;
    }

    const loginURL = 'http://localhost:3030/users/login';

    const res = await fetch(loginURL, {
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
        navigationView();
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