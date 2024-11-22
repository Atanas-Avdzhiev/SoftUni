import { html, render } from '../node_modules/lit-html/lit-html.js';

const main = document.querySelector('#main-element');

const template = html`
    <section id="hero">
        <img src="./images/home.png" alt="home" />
        <p>We know who you are, we will contact you</p>
    </section>
`;

export function homeView() {
    render(template, main);
}