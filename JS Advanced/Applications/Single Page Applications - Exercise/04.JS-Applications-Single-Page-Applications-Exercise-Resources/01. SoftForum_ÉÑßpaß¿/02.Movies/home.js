import { showDetails } from "./showDetails.js";

export async function home() {

    const allViewSections = document.querySelectorAll('.view-section');

    allViewSections.forEach(section => {
        section.style.display = 'block';
    })

    const addMovieView = document.querySelector('#add-movie');
    const movieDetails = document.querySelector('#movie-example');
    const editMovieView = document.querySelector('#edit-movie');
    const loginView = document.querySelector('#form-login');
    const registerView = document.querySelector('#form-sign-up');

    addMovieView.style.display = 'none';
    movieDetails.style.display = 'none';
    editMovieView.style.display = 'none';
    loginView.style.display = 'none';
    registerView.style.display = 'none';

    //showing all movies:

    const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
    divToAttachUl.innerHTML = '';
    const ulNew = document.createElement('ul');
    ulNew.setAttribute('class', 'card-deck d-flex justify-content-center');
    ulNew.id = 'movies-list';

    const moviesURL = 'http://localhost:3030/data/movies';
    const res = await fetch(moviesURL);
    const data = await res.json();

    data.forEach(movie => {
        const li = document.createElement('li');
        li.setAttribute('class', 'card mb-4');
        li.id = movie._id;
        li.title = movie._ownerId;

        const img = document.createElement('img');
        img.src = movie.img;
        img.setAttribute('class', 'card-img-top');
        img.alt = 'Card image cap';
        img.width = '400';

        const divBody = document.createElement('div');
        divBody.setAttribute('class', 'card-body');

        const h4 = document.createElement('h4');
        h4.setAttribute('class', 'card-title');
        h4.textContent = movie.title;
        //idk why there is a tag with href here, but for now I wont put it
        const divFooter = document.createElement('div');
        divFooter.setAttribute('class', 'card-footer');

        const detailsButton = document.createElement('button');
        detailsButton.type = 'button';
        detailsButton.setAttribute('class', 'btn btn-info');
        detailsButton.textContent = 'Details';

        detailsButton.addEventListener('click', () => showDetails(movie._id));

        divBody.appendChild(h4);
        divFooter.appendChild(detailsButton);
        li.appendChild(img);
        li.appendChild(divBody);
        li.appendChild(divFooter);
        ulNew.appendChild(li);
    })
    divToAttachUl.appendChild(ulNew);
}

export function topNavigation() {
    const email = localStorage.getItem('email');

    const guestView = document.querySelectorAll('.nav-item.guest');
    const userView = document.querySelectorAll('.nav-item.user');

    const addMovieButton = document.querySelector('#add-movie-btn');

    if (email && email !== 'undefined') {

        const welcomeMessage = document.querySelector('#welcome-msg');
        welcomeMessage.textContent = `Welcome, ${localStorage.getItem('email')}`;

        guestView.forEach(guest => {
            guest.style.display = 'none';
        })

        userView.forEach(guest => {
            guest.style.display = 'block';
        })
        addMovieButton.style.display = 'inline';
    }
    else {
        guestView.forEach(guest => {
            guest.style.display = 'block';
        })
        userView.forEach(guest => {
            guest.style.display = 'none';
        })
        addMovieButton.style.display = 'none';
    }
    // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
    // divToAttachUl.innerHTML = '';
}