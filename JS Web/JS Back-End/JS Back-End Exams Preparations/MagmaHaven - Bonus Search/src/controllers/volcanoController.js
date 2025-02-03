import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import volcanoService from '../services/volcanoService.js';

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', isAuth, async (req, res) => {
    const volcanoData = req.body;
    const ownerId = req.user?._id;
    try {
        await volcanoService.create(volcanoData, ownerId);
        return res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create', { error: errorMessage, volcano: volcanoData, title: 'Create' });
    }
});

router.get('/volcano/:volcanoId/details', async (req, res) => {
    try {
        const volcano = await volcanoService.getOne(req.params.volcanoId).lean();

        const isOwner = volcano.owner.toString() === req.user?._id;
        const isVoted = volcano.voteList.some(user => user._id.toString() === req.user?._id);

        return res.render('details', { volcano, isOwner, isVoted, title: 'Details' });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!', title: '404 Page' });
    }
});

router.get('/volcano/:volcanoId/edit', isAuth, async (req, res) => {
    try {
        const volcano = await volcanoService.getOne(req.params.volcanoId).lean();

        if (volcano.owner?.toString() !== req.user?._id) {
            return res.render('404', { title: '404 Page' });
        }

        return res.render('edit', { volcano, title: 'Edit' });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!', title: '404 Page' });
    }
});

router.post('/volcano/:volcanoId/edit', isAuth, async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const volcano = req.body;

    try {

        const findVolcano = await volcanoService.getOne(volcanoId).lean();

        if (findVolcano.owner?.toString() !== req.user?._id) {
            return res.render('404', { title: '404 Page' });
        }

        await volcanoService.edit(volcanoId, volcano);
        return res.redirect(`/volcano/${volcanoId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, volcano, title: 'Edit' });
    }
});

router.get('/volcano/:volcanoId/delete', isAuth, async (req, res) => {

    const volcanoId = req.params.volcanoId;

    try {

        const volcano = await volcanoService.getOne(volcanoId).lean();

        if (volcano.owner?.toString() !== req.user?._id) {
            return res.render('404', { title: '404 Page' });
        }

        await volcanoService.del(req.params.volcanoId);
        res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('404', { error: errorMessage, title: '404 Page' });
    }
});

router.get('/volcano/:volcanoId/vote', isAuth, async (req, res) => {

    const volcanoId = req.params.volcanoId;
    const userId = req.user?._id;

    try {

        const findVolcano = await volcanoService.getOne(volcanoId).lean();

        if (findVolcano.owner?.toString() === req.user?._id) {
            return res.render('404', { title: '404 Page' });
        }

        const isVoted = findVolcano.voteList.find(user => user._id.toString() === userId);

        if (isVoted) {
            return res.render('404', { title: '404 Page' });
        }

        await volcanoService.attach(volcanoId, userId);

        res.redirect(`/volcano/${volcanoId}/details`);
    } catch (err) {
        console.log(err)
        const errorMessage = getErrorMessage(err);
        return res.render('404', { error: errorMessage, title: '404 Page' });
    }
});

router.get('/search', async (req, res) => {

    let volcanos = [];

    try {
        volcanos = await volcanoService.getAll().lean(); // lean is needed to convert it to array of objects so the handlebar can recognize it, lean must be used after it is awaited!
    } catch (err) {
        console.log(err);
    }

    return res.render('search', { volcanos, title: 'Search' });
});

router.get('/search/volcanos', async (req, res) => {
    try {
        const filter = req.query;
        const volcanos = await volcanoService.search(filter).lean();

        return res.render('search', { volcanos, filter, title: 'Search' });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!', title: '404 Page' });
    }
});

export default router;