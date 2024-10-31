function loadRecipes() {

    const main = document.querySelector('main');
    const recipesURL = 'http://localhost:3030/jsonstore/cookbook/recipes';

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
                    const currentRecipeDetailsURL = `http://localhost:3030/jsonstore/cookbook/details/${recipe._id}`;
                    const response = await fetch(currentRecipeDetailsURL);
                    const data = await response.json();

                    const articleRecipe = loadSelectedRecipe(data);

                    main.innerHTML = '';
                    main.appendChild(articleRecipe);

                    // optional back button from myself
                    const backButton = document.createElement('button');
                    backButton.textContent = 'Back';

                    backButton.addEventListener('click', () => {
                        main.innerHTML = '';
                        loadRecipes();
                    })

                    main.appendChild(backButton);
                });

                main.appendChild(article);
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

loadRecipes();