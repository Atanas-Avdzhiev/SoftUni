import { html, render } from "../node_modules/lit-html/lit-html.js";

const main = document.querySelector('body > #container > main');  // probably need to change this

const template = (userData, userMemes) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="${userData.gender === 'male' ? '/images/male.png' : '/images/female.png'}" >
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${userMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${userMemes.length === 0 ? html`
        <p class="no-memes">No memes in database.</p>
        ` : html`
        ${userMemes.map(x => html`
        <div class="user-meme">
            <p class="user-meme-title">${x.title}</p>
            <img class="userProfileImage" alt="meme-img" src="${x.imageUrl}">
            <a class="button" href="/dashboard/${x._id}">Details</a>
        </div>
        `)}
        `}
    </div>
</section>
`;

export async function profileView() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const getUserMemesURL = `http://localhost:3030/data/memes?where=_ownerId%3D%22${userData._id}%22&sortBy=_createdOn%20desc`;

    const response = await fetch(getUserMemesURL);
    const data = await response.json();

    render(template(userData, data), main);
}