// Get dom container
var rootDomElement = document.getElementById('root');

// Create root
var reactRootElment = ReactDOM.createRoot(rootDomElement);

// Create react element without JSX
var headingReactElement = React.createElement('h1', {}, 'Hello from React!');
var subHeadingReactElement = React.createElement('h2', { id: 'sub-header' }, 'The best framework!');
var headerSectionReactElement = React.createElement('header', {}, headingReactElement, subHeadingReactElement);

// create react element with JSX
var headerSectionReactJSXElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        { className: 'main-header' },
        'Hello from JSX!'
    ),
    React.createElement(
        'h2',
        { id: 'sub-header' },
        'The best Superset Language!'
    )
);

// Render element to UI
reactRootElment.render(headerSectionReactJSXElement);

// Compare react element vs dom element
setTimeout(function () {
    var subHeadingDomElement = document.getElementById('sub-header');
    console.dir(subHeadingDomElement);
    console.dir(subHeadingReactElement);
}, 500);