import auth from "../api/auth.js";

const baseUrl = 'http://localhost:3030/users';

const sectionElement = document.getElementById('register-section');
const registerForm = sectionElement.querySelector('form');

export default function registerPage() {
    sectionElement.style.display = 'block';
}

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    auth.register(formData.get('email'), formData.get('password'))
        .then(() => {
            location.href = '/'
        })
        .catch(err => alert(err.message));
})
