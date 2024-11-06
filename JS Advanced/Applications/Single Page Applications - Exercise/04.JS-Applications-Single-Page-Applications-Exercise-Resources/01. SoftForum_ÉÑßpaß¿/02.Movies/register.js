import { home, topNavigation } from "./home.js";

export function register() {
    // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
    // divToAttachUl.innerHTML = '';

    const registerView = document.querySelector('#form-sign-up');
    const allViewSections = document.querySelectorAll('.view-section');
    allViewSections.forEach(section => {
        section.style.display = 'none';
    })
    registerView.style.display = 'block';

    const emailInput = registerView.querySelector('#email');
    const passwordInput = registerView.querySelector('#password');
    const rePasswordInput = registerView.querySelector('#repeatPassword');
    const registerButton = registerView.querySelector('button');

    registerButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const isPasswordsSame = passwordInput.value === rePasswordInput.value;

        if (emailInput.value === '' || passwordInput.value.length < 6 || !isPasswordsSame) {
            emailInput.value = '';
            passwordInput.value = '';
            rePasswordInput.value = '';
            alert('Invalid email or password');
            return;
        }
        const registerURL = 'http://localhost:3030/users/register';

        try {
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

            emailInput.value = '';
            passwordInput.value = '';
            rePasswordInput.value = '';

            if (data.accessToken) {
                localStorage.setItem('email', data.email);
                localStorage.setItem('id', data._id);
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('logged', true);
                // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
                // divToAttachUl.innerHTML = '';
                home();
                topNavigation()
            }
            else {
                alert('Invalid email or password');
            }
        }
        catch (err) {
            alert(err.message);
        }
    })
}