import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import volcanoService from '../services/volcanoService.js';

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
    const volcanoData = req.body;
    const ownerId = req.user?._id;
    try {
        await volcanoService.create(volcanoData, ownerId);
        return res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create', { error: errorMessage, volcano: volcanoData });
    }
});

router.get('/volcano/:volcanoId/details', async (req, res) => {
    try {
        const volcano = await volcanoService.getOne(req.params.volcanoId).lean();

        const isLogged = !!req.user?._id;
        const isOwner = isLogged && volcano.owner.toString() === req.user._id;
        const isVoted = isLogged && volcano.voteList.some(user => user.user._id.toString() === req.user._id);

        const toShowVoteButton = isLogged && !isOwner && !isVoted;

        return res.render('details', { volcano, isOwner, isVoted, toShowVoteButton });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

router.get('/volcano/:volcanoId/edit', isAuth, async (req, res) => {
    try {
        const volcano = await volcanoService.getOne(req.params.volcanoId).lean();
        return res.render('edit', { volcano });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

router.post('/volcano/:volcanoId/edit', isAuth, async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const volcano = req.body;

    try {

        const findVolcano = await volcanoService.getOne(volcanoId).lean();

        if (findVolcano.owner?.toString() !== req.user?._id) {
            throw new Error('You cannot edit this volcano!');
        }

        await volcanoService.edit(volcanoId, volcano);
        return res.redirect(`/volcano/${volcanoId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, volcano });
    }
});

router.get('/volcano/:volcanoId/delete', isAuth, async (req, res) => {

    const volcanoId = req.params.volcanoId;

    try {

        const volcano = await volcanoService.getOne(volcanoId).lean();

        if (volcano.owner?.toString() !== req.user?._id) {
            throw new Error('You cannot delete this volcano!');
        }

        await volcanoService.del(req.params.volcanoId);
        res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('404', { error: errorMessage });
    }
});

router.get('/volcano/:volcanoId/vote', isAuth, async (req, res) => {

    const volcanoId = req.params.volcanoId;
    const userId = req.user?._id;

    try {

        const findVolcano = await volcanoService.getOne(volcanoId).lean();

        if (findVolcano.owner?.toString() === req.user?._id) {
            throw new Error('You cannot vote for this volcano, because you are the owner!');
        }

        const isVoted = findVolcano.voteList.find(user => user.user._id.toString() === userId);

        if (isVoted) {
            throw new Error('You have already voted for this volcano!');
        }

        await volcanoService.attach(volcanoId, userId);

        res.redirect(`/volcano/${volcanoId}/details`);
    } catch (err) {
        console.log(err)
        const errorMessage = getErrorMessage(err);
        return res.render('404', { error: errorMessage });
    }
});

router.get('/search', async (req, res) => {

    let volcanos = [];
    let hasFound = false;

    try {
        volcanos = await volcanoService.getAll().lean(); // lean is needed to convert it to array of objects so the handlebar can recognize it, lean must be used after it is awaited!
        hasFound = volcanos.length === 0 ? false : true;
    } catch (err) {
        console.log(err);
    }

    return res.render('search', { volcanos, hasFound });
});

router.get('/search/volcanos', async (req, res) => {
    try {
        const filter = req.query;
        const volcanos = await volcanoService.search(filter).lean();
        const hasFound = volcanos.length === 0 ? false : true;

        return res.render('search', { volcanos, filter, hasFound });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

export default router;