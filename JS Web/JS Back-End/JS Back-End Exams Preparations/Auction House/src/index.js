import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import homeController from './controllers/homeController.js';
import authController from './controllers/authController.js';
import itemController from './controllers/itemController.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

try {
    const url = process.env.DB_URL;
    await mongoose.connect(url);
    console.log('Connected to DB!');
} catch (err) {
    console.log(`Failed to connect to DB! Raw error message: ${err.message}`);
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        eq: (a, b) => a === b
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(authMiddleware);

app.use(homeController);
app.use(authController);
app.use(itemController);

app.all('*', (req, res) => {
    res.render('404', { title: 'Page Not Found' });
});

const port = 3000;
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));