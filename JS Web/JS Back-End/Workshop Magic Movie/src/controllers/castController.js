import { Router } from 'express';
import { authMiddleware, isAuth, notAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import castService from '../services/castService.js';

const router = Router();

router.get('/create/cast', isAuth, (req, res) => {
    res.render('create-cast');
});

router.post('/create/cast', isAuth, async (req, res) => {
    const movie = req.body;
    try {
        await castService.create(movie);
        return res.redirect('/');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create-cast', { error: errorMessage, movie });
    }
});

export default router;