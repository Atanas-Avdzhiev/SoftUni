
const root = document.getElementById('root');

function homePage() {
    // !XSS Warning, demo only
    root.innerHTML = `
        <h1>Home Page</h1>
    `;
}

function pricingPage() {
    // !XSS Warning, demo only
    root.innerHTML = `
        <h1>Pricing Page</h1>
    `;
}

function contactsPage() {
    // !XSS Warning, demo only
    root.innerHTML = `
        <h1>Contacts Page</h1>
    `;
}

const routes = {
    '#home': homePage,
    '#pricing': pricingPage,
    '#contacts': contactsPage,
}

function initNavigation() {
    window.addEventListener('hashchange', () => {
        routes[location.hash]();
    });

    if (Object.keys(routes).includes(location.hash)){
        routes[location.hash]();
    } else {
        routes['#home']();
    }

    // Redirect 
    // location.href = '#contacts'
}



initNavigation();
