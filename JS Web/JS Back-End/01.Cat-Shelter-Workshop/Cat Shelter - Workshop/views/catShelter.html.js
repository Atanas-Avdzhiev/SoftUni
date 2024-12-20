module.exports = (cat) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../content/styles/site.css">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
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
    </header>
    <main>
        <form action="#" method="" class="cat-form">
            <h2>Shelter the cat</h2>
            <img src="${cat.image}" alt="${cat.name}">
            <label for="name">Name</label>
            <input type="text" id="name" value="${cat.name}" disabled>
            <label for="description">Description</label>
            <textarea id="description" disabled>${cat.description}</textarea>
            <label for="group">Breed</label>
            <select id="group" disabled>
                <option value="${cat.breed}">${cat.breed}</option>
            </select>
            <button>SHELTER THE CAT</button>
        </form>
    </main>

    <script>
    
        document.querySelector('form').addEventListener('submit', async (e) => {
            e.preventDefault();

            const url = new URL(location.href);
            const catId = url.pathname.split('=')[1];

            const res = await fetch('http://localhost:5000/shelterExistingCat', {
                method: 'DELETE',
                body: JSON.stringify( { catId } ),
                headers: {
                    'content-type': 'application/json'
                }
            })
            location.href = '/';
            //const data = await res.json();
        });

    </script>

</body>

</html>`;