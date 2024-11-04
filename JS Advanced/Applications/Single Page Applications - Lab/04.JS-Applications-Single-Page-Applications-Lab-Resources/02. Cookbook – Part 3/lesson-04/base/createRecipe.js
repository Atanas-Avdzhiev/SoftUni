export function createRecipe() {

    const siteSections = document.querySelectorAll('.site-section');
    siteSections.forEach(section => {
        section.style.display = 'none';
    })

    const create = document.querySelector('#create');
    create.style.display = 'block';

    const formElement = document.querySelector('#create form');

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(formElement);
        //alternative: const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData); // cool way to get all of the data in an single object, the properties will come from the "name" of the tags in the HTML file!
        data.ingredients = data.ingredients.split('\n');
        data.steps = data.steps.split('\n');

        const createRecipeURL = 'http://localhost:3030/data/recipes';
        const accessToken = localStorage.getItem('accessToken');

        fetch(createRecipeURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            }

        })
            .then(res => res.json())
            .then(data => {
                location.href = '/';
            })
            .catch(err => alert(err.message));
    })
}