function getArticleGenerator(articles) {
    let initialArray = articles.slice();
    return function () {
        if (initialArray.length < 1) return;
        const content = document.querySelector('#content');
        const article = document.createElement('article');
        article.textContent = initialArray.shift();
        content.append(article);
    }
}