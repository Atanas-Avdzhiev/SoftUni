import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { navigation } from '../app.js';

const body = document.querySelector('body .container');

const template = html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input @click=${loginHandler} type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`;

export function login() {
    render(template, body);
}

async function loginHandler(e) {
    e.preventDefault();

    const emailInput = document.querySelector('body form input[id="email"]');
    const passwordInput = document.querySelector('body form input[id="password"]');

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Fields cant be empty.');
        return;
    }

    const loginURL = 'http://localhost:3030/users/login';

    const res = await fetch(loginURL, {
        method: 'POST',
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    if (data.email) {
        localStorage.setItem('userData', JSON.stringify(data));
        navigation();
        page.redirect('/dashboard');
    }
    else {
        alert(data.message);
    }
}