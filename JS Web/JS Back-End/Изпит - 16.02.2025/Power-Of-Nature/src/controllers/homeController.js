import { Router } from 'express';
import disasterService from '../services/disasterService.js';

const router = Router();

router.get('/', async (req, res) => {
    return res.render('home', { title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {
    let items = [];

    try {
        items = await disasterService.getAll().lean();
    } catch (err) {
        return res.render('catalog', { items: [], title: 'Catalog Page', error: 'Something went wrong!' });
    }

    return res.render('catalog', { items, title: 'Catalog Page' });
});

export default router;