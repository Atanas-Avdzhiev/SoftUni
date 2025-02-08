import { Router } from 'express';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/', async (req, res) => {
    res.render('home', { title: 'Auction House' });
});

router.get('/catalog', async (req, res) => {
    let items = [];
    const openAuctions = [];
    try {
        items = await itemService.getAll().lean();

        items.forEach(auction => {
            if (auction.closed === false) {
                openAuctions.push(auction);
            }
        });
    } catch (err) {
        return res.redirect('/404');
    }

    return res.render('catalog', { items: openAuctions, title: 'Browse Auctions' });
});

export default router;