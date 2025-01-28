import { Router } from 'express';
import volcanoService from '../services/volcanoService.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/catalog', async (req, res) => {
    let volcanos = [];
    let hasFound = false;

    try {
        volcanos = await volcanoService.getAll().lean(); // lean is needed to convert it to array of objects so the handlebar can recognize it, lean must be used after it is awaited!
        hasFound = volcanos.length === 0 ? false : true;
    } catch (err) {
        console.log(err);
    }

    return res.render('catalog', { volcanos, hasFound });
});

export default router;