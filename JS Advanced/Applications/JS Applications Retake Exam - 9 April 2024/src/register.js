import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { register } from "../api/api.js";

const main = document.querySelector('body > #wrapper > main');

const template = (formHandler) => html`
    <section id="register">
        <div class="form">
          <img class="border" src="./images/border.png" alt="" />
          <h2>Register</h2>
          <form @submit=${formHandler} class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
    </section>
`;

export function registerView() {
    render(template(registerHandler), main);
}

async function registerHandler(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);

    if (formData.email === '' || formData.password === '' || formData['re-password'] === '') {
        alert('All fields are required!');
        return;
    }

    if (formData.password !== formData['re-password']) {
        alert('Passwords do not match!');
        return;
    }

    const response = await register(formData.email, formData.password);
    
    if (response.accessToken) {
        localStorage.setItem('userData', JSON.stringify(response));
        page.redirect('/');
    }
    else {
        alert(response.message);
    }
}