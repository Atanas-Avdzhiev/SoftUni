import recipes from "../api/recipes.js";

const sectionElement = document.getElementById('home-section');

export default function homePage() {
    const recentRecipes = document.querySelector('.recent-recipes');

    recipes.getRecent()
        .then(recipes => {
            recentRecipes.innerHTML = '';
            
            recentRecipes.append(...recipes.map(renderRecipe))
        })

    sectionElement.style.display = 'block';
}

// TODO: fix this
function renderRecipe(recipe) {
    const article = document.createElement('article');
    article.classList.add('recent');

    article.innerHTML = `
        <div class="recent-preview">
            <img src="${recipe.img}" alt="${recipe.name}" />
        </div>
        <div class="recent-title">${recipe.name}</div>
    `; // !!!XSS danger

    return article
}
