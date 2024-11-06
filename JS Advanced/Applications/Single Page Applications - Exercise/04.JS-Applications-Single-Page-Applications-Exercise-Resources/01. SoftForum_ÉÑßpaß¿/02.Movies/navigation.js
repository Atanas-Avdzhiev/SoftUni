import { register } from "./register.js";
import { login } from "./login.js";
import { logout } from "./logout.js";
import { home, topNavigation } from "./home.js";
import { addMovie } from "./addMovie.js";

function view() {
    // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
    // divToAttachUl.innerHTML = '';
    home();
    topNavigation();

    const moviesButton = document.querySelector('.navbar-brand.text-light'); // button which redirects to the homepage
    moviesButton.addEventListener('click', (e) => {
        e.preventDefault();
        const ul = document.querySelector('#movies-list');
        ul.innerHTML = '';
        home();
        topNavigation();
    })

    const registerButton = document.querySelector('#a-register');
    registerButton.addEventListener('click', register);

    const loginButton = document.querySelector('#a-login');
    loginButton.addEventListener('click', login);

    const logoutButton = document.querySelector('#a-logout');
    logoutButton.addEventListener('click', logout);

    const addMovieButton = document.querySelector('#add-movie-btn');
    addMovieButton.addEventListener('click', addMovie);
}
view();