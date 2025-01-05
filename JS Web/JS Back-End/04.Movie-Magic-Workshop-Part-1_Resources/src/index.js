import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(routes);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));