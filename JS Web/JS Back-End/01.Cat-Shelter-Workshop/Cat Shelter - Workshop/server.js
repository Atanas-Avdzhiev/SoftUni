const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const homeTemplate = require('./views/home/index.html');
const siteCss = require('./content/styles/site.css');
const addBreedTemplate = require('./views/addBreed.html');
const addCatTemplate = require('./views/addCat.html');
const editCatTemplate = require('./views/editCat.html');
const shelterCatTemplate = require('./views/catShelter.html');

const jsonDatabase = require('./database.json');
const arrayCats = [];
const arrayBreeds = [];

for (const key in jsonDatabase.cats) {
    arrayCats.push(jsonDatabase.cats[key]);
}

for (const key in jsonDatabase.breeds) {
    arrayBreeds.push(jsonDatabase.breeds[key]);
}

const port = 5000;

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if (req.url === '/content/styles/site.css') {
        // res.writeHead(200, {
        //     'content-type': 'text/css'
        // });
        res.write(siteCss);
        return res.end();
    }

    if (req.url === '/src/addBreed.js') {
        const clientScript = fs.readFileSync('./src/addBreed.js');
        res.write(clientScript);
        return res.end();
    }

    if (req.url === '/src/addCat.js') {
        const clientScript = fs.readFileSync('./src/addCat.js');
        res.write(clientScript);
        return res.end();
    }

    if (req.url === '/editCat/src/editCat.js') {
        const clientScript = fs.readFileSync('./src/editCat.js');
        res.write(clientScript);
        return res.end();
    }

    if (req.url === '/src/searchCat.js') {
        const clientScript = fs.readFileSync('./src/searchCat.js');
        res.write(clientScript);
        return res.end();
    }

    if (req.url === '/addNewBreed' && req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            arrayBreeds.push({ breed: parsedBody.breed });

            if (parsedBody) {
                res.end(JSON.stringify({ message: 'Breed added successfully!', data: parsedBody }));
            }
            else {
                res.end(JSON.stringify({ message: 'Failed to add breed!' }));
            }
        });
        return;
    }
    const query = querystring.parse(req.url);

    if (query['/editCat/id']) {
        const catId = query['/editCat/id'];
        const findCat = arrayCats.find(cat => cat.id === catId);

        res.write(editCatTemplate(findCat, arrayBreeds));
        return res.end();
    }

    if (query['/shelterCat/id']) {
        const catId = query['/shelterCat/id'];
        const findCat = arrayCats.find(cat => cat.id === catId);

        res.write(shelterCatTemplate(findCat));
        return res.end();
    }

    if (query['/searchCat']) {
        const searchQuery = query['/searchCat'].toLowerCase();
        const foundCats = arrayCats.filter(x => x.name.toLowerCase().includes(searchQuery));
        const message = 'No cats found';
        res.write(homeTemplate(foundCats, message));
        return res.end();
    }

    if (req.url === '/shelterExistingCat' && req.method === 'DELETE') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const parsedBody = JSON.parse(body);

            const findCat = arrayCats.find(cat => cat.id === parsedBody.catId);
            const indexOfFoundCat = arrayCats.indexOf(findCat);
            arrayCats.splice(indexOfFoundCat, 1);

            if (parsedBody) {
                res.end(JSON.stringify({ message: 'Sheltered cat successfully!', data: parsedBody }));
            }
            else {
                res.end(JSON.stringify({ message: 'Failed to shelter cat!' }));
            }
        });
        return;
    }

    if (req.url === '/addNewCat' && req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const parsedBody = JSON.parse(body);

            arrayCats.push({
                id: (arrayCats.length + 1).toString(),
                image: parsedBody.upload,
                name: parsedBody.name,
                breed: parsedBody.breed,
                description: parsedBody.description
            });

            if (parsedBody) {
                res.end(JSON.stringify({ message: 'Cat added successfully!', data: parsedBody }));
            }
            else {
                res.end(JSON.stringify({ message: 'Failed to add cat!' }));
            }
        });
        return;
    }

    if (req.url === '/editExistingCat' && req.method === 'PUT') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const parsedBody = JSON.parse(body);

            const findCat = arrayCats.find(cat => cat.id === parsedBody.id);
            const indexOfFoundCat = arrayCats.indexOf(findCat);
            arrayCats.splice(indexOfFoundCat, 1, parsedBody);

            if (parsedBody) {
                res.end(JSON.stringify({ message: 'Cat edited successfully!', data: parsedBody }));
            }
            else {
                res.end(JSON.stringify({ message: 'Failed to edit cat!' }));
            }
        });
        return;
    }

    switch (req.url) {
        case '/':
            const message = 'No cats to show';
            res.write(homeTemplate(arrayCats, message));
            res.end();
            break;

        case '/addBreed':
            res.write(addBreedTemplate);
            res.end();
            break;

        case '/addCat':
            res.write(addCatTemplate(arrayBreeds));
            res.end();
            break;

        default:
            res.write('<h1>Page not Found!</h1>');
            res.end();
            break;
    }

    //res.end();
})

server.listen(port);

console.log(`Server is listening on port ${port}`);