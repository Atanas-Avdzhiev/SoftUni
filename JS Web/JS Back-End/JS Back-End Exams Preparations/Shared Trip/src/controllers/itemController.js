import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'Offer Trip' });
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user?._id;
    try {
        await itemService.create(data, ownerId);
        return res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create', { error: errorMessage, data, title: 'Offer Trip' });
    }
});

router.get('/trip/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await itemService.getOne(itemId).lean();

        const isOwner = item.creator?._id.toString() === req.user?._id;
        const isJoined = item.buddies.some(user => user._id.toString() === req.user?._id);
        const noAvailableSeats = item.seats <= 0 ? true : false;

        const buddies = [];
        item.buddies.forEach(buddie => buddies.push(buddie.email));
        const emails = buddies.join(', ');
        
        return res.render('details', { item, isOwner, isJoined, noAvailableSeats, emails, title: 'Details Trip' });
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/trip/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await itemService.getOne(itemId).lean();

        if (item.creator?._id.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        return res.render('edit', { item, title: 'Edit Trip' });
    } catch (err) {
        console.log(err);
        return res.redirect('/404');
    }
});

router.post('/trip/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    const item = req.body;

    try {

        const findItem = await itemService.getOne(itemId).lean();

        if (findItem.creator?._id.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await itemService.edit(itemId, item);
        return res.redirect(`/trip/${itemId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, item, title: 'Edit Trip' });
    }
});

router.get('/trip/:itemId/delete', isAuth, async (req, res) => {

    const itemId = req.params.itemId;

    try {

        const item = await itemService.getOne(itemId).lean();

        if (item.creator?._id.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await itemService.del(itemId);
        res.redirect('/catalog');
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/trip/:itemId/join', isAuth, async (req, res) => {

    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {

        const findItem = await itemService.getOne(itemId).lean();

        if (findItem.creator?._id.toString() === req.user?._id) {
            return res.redirect('/404');
        }

        const isVoted = findItem.buddies.find(user => user._id.toString() === userId);

        if (isVoted) {
            return res.redirect('/404');
        }

        if (findItem.seats <= 0) {
            return res.redirect('/404');
        }

        findItem.seats--;

        await itemService.edit(itemId, findItem);
        await itemService.attach(itemId, userId);

        res.redirect(`/trip/${itemId}/details`);
    } catch (err) {
        return res.redirect('/404');
    }
});

export default router;