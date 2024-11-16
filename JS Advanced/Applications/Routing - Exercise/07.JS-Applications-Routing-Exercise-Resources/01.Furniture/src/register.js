import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { navigation } from '../app.js';

const body = document.querySelector('body .container');

const template = html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input @click=${registerHandler} type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
`;

export function register() {
    render(template, body);
}

async function registerHandler(e) {
    e.preventDefault();

    const emailInput = document.querySelector('body form input[id="email"]');
    const passwordInput = document.querySelector('body form input[id="password"]');
    const rePasswordInput = document.querySelector('body form input[id="rePass"]');

    if (emailInput.value === '' || passwordInput.value === '' || rePasswordInput.value === '') {
        alert('Fields cant be empty.');
        return;
    }
    if (passwordInput.value !== rePasswordInput.value) {
        alert('Password does not match.');
        return;
    }

    const registerURL = 'http://localhost:3030/users/register';

    const res = await fetch(registerURL, {
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