import { html, render } from "../node_modules/lit-html/lit-html.js";

const header = document.querySelector('body > #container > header');  // probably need to change this / Attention, this is navigation, the root is probably different! /
const main = document.querySelector('body > #container > main');  // probably need to change this
//const userData = JSON.parse(localStorage.getItem('userData'));

const template = (isLogged, email) => html`
        <nav>
            ${isLogged ? html`
            <div class="user">
                <a href="/dashboard">All Memes</a>
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${email}</span>
                    <a href="/profile">My Profile</a>
                    <a href="/logout">Logout</a>
                </div>
            </div>
            ` : html`
            <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
                <a href="/dashboard">All Memes</a>
            </div>
            `}
        </nav>
`;

const guestTemplate = html`
<section id="welcome">
    <div id="welcome-container">
        <h1>Welcome To Meme Lounge</h1>
        <img src="/images/welcome-meme.jpg" alt="meme">
        <h2>Login to see our memes right away!</h2>
        <div id="button-div">
            <a href="/login" class="button">Login</a>
            <a href="/register" class="button">Register</a>
        </div>
    </div>
</section>
`;

export function navigation(ctx, next) {
    const userData = localStorage.getItem('userData');
    let email;
    if (userData) {
        email = JSON.parse(userData).email;
    }
    render(template(!!userData, email), header);
    next();
}