import { loadRecipes } from './home.js';
import { login } from './login.js';
import { register } from './register.js';
import { createRecipe } from './createRecipe.js';
import { logout } from './logout.js';
import { homePage } from './homePage.js';

export function initNavigation() {
    renderNavigation();
    homePage();
    let navElement = document.querySelector('header nav');

    const newNav = navElement.cloneNode(true);
    navElement.replaceWith(newNav);
    navElement = newNav;

    navElement.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') { // .target instead of .currentTarget to get the most-inside element which is clicked
            return;
        }
        e.preventDefault();
        const url = new URL(e.target.href)

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
        else if (url.pathname === '/') {
            homePage();
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