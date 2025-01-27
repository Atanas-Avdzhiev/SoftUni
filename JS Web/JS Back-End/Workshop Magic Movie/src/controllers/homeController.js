import { Router } from 'express';
import movieService from '../services/movieService.js';

const router = Router();

router.get('/', async (req, res) => {
    let movies = [];

    try {
        movies = await movieService.getAll().lean(); // lean is needed to convert it to array of objects so the handlebar can recognize it, lean must be used after it is awaited!
    } catch (err) {
        console.log(err);
    }

    return res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about');
});

export default router;