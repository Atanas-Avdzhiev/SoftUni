import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { register } from "../api/api.js";

const main = document.querySelector('body > #container > main');  // probably need to change this

const template = (formHandler) => html`
<section id="register">
    <form @submit=${formHandler} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
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

    const notification = document.querySelector('.notification');

    if (!Object.values(formData).every(value => !!value)) { //check if validations are the same, note this validation wont include select type options
        notification.style.display = 'block';
        notification.querySelector('span').textContent = "All fields are required!";
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
        return;
    }

    if (formData.password !== formData.repeatPass) {    //check if validations are the same
        notification.style.display = 'block';
        notification.querySelector('span').textContent = "Passwords do not match!";
        setTimeout(() => {
            notification.querySelector('span').textContent = 'MESSAGE';
            notification.style.display = 'none';
        }, 3000);
        return;
    }

    const data = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
    }
    const response = await register(data); // check if data comes correct from the form and goes correct to the server

    if (response) {
        localStorage.setItem('userData', JSON.stringify(response));
        page.redirect('/dashboard');
    }
}