import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { register } from "../api/api.js";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

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

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);  // check if data comes correct from the form and goes correct for the validations and to the server

    const notification = document.querySelector('.notification');
    
    if (formData.email === '' || formData.password === '' || formData['re-password'] === '') {  //check if validations are the same
      notification.style.display = 'block';
      notification.querySelector('span').textContent = "Fields cannot be empty.";
      setTimeout(() => {
          notification.querySelector('span').textContent = 'MESSAGE';
          notification.style.display = 'none';
      }, 3000);
        return;
    }

    if (formData.password !== formData['re-password']) {    //check if validations are the same
      notification.style.display = 'block';
      notification.querySelector('span').textContent = "Passwords don\'t match";
      setTimeout(() => {
          notification.querySelector('span').textContent = 'MESSAGE';
          notification.style.display = 'none';
      }, 3000);
        return;
    }

    const response = await register(formData.email, formData.password); // check if data comes correct from the form and goes correct to the server

    if (response) {
        localStorage.setItem('userData', JSON.stringify(response));
        page.redirect('/');
    }
    // else{
    //   notification.style.display = 'block';
    //   notification.querySelector('span').textContent = "Fields cannot be empty.";
    //   setTimeout(() => {
    //       notification.querySelector('span').textContent = 'MESSAGE';
    //       notification.style.display = 'none';
    //   }, 3000);
    // }
}