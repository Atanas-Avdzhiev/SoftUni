import { home, topNavigation } from "./home.js";

export async function showDetails(movieID) {
    const logged = localStorage.getItem('logged');
    if (!logged) {
        alert('Only logged-in users can view details about movies.')
        return;
    }
    const allViewSections = document.querySelectorAll('.view-section');

    allViewSections.forEach(section => {
        section.style.display = 'none';
    })

    const detailsSection = document.querySelector('#movie-example');
    detailsSection.innerHTML = '';
    detailsSection.style.display = 'block';

    const detailsURL = `http://localhost:3030/data/movies/${movieID}`;

    const res = await fetch(detailsURL);
    const data = await res.json();

    const likesURL = `http://localhost:3030/data/likes?where=movieId%3D%22${movieID}%22&distinct=_ownerId&count`;

    const resLikes = await fetch(likesURL);
    const dataLikes = await resLikes.json();

    detailsSection.innerHTML = `<div class="container">
        <div class="row bg-light text-dark">
          <h1>Movie title: ${data.title}</h1>

          <div class="col-md-8">
            <img class="img-thumbnail" src="${data.img}"
              alt="Movie" />
          </div>
          <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>${data.description}</p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span">Liked ${dataLikes}</span>
          </div>
        </div>
      </div>`;

    const editButton = detailsSection.querySelector('.btn.btn-warning');
    const deleteButton = detailsSection.querySelector('.btn.btn-danger');
    const likeButton = detailsSection.querySelector('.btn.btn-primary');
    const spanLikes = detailsSection.querySelector('span');
    const myID = localStorage.getItem('id');

    if (data._ownerId !== myID) {
        editButton.style.display = 'none';
        deleteButton.style.display = 'none';
    }

    if (logged && data._ownerId === myID) {
        likeButton.style.display = 'none';
    }
    const userID = localStorage.getItem('id');
    const isLikedURL = `http://localhost:3030/data/likes?where=movieId%3D%22${movieID}%22%20and%20_ownerId%3D%22${userID}%22`;

    const resIsLiked = await fetch(isLikedURL);
    const dataIsLiked = await resIsLiked.json();

    if (dataIsLiked.length > 0) {
        likeButton.style.display = 'none';
    }
    if (dataIsLiked.length === 0) {
        spanLikes.style.display = 'none';
    }

    if (data._ownerId === myID) {
        spanLikes.style.display = 'inline';
    }
    editButton.addEventListener('click', () => editDetails(movieID));

    likeButton.addEventListener('click', (e) => {
        e.preventDefault();
        addLike(movieID, detailsSection);
    })

    deleteButton.addEventListener('click', () => deleteMovie(movieID));
}

async function editDetails(movieID) {
    const detailsSection = document.querySelector('#movie-example');
    detailsSection.style.display = 'none';

    const editSection = document.querySelector('#edit-movie');
    editSection.style.display = 'block';

    const titleInput = editSection.querySelector('#title');
    const descriptionInput = editSection.querySelector('textarea');
    const imgInput = editSection.querySelector('#imageUrl');
    const submitButton = editSection.querySelector('button');

    const detailsURL = `http://localhost:3030/data/movies/${movieID}`;

    const res = await fetch(detailsURL);
    const data = await res.json();

    titleInput.value = data.title;
    descriptionInput.value = data.description;
    imgInput.value = data.img;

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        if (titleInput.value === '' || descriptionInput.value === '' || imgInput.value === '') {
            alert('Fields cant be empty.');
            return;
        }

        const editURL = `http://localhost:3030/data/movies/${movieID}`;
        const accessToken = localStorage.getItem('accessToken');
        try {
            const res = await fetch(editURL, {
                method: 'PUT',
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
            editSection.style.display = 'none';
            showDetails(movieID);
        }
        catch (err) {
            alert(err.message);
        }
    })
}

async function addLike(movieID, detailsSection) {
    const likeURL = `http://localhost:3030/data/likes`;
    const accessToken = localStorage.getItem('accessToken');

    try {
        const res = await fetch(likeURL, {
            method: 'POST',
            body: JSON.stringify({
                movieId: movieID
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            }
        })
        const data = await res.json();
        if (data._id) {
            const spanLike = detailsSection.querySelector('span');
            const likesURL = `http://localhost:3030/data/likes?where=movieId%3D%22${movieID}%22&distinct=_ownerId&count`;

            const resLikes = await fetch(likesURL);
            const dataLikes = await resLikes.json();
            spanLike.textContent = `Liked ${dataLikes}`;

            const likeButton = detailsSection.querySelector('.btn.btn-primary');
            likeButton.style.display = 'none';
            spanLike.style.display = 'inline';
        }
    }
    catch (err) {
        alert(err.message);
    }
}

async function deleteMovie(movieID) {
    const deleteURL = `http://localhost:3030/data/movies/${movieID}`;
    const accessToken = localStorage.getItem('accessToken');

    if (!localStorage.getItem('logged')) {
        return;
    }

    const res = await fetch(deleteURL, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        }
    })

    const data = await res.json();
    // const divToAttachUl = document.querySelector('.row.d-flex.d-wrap');
    // divToAttachUl.innerHTML = '';
    home();
}