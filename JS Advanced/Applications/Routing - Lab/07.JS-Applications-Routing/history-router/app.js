const root = document.getElementById('root');

const routes = {
    '/': homePage,
    '/pricing': pricingPage,
    '/contacts': contactsPage,
};

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

function navigate(pathname) {
    history.pushState(null, null, pathname);

    // Trigger popstate event on pushState
    window.dispatchEvent(new Event('popstate'));
}

function initNavigation() {
    document
        .querySelector('.site-navigation')
        .addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                return;
            }

            // STOP default navigation
            e.preventDefault();

            // Add history based navigation
            const url = new URL(e.target.href);
            navigate(url.pathname);
        });

    // Listen for url change
    window.addEventListener('popstate', (e) => {
        // Show content based on the current route
        routes[location.pathname]();
    });

    routes[location.pathname]();
}


initNavigation();
