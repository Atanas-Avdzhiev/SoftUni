const http = require('http');
const fs = require('fs/promises');
const querystring = require('querystring');
const { EOL } = require('os');

const siteCss = require('./content/styles/site.css');

const port = 5000;

const cats = [
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
        name: 'Pretty Kitty',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
    {
        id: 2,
        imageUrl: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
        name: 'Navcho',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
    {
        id: 3,
        imageUrl: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
        name: 'Sisa',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
    {
        id: 4,
        imageUrl: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=',
        name: 'Garry',
        breed: 'Bombay Cat',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
    },
];

function readFile(path) {
    return fs.readFile(path, { encoding: 'utf-8' });
}

function render(html, data) {
    const resultHtml = Object
        .keys(data)
        .reduce((result, key) => result.replaceAll(`{{${key}}}`, data[key]), html);

    return resultHtml;
}

async function renderCat(catData) {
    let catHtml = await readFile('./views/cat.html');

    return render(catHtml, catData);
}


async function renderHome(cats) {
    let indexHtml = await readFile('./views/home/index.html');

    const catsHtmlResult = await Promise.all(cats.map(renderCat));

    return render(indexHtml, { cats: catsHtmlResult.join('\n') });
}
function parsePart(part) {
    const namePattern = new RegExp(`name="([^"]+)"`, 'm');
    const valuePattern = new RegExp(`${EOL}${EOL}(.*)`, '');

    const res1 = part.match(namePattern);
    const res2 = part.match(valuePattern);

    console.log(res1[1]);
    console.log(part.slice(res2.index).trim());

    return [];
}

function parseFile(part) {
    const namePattern = new RegExp(`name="([^"]+)"`, 'm');
    const valuePattern = new RegExp(`${EOL}${EOL}(.*)`, '');

    const nameMatch = part.match(namePattern);
    const valueMatch = part.match(valuePattern);

    const name = nameMatch[1];
    const value = part.slice(valueMatch.index).trim();

    return [name, value];
}

const server = http.createServer(async (req, res) => {
    if (req.url === '/styles/site.css') {
        res.writeHead(200, {
            'content-type': 'text/css',
        });
        res.write(siteCss);
        return res.end();
    }

    res.writeHead(200, {
        'content-type': 'text/html',
    });

    switch (req.url) {
        case '/':
            const indexHtml = await renderHome(cats);
            res.write(indexHtml);

            return res.end();
        case '/cats/add-breed':
            const addBreedHtml = await readFile('./views/addBreed.html');
            res.write(addBreedHtml);

            return res.end();
        case '/cats/add-cat':
            if (req.method === 'GET') {
                const addCatHtml = await readFile('./views/addCat.html');
                res.write(addCatHtml);
            } else if (req.method === 'POST') {
                let body = '';

                req.on('data', (chunk) => {
                    body += chunk;
                });

                req.on('end', async () => {
                    const boundary = req.headers['content-type'].split('boundary=').at(1);
                    const parts = body.split(`--${boundary}`).filter(part => !!part).slice(0, -1);

                    const [name, value] = parseFile(parts[2]);
                    console.log(name);
                    console.log(value);

                    await fs.writeFile(`./uploads/image.jpg`, value, { encoding: 'binary' });

                    res.end();
                });
            }
            break;
        default:
            res.write(`<h1>Page Not Found!</h1>`);

            return res.end();
    }
});

server.listen(port);
console.log(`Server is listening on http://localhost:${port}`);
