import { html, render } from "../node_modules/lit-html/lit-html.js";

const header = document.querySelector('body > #box > header');  // probably need to change this / Attention, this is navigation, the root is probably different! /

const template = (isLogged) => html`
            <h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/dashboard">All games</a>
                ${isLogged ? html`
                <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>
                ` : html`
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                `}
            </nav>
`;

export function navigation(ctx, next) {
    const userData = localStorage.getItem('userData');
    render(template(!!userData), header);
    next();
}