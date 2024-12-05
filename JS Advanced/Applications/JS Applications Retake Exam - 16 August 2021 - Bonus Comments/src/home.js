import { html, render } from "../node_modules/lit-html/lit-html.js";

const main = document.querySelector('body > #box > #main-content');  // probably need to change this

const template = (arr) => html`
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>

        ${arr.length === 0 ? html`
        <p class="no-articles">No games yet</p>
        ` : html`
        ${arr.map(x => html`
        <div class="game">
            <div class="image-wrap">
                <img src="${x.imageUrl}">
            </div>
            <h3>${x.title}</h3>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div class="data-buttons">
                <a href="/dashboard/${x._id}" class="btn details-btn">Details</a>
            </div>
        </div>
        `)}
        `}
    </div>
</section>
`;

export async function homeView() {
    const getMostRecentURL = 'http://localhost:3030/data/games?sortBy=_createdOn%20desc&distinct=category';
    const response = await fetch(getMostRecentURL);
    const data = await response.json();
    const last3Elements = data.slice(0, 3);
    render(template(last3Elements), main);
}