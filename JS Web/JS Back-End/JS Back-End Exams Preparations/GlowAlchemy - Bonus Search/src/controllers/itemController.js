import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'Create Product - GlowAlchemy' });
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user?._id;
    try {
        await itemService.create(data, ownerId);
        return res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create', { error: errorMessage, data, title: 'Create Product - GlowAlchemy' });
    }
});

router.get('/cosmetic/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await itemService.getOne(itemId).lean();

        const isOwner = item.owner.toString() === req.user?._id;
        const isVoted = item.recommendList.some(user => user._id.toString() === req.user?._id);

        item.ingredients = item.ingredients.split(', ').join(' / ');

        return res.render('details', { item, isOwner, isVoted, title: "Product's Details - GlowAlchemy" });
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/cosmetic/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await itemService.getOne(itemId).lean();

        if (item.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        return res.render('edit', { item, title: 'Edit Product - GlowAlchemy' });
    } catch (err) {
        console.log(err);
        return res.redirect('/404');
    }
});

router.post('/cosmetic/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    const item = req.body;

    try {

        const findItem = await itemService.getOne(itemId).lean();

        if (findItem.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await itemService.edit(itemId, item);
        return res.redirect(`/cosmetic/${itemId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, item, title: 'Edit Product - GlowAlchemy' });
    }
});

router.get('/cosmetic/:itemId/delete', isAuth, async (req, res) => {

    const itemId = req.params.itemId;

    try {

        const item = await itemService.getOne(itemId).lean();

        if (item.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await itemService.del(itemId);
        res.redirect('/catalog');
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/cosmetic/:itemId/recommend', isAuth, async (req, res) => {

    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {

        const findItem = await itemService.getOne(itemId).lean();

        if (findItem.owner?.toString() === req.user?._id) {
            return res.redirect('/404');
        }

        const isVoted = findItem.recommendList.find(user => user._id.toString() === userId);

        if (isVoted) {
            return res.redirect('/404');
        }

        await itemService.attach(itemId, userId);

        res.redirect(`/cosmetic/${itemId}/details`);
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/search', async (req, res) => {

    let items = [];

    try {
        items = await itemService.getAll().lean();
    } catch (err) {
        return res.redirect('/404');
    }

    return res.render('search', { items, title: 'Search Products - GlowAlchemy' });
});

router.get('/search/items', async (req, res) => {
    try {
        const filter = req.query;
        const items = await itemService.search(filter).lean();

        return res.render('search', { items, filter, title: 'Search Products - GlowAlchemy' });
    } catch (err) {
        return res.redirect('/404');
    }
});

export default router;