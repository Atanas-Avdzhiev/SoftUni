// Get dom container
const rootDomElement = document.getElementById('root')

// Create root
const reactRootElment = ReactDOM.createRoot(rootDomElement);

// Create react element without JSX
const headingReactElement = React.createElement('h1', {}, 'Hello from React!');
const subHeadingReactElement = React.createElement('h2', { id: 'sub-header' }, 'The best framework!');
const headerSectionReactElement = React.createElement('header', {}, headingReactElement, subHeadingReactElement);

// create react element with JSX
const headerSectionReactJSXElement = (
    <header>
        <h1 className="main-header">Hello from JSX!</h1>
        <h2 id="sub-header">The best Superset Language!</h2>
    </header>
);

// Render element to UI
reactRootElment.render(headerSectionReactJSXElement);

// Compare react element vs dom element
setTimeout(() => {
    const subHeadingDomElement = document.getElementById('sub-header');
    console.dir(subHeadingDomElement);
    console.dir(subHeadingReactElement);
}, 500);
