import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { navigationView } from "./navigation.js";

const main = document.querySelector('#main-element');

const template = html`
            <section id="register">
                <div class="form">
                    <h2>Register</h2>
                    <form @submit=${registerHandler} class="register-form">
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
    render(template, main);
}

async function registerHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.password !== data['re-password']) {
        window.alert("Passwords don't match");
        return;
    }

    if (data.email === '' || data.password === '' || data['re-password'] === '') {
        window.alert("Passwords don't match");
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
        navigationView();
        page.redirect('/');
    }
    else {
        alert(serverData.message);
    }
}