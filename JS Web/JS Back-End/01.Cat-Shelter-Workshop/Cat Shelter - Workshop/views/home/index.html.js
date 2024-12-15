module.exports = (cats, message) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="../../content/styles/site.css">
    <link rel="shortcut icon" type="image/png" href="../../content/images/pawprint.ico" />
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/addBreed">Add Breed</a></li>
                <li><a href="/addCat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search">
            <input type="text">
            <button type="button">Search</button>
        </form>
    </header>

    <main>
        <section class="cats">
            <ul>
                ${cats.length > 0 ? cats.map((cat) =>
                `<li>
                    <img src="${cat.image}" alt="${cat.name}">
                    <h3>${cat.name}</h3>
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/editCat/id=${cat.id}">Change Info</a></li>
                        <li class="btn delete"><a href="/shelterCat/id=${cat.id}">New Home</a></li>
                    </ul>
                </li>`) : `<h1 class="nothing-found">${message}</h1>`}
            </ul>
        </section>
    </main>

    <script src="../src/searchCat.js" ></script>
</body>

</html>`;