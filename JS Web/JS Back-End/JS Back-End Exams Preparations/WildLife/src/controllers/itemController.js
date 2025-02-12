import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user?._id;
    try {
        await itemService.create(data, ownerId);
        return res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create', { error: errorMessage, data, title: 'Create Page' });
    }
});

router.get('/post/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await itemService.getOne(itemId).lean();

        const isOwner = item.author?._id.toString() === req.user?._id;
        const isVoted = item.votesOnPost.some(user => user._id.toString() === req.user?._id);
        const emailsArray = [];
        item.votesOnPost.forEach(user => emailsArray.push(user.email));
        const emails = emailsArray.join(', ');

        return res.render('details', { item, isOwner, isVoted, emails, title: 'Details Page' });
    } catch (err) {
        console.log(err)
        return res.redirect('/404');
    }
});

router.get('/post/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await itemService.getOne(itemId).lean();

        if (item.author?._id.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        return res.render('edit', { item, title: 'Edit Page' });
    } catch (err) {
        console.log(err);
        return res.redirect('/404');
    }
});

router.post('/post/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    const item = req.body;

    try {

        const findItem = await itemService.getOne(itemId).lean();

        if (findItem.author?._id.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await itemService.edit(itemId, item);
        return res.redirect(`/post/${itemId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, item, title: 'Edit Page' });
    }
});

router.get('/post/:itemId/delete', isAuth, async (req, res) => {

    const itemId = req.params.itemId;

    try {

        const item = await itemService.getOne(itemId).lean();

        if (item.author?._id.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await itemService.del(itemId);
        res.redirect('/catalog');
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/post/:itemId/:vote', isAuth, async (req, res) => {

    const itemId = req.params.itemId;
    const vote = req.params.vote;
    const userId = req.user?._id;

    try {

        const findItem = await itemService.getOne(itemId).lean();

        if (findItem.author?._id.toString() === req.user?._id) {
            return res.redirect('/404');
        }

        const isVoted = findItem.votesOnPost.some(user => user._id.toString() === userId);

        if (isVoted) {
            return res.redirect('/404');
        }

        if (vote === 'voteUp') {
            findItem.ratingOfPost++;
        }
        else if (vote === 'voteDown') {
            findItem.ratingOfPost--;
        } else {
            return res.redirect('/404');
        }

        await itemService.edit(itemId, findItem);
        await itemService.attach(itemId, userId);

        res.redirect(`/post/${itemId}/details`);
    } catch (err) {
        return res.redirect('/404');
    }
});

export default router;