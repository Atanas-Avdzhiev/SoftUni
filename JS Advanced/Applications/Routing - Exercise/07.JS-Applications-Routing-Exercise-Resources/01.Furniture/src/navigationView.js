import { html, render } from '../node_modules/lit-html/lit-html.js';

const body = document.querySelector('body header');

const template = (isLogged) => html`
        <h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/dashboard" class="active">Dashboard</a>
            ${isLogged
        ? html`
            <div id="user">
                <a id="createLink" href="/create">Create Furniture</a>
                <a id="profileLink" href="/my-furniture">My Publications</a>
                <a id="logoutBtn" href="/logout">Logout</a>
            </div>
            `
        : html`
            <div id="guest">
                <a id="loginLink" href="/login">Login</a>
                <a id="registerLink" href="/register">Register</a>
            </div>
            `}
        </nav>
`;

export function navigation(ctx, next) {
    const userData = localStorage.getItem('userData');
    render(template(userData), body);
    next();
}