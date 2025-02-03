import { Router } from 'express';
import deviceService from '../services/deviceService.js';
import { getErrorMessage } from '../utils/errorUtils.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const getLast3 = await deviceService.getLast3().lean();
        return res.render('home', { title: 'TechStore - Laptops and Computers', last3: getLast3 });
    } catch (err) {
        console.log(err);
        return res.render('home', { title: 'TechStore - Laptops and Computers' });
    }
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'TechStore - About Us' });
});

router.get('/catalog', async (req, res) => {
    let devices = [];

    try {
        devices = await deviceService.getAll().lean(); // lean is needed to convert it to array of objects so the handlebar can recognize it, lean must be used after it is awaited!
    } catch (err) {
        console.log(err);
    }

    return res.render('catalog', { devices, title: 'TechStore - Product Catalog' });
});

export default router;