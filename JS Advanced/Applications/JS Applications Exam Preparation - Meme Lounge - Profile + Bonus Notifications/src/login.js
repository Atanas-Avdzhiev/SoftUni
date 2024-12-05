import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { login } from "../api/api.js";

const main = document.querySelector('body > #container > main');  // probably need to change this

const template = (formHandler) => html`
<section id="login">
    <form @submit=${formHandler} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
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

    const notification = document.querySelector('.notification');

    if (formData.email === '' || formData.password === '') {    //check if validations are the same
        notification.style.display = 'block';
        notification.querySelector('span').textContent = "All fields are required!";
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
        return;
    }

    const response = await login(formData.email, formData.password);    // check if data comes correct from the form and goes correct to the server

    if (response) {
        localStorage.setItem('userData', JSON.stringify(response));
        page.redirect('/dashboard');
    }
}