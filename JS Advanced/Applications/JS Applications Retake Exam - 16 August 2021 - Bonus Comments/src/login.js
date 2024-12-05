import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { login } from "../api/api.js";

const main = document.querySelector('body > #box > #main-content');  // probably need to change this

const template = (formHandler) => html`
<section id="login-page" class="auth">
    <form @submit=${formHandler} id="login">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">
            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
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