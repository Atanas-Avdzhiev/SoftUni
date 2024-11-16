import page from "//unpkg.com/page/page.mjs";

const root = document.getElementById('root');

function homePage(ctx) {
    // !XSS Warning, demo only
    root.innerHTML = `
        <h1>Home Page</h1>
    `;
}

function pricingPage(ctx) {
    console.log(ctx);

    // !XSS Warning, demo only
    root.innerHTML = `
        <h1>Pricing Page</h1>
    `;
}

function contactsPage(ctx) {
    // !XSS Warning, demo only
    root.innerHTML = `
        <h1>Contacts Page</h1>
    `;
}

function catalogPage(ctx) {
    root.innerHTML = `
        <h2>Cars</h2>
        <ul>
            <li><a href="/catalog/toyota">Toyota</a></li>
            <li><a href="/catalog/bmw">BMW</a></li>
            <li><a href="/catalog/audi">Audi</a></li>
        </ul>
    `;
}

function catalogItemPage(ctx) {
    root.innerHTML = `
        <h1>${ctx.params.car}</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maiores?</p>
    `;
}

page('/', homePage);
page('/pricing', pricingPage);
page('/contacts', contactsPage);
page('/catalog', catalogPage);
page('/catalog/:car', catalogItemPage);
page.start();
