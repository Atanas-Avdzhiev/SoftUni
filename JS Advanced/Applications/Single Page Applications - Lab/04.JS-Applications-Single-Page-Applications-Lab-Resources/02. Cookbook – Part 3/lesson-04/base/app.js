import { loadRecipes } from './home.js';
import { login } from './login.js';
import { register } from './register.js';
import { createRecipe } from './createRecipe.js';
import { logout } from './logout.js';

function initNavigation() {
    renderNavigation();
    const navElement = document.querySelector('header nav');
    navElement.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') { // .target instead of .currentTarget to get the most-inside element which is clicked
            return;
        }
        e.preventDefault();
        const url = new URL(e.target.href)
        console.log(url.pathname)
        if (url.pathname === '/recipes') {
            loadRecipes();
        }
        else if (url.pathname === '/login') {
            login();
        }
        else if (url.pathname === '/register') {
            register();
        }
        else if (url.pathname === '/create') {
            createRecipe();
        }
        else if (url.pathname === '/logout') {
            logout();
        }
    })
}
initNavigation();

function renderNavigation() {
    const email = localStorage.getItem('email');
    const userNavigation = document.querySelector('#user');
    const guestNavigation = document.querySelector('#guest');

    if (email && email !== 'undefined') {
        guestNavigation.style.display = 'none';
        userNavigation.style.display = 'inline';
    }
    else {
        guestNavigation.style.display = 'inline';
        userNavigation.style.display = 'none';
    }
}