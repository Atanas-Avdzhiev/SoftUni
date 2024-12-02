import { html, render } from "../node_modules/lit-html/lit-html.js";

const header = document.querySelector('body > #wrapper > header');  // probably need to change this / Attention, this is navigation, the root is probably different! /

const template = (isLogged) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
<nav>
  <div>
    <a href="/dashboard">Products</a>
  </div>

  ${isLogged ? html`
  <div class="user">
    <a href="/create">Add Product</a>
    <a href="/logout">Logout</a>
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