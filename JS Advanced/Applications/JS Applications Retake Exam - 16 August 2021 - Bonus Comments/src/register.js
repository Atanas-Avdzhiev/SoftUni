import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { register } from "../api/api.js";

const main = document.querySelector('body > #box > #main-content');  // probably need to change this

const template = (formHandler) => html`
<section id="register-page" class="content auth">
    <form @submit=${formHandler} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>
`;

export function registerView() {
    render(template(registerHandler), main);
}

async function registerHandler(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);  // check if data comes correct from the form and goes correct for the validations and to the server

    if (formData.email === '' || formData.password === '' || formData['confirm-password'] === '') {  //check if validations are the same
        alert('All fields are required!');
        return;
    }

    if (formData.password !== formData['confirm-password']) {    //check if validations are the same
        alert('Passwords do not match!');
        return;
    }

    const response = await register(formData.email, formData.password); // check if data comes correct from the form and goes correct to the server

    if (response.accessToken) {
        localStorage.setItem('userData', JSON.stringify(response));
        page.redirect('/');
    }
}