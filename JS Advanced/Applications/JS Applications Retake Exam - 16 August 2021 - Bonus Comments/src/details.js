import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";
import { getOne } from '../api/api.js';

const main = document.querySelector('body > #box > #main-content');

const template = (arr, isOwner, isLogged, comments, formHandler) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${arr.imageUrl}" />
            <h1>${arr.title}</h1>
            <span class="levels">MaxLevel: ${arr.maxLevel}</span>
            <p class="type">${arr.category}</p>
        </div>
        <p class="text">${arr.summary}</p>

        ${isOwner ? html`
        <div class="buttons">
            <a href="/dashboard/${arr._id}/edit" class="button">Edit</a>
            <a href="/dashboard/${arr._id}/delete" class="button">Delete</a>
        </div>
        ` : ''}

        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length === 0 ? html`
            <p class="no-comment">No comments.</p>
            ` : html`
            <ul>
                ${comments.map(x => html`
                <li class="comment">
                    <p>Content: ${x.comment}</p>
                </li>
                `)}
            </ul>
            `}
        </div>
    </div>

    ${!isOwner && isLogged ? html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${formHandler} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>
    ` : ''}

</section>
`;

export async function detailsView(ctx) {
    const { id } = ctx.params;

    const response = await getOne(id);

    let isLogged = false;
    let isOwner = false;
    let currentOwnerId = '';
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData !== null && userData._id) {
        currentOwnerId = userData._id;
        isLogged = true;
    }

    if (currentOwnerId === response._ownerId) {
        isOwner = true;
    }

    //get comments
    const commentsURL = `http://localhost:3030/data/comments?where=gameId%3D%22${id}%22`;
    const responseComments = await fetch(commentsURL);
    const dataComments = await responseComments.json();

    if (response) {
        render(template(response, isOwner, isLogged, dataComments, sendComment.bind(ctx)), main);
    }
}

async function sendComment(e) {
    e.preventDefault();
    const { id } = this.params;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData.accessToken) return;

    const commentURL = `http://localhost:3030/data/comments`;

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form);

    if (formData.comment === '') {
        alert("Can't send empty comment!");
        return;
    }

    const responseComment = await fetch(commentURL, {
        method: 'POST',
        body: JSON.stringify({
            gameId: id,
            comment: formData.comment
        }),
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.accessToken
        }
    });

    const dataComment = await responseComment.json();
    //if (dataComment._id) {
    const textarea = document.querySelector('#game-details > .create-comment > form > textarea[name="comment"]');
    textarea.value = '';
    page.redirect(`/dashboard/${id}`);
    //}
}