import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { login } from "../api/api.js";

const main = document.querySelector('body > #content > main');

const template = (formHandler) => html`
    <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${formHandler} class="login-form">
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
    render(template(loginHandler), main);
}

async function loginHandler(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);

    if (formData.email === '' || formData.password === '') {
        alert('All fields are required!');
        return;
    }

    const response = await login(formData.email, formData.password);

    if (response.accessToken) {
        localStorage.setItem('userData', JSON.stringify(response));
        page.redirect('/');
    }
    else {
        alert(response.message);
    }
}