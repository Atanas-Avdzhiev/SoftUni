import { html, render } from "../node_modules/lit-html/lit-html.js";

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = html`
    <section id="home">
        <h1>
          Welcome to <span>Samurider</span> moto market, your premier destination for Japanese motorcycles.</h1>
        <img src="./images/motorcycle.png" alt="home" />

    </section>
`;

export function homeView() {
    render(template, main);
}