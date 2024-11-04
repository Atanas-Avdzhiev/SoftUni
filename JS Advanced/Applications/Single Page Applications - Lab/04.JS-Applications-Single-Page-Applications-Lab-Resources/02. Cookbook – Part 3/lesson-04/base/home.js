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

                    const currentRecipeDetailsURL = `http://localhost:3030/data/recipes//${recipe._id}`;
                    const response = await fetch(currentRecipeDetailsURL);
                    const data = await response.json();

                    const articleRecipe = loadSelectedRecipe(data);

                    articleRecipes.innerHTML = '';
                    articleRecipes.appendChild(articleRecipe);
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

//optionals:

// // optional back button from myself
// const backButton = document.createElement('button');
// backButton.textContent = 'Back';

// backButton.addEventListener('click', () => {
//     main.innerHTML = '';
//     //loadRecipes(); // another way to go back to main page, but probably not a better one
//     location.href = '/'
// })

// main.appendChild(backButton);

// //optional delete button from myself
// //note you can delete recipe only if you are the creator of the recipe
// const deleteButton = document.createElement('button');
// deleteButton.textContent = 'Delete this recipe';

// deleteButton.addEventListener('click', () => {
//     const deleteURL = `http://localhost:3030/data/recipes/${recipe._id}`;
//     const accessToken = localStorage.getItem('accessToken');

//     fetch(deleteURL, {
//         method: 'DELETE',
//         headers: {
//             'X-Authorization': accessToken
//         }
//     })
//         .then(res => res.json())
//         .then(data => {
//             location.href = '/';
//         })
//         .catch(err => alert(err.message));
// })
// main.appendChild(deleteButton);
// const pDelete = document.createElement('p');
// pDelete.textContent = 'NOTE: You can delete this recipe only if you are the creator of the recipe!';
// pDelete.style.color = 'white';
// main.appendChild(pDelete);