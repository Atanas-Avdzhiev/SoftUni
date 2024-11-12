export function loadRecipes() {

    const siteSections = document.querySelectorAll('.site-section');
    siteSections.forEach(section => {
        section.style.display = 'none';
    })

    const currentRecipe = document.querySelector('#recipes');
    currentRecipe.innerHTML = '';
    currentRecipe.style.display = 'block';

    const articleRecipes = document.querySelector('#recipes');
    const recipesURL = 'http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg';

    fetch(recipesURL)
        .then(res => res.json())
        .then(data => {
            const values = Object.values(data);
            values.forEach(recipe => {
                const article = document.createElement('article');
                article.classList.add('preview');

                const divTitle = document.createElement('div');
                divTitle.classList.add('title');

                const h2 = document.createElement('h2');
                h2.textContent = recipe.name;

                const divSmall = document.createElement('div');
                divSmall.classList.add('small');

                const img = document.createElement('img');
                img.src = recipe.img;

                divSmall.appendChild(img);
                divTitle.appendChild(h2);
                article.appendChild(divTitle);
                article.appendChild(divSmall);

                article.addEventListener('click', async (e) => {

                    const currentRecipeDetailsURL = `http://localhost:3030/data/recipes/${recipe._id}`;
                    const response = await fetch(currentRecipeDetailsURL);
                    const data = await response.json();

                    const articleRecipe = loadSelectedRecipe(data);

                    articleRecipes.innerHTML = '';
                    articleRecipes.appendChild(articleRecipe);

                    const ownerId = localStorage.getItem('id');
                    if (data._ownerId === ownerId) {
                        const editButton = document.createElement('button');
                        editButton.textContent = 'Edit';

                        editButton.addEventListener('click', (e) => editRecipe(data._id, e));

                        const deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Delete';

                        deleteButton.addEventListener('click', (e) => deleteRecipe(data._id, e));

                        articleRecipes.appendChild(editButton);
                        articleRecipes.appendChild(deleteButton);
                    }
                });

                articleRecipes.appendChild(article);
            })
        })
        .catch(err => alert(err.message));
}

function loadSelectedRecipe(data) {
    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = data.name;

    const divBand = document.createElement('div');
    divBand.classList.add('band');

    const divThumb = document.createElement('div');
    divThumb.classList.add('thumb');

    const img = document.createElement('img');
    img.src = data.img;

    const divIngredients = document.createElement('div');
    divIngredients.classList.add('ingredients');

    const h3 = document.createElement('h3');
    h3.textContent = 'Ingredients:';

    const ul = document.createElement('ul');

    data.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.appendChild(li);
    })

    const divDescription = document.createElement('div');
    divDescription.classList.add('description');

    const h3Preparation = document.createElement('h3');
    h3Preparation.textContent = 'Preparation:';
    divDescription.appendChild(h3Preparation);

    data.steps.forEach(step => {
        const p = document.createElement('p');
        p.textContent = step;
        divDescription.appendChild(p);
    })

    divThumb.appendChild(img);
    divIngredients.appendChild(h3);
    divIngredients.appendChild(ul);
    divBand.appendChild(divThumb);
    divBand.appendChild(divIngredients);
    article.appendChild(h2);
    article.appendChild(divBand);
    article.appendChild(divDescription);
    return article;
}

async function editRecipe(id, e) {
    const details = e.currentTarget.parentElement;
    e.currentTarget.parentElement.style.display = 'none';

    const currentRecipeDetailsURL = `http://localhost:3030/data/recipes/${id}`;
    const response = await fetch(currentRecipeDetailsURL);
    const data = await response.json();

    const createArticle = document.querySelector('#create');
    const createArticleCopy = createArticle.cloneNode(true);
    createArticleCopy.style.display = 'block';

    const h2 = createArticleCopy.querySelector('h2');
    h2.textContent = 'Edit Recipe';

    const updateRecipe = createArticleCopy.querySelector('input[type="submit"]');
    updateRecipe.value = 'Update Recipe';

    const main = document.querySelector('main');
    main.appendChild(createArticleCopy);

    const nameInput = createArticleCopy.querySelector('input[name="name"]');
    nameInput.value = data.name;

    const imgInput = createArticleCopy.querySelector('input[name="img"]');
    imgInput.value = data.img;

    const ingredientsInput = createArticleCopy.querySelector('textarea[name="ingredients"]');
    ingredientsInput.value = data.ingredients.join('\n');

    const stepsInput = createArticleCopy.querySelector('textarea[name="steps"]');
    stepsInput.value = data.steps.join('\n');

    updateRecipe.addEventListener('click', async (e) => {
        e.preventDefault();

        const editURL = `http://localhost:3030/data/recipes/${id}`;
        const accessToken = localStorage.getItem('accessToken');

        const ingredientsArray = ingredientsInput.value.split('\n');
        const stepsArray = stepsInput.value.split('\n');

        fetch(editURL, {
            method: 'PUT',
            body: JSON.stringify({
                name: nameInput.value,
                img: imgInput.value,
                ingredients: ingredientsArray,
                steps: stepsArray
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            }

        })
            .then(res => res.json())
            .then(data => {
                createArticleCopy.remove();

                details.style.display = 'block';
                const newH2 = details.querySelector('h2');
                newH2.textContent = data.name;

                const newImg = details.querySelector('img');
                newImg.src = data.img;

                const newUl = details.querySelector('div[class=ingredients] ul');
                newUl.innerHTML = '';

                data.ingredients.forEach(ingredient => {
                    if (ingredient === '') return;
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    newUl.appendChild(li);
                })

                const divDescription = details.querySelector('div[class=description]');
                divDescription.innerHTML = '';
                const newH3 = document.createElement('h3');
                newH3.textContent = 'Preparation:';
                divDescription.appendChild(newH3);

                data.steps.forEach(step => {
                    if (step === '') return;
                    const p = document.createElement('p');
                    p.textContent = step;
                    divDescription.appendChild(p);
                })
                //location.href = '/';
            })
            .catch(err => alert(err.message));
    })

}

function deleteRecipe(id, e) {

    const userConfirmed = confirm("Are you sure you want to delete this recipe?");

    if (!userConfirmed) {
        return;
    }

    const deleteURL = `http://localhost:3030/data/recipes/${id}`;
    const accessToken = localStorage.getItem('accessToken');

    fetch(deleteURL, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json())
        .then(data => {
            location.href = '/src/index.html';
        })
        .catch(err => alert(err.message));
}