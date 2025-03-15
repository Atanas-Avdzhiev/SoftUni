import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import disasterService from '../services/disasterService.js';

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user?._id;
    try {
        await disasterService.create(data, ownerId);
        return res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create', { error: errorMessage, data, title: 'Create Page' });
    }
});

router.get('/disasters/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await disasterService.getOne(itemId).lean();

        const isOwner = item.owner.toString() === req.user?._id;
        const isVoted = item.interestedList.some(user => user._id.toString() === req.user?._id);

        return res.render('details', { item, isOwner, isVoted, title: 'Details Page' });
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/disasters/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await disasterService.getOne(itemId).lean();

        if (item.owner?.toString() !== req.user?._id) {
            return res.render('404', { error: 'You are not the owner!' });
        }

        return res.render('edit', { item, title: 'Edit Page' });
    } catch (err) {
        console.log(err);
        return res.redirect('/404');
    }
});

router.post('/disasters/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    const item = req.body;

    try {

        const findItem = await disasterService.getOne(itemId).lean();

        if (findItem.owner?.toString() !== req.user?._id) {
            return res.render('404', { error: 'You are not the owner!' });
        }

        await disasterService.edit(itemId, item);
        return res.redirect(`/disasters/${itemId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, item, title: 'Edit Page' });
    }
});

router.get('/disasters/:itemId/delete', isAuth, async (req, res) => {

    const itemId = req.params.itemId;

    try {

        const item = await disasterService.getOne(itemId).lean();

        if (item.owner?.toString() !== req.user?._id) {
            return res.render('404', { error: 'You are not the owner!' });
        }

        await disasterService.del(itemId);
        res.redirect('/catalog');
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/disasters/:itemId/interested', isAuth, async (req, res) => {

    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {

        const findItem = await disasterService.getOne(itemId).lean();

        if (findItem.owner?.toString() === req.user?._id) {
            return res.render('404', { error: 'You are the owner of this post!' });
        }

        const isVoted = findItem.interestedList.find(user => user._id.toString() === userId);

        if (isVoted) {
            return res.render('404', { error: 'You already have been interested!' });
        }

        await disasterService.attach(itemId, userId);

        res.redirect(`/disasters/${itemId}/details`);
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/search', async (req, res) => {

    let items = [];

    try {
        items = await disasterService.getAll().lean();
    } catch (err) {
        return res.render('search', { items: [], title: 'Search', error: 'Something went wrong!' });
    }

    return res.render('search', { items, title: 'Search' });
});

router.get('/search/disasters', async (req, res) => {
    try {
        const filter = req.query;
        const items = await disasterService.search(filter).lean();

        return res.render('search', { items, filter, title: 'Search' });
    } catch (err) {
        return res.render('search', { items: [], title: 'Search', error: 'Something went wrong!' });
    }
});

export default router;