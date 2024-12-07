import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { login } from "../api/api.js";

const main = document.querySelector('body > #content');  // probably need to change this

const template = (formHandler) => html`
        <section id="loginPage">
            <form @submit=${formHandler} class="loginForm">
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>
`;

export function loginView() {
    render(template(loginHandler), main);
}

async function loginHandler(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);  // check if data comes correct from the form and goes correct for the validations and to the server

    if (formData.email === '' || formData.password === '') {    //check if validations are the same
        alert('All fields are required!');
        return;
    }

    const response = await login(formData.email, formData.password);    // check if data comes correct from the form and goes correct to the server

    if (response.accessToken) {
        localStorage.setItem('userData', JSON.stringify(response));
        page.redirect('/');
    }
}