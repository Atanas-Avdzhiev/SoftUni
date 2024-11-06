import { home } from "./home.js";

export function addMovie() {
    const allViewSections = document.querySelectorAll('.view-section');

    allViewSections.forEach(section => {
        section.style.display = 'none';
    })

    const addMovieView = document.querySelector('#add-movie');
    addMovieView.style.display = 'block';

    const titleInput = addMovieView.querySelector('#title');
    const descriptionInput = addMovieView.querySelector('#description');
    const imgInput = addMovieView.querySelector('#imageUrl');
    const submitButton = addMovieView.querySelector('button');

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        if (titleInput.value === '' || descriptionInput.value === '' || imgInput.value === '') return;

        const addMovieURL = 'http://localhost:3030/data/movies';
        const accessToken = localStorage.getItem('accessToken');

        const res = await fetch(addMovieURL, {
            method: 'POST',
            body: JSON.stringify({
                title: titleInput.value,
                description: descriptionInput.value,
                img: imgInput.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            }
        })
        const data = await res.json();
        titleInput.value = '';
        descriptionInput.value = '';
        imgInput.value = '';
        // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
        // divToAttachUl.innerHTML = '';
        home();
    })
}