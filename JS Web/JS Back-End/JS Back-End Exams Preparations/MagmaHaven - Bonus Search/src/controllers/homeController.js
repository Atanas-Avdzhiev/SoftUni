import { Router } from 'express';
import volcanoService from '../services/volcanoService.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {
    let volcanos = [];

    try {
        volcanos = await volcanoService.getAll().lean(); // lean is needed to convert it to array of objects so the handlebar can recognize it, lean must be used after it is awaited!
    } catch (err) {
        console.log(err);
    }

    return res.render('catalog', { volcanos, title: 'Catalog' });
});

export default router;