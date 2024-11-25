import { html, render } from "../node_modules/lit-html/lit-html.js";

const header = document.querySelector('body > #content > header');

const template = (isLogged) => html`
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="logo" /></a>
      <nav>
        <a href="/dashboard">Collection</a>

        ${isLogged ? html`
        <div class="user">
          <a href="/create">Add Tattoo</a>
          <a id="logout" href="/logout">Logout</a>
        </div>
        ` : html`
        <div class="guest">
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