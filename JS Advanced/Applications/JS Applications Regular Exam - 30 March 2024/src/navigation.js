import { html, render } from '../node_modules/lit-html/lit-html.js';

const header = document.querySelector('body header');

const template = (isLogged) => html`
    <a id="logo" href="/"><img id="logo" src="./images/logo.png" alt="img" /></a>
            <nav>
                <div>
                    <a href="/market">Market</a>
                </div>

                ${isLogged ? html`
                <div class="user">
                    <a href="/create">Sell</a>
                    <a href="/logout">Logout</a>
                </div>
                `
        : html`
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                `}
            </nav>
`;

export function navigationView(ctx, next) {
    const userData = localStorage.getItem('userData');
    render(template(!!userData), header);
    next();
}