import { Router } from 'express';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const last3 = await itemService.getLast3().lean();
        return res.render('home', { title: 'GlowAlchemy', items: last3 });
    } catch (err) {
        return res.render('home', { title: 'GlowAlchemy' });
    }
});

router.get('/catalog', async (req, res) => {
    let items = [];

    try {
        items = await itemService.getAll().lean();
    } catch (err) {
        return res.redirect('/404');
    }

    return res.render('catalog', { items, title: 'Product Catalog - GlowAlchemy' });
});

export default router;