import { html, render } from "../node_modules/lit-html/lit-html.js";

const header = document.querySelector('body > header');  // probably need to change this / Attention, this is navigation, the root is probably different! /

const template = (isLogged) => html`
        <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                ${!isLogged ? html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                ` : html`
                <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>
                `}
            </ul>
        </nav>
`;

export function navigation(ctx, next) {
    const userData = localStorage.getItem('userData');
    render(template(!!userData), header);
    next();
}