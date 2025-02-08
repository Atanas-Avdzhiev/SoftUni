import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import itemService from '../services/itemService.js';

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'Publish Auction' });
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user?._id;
    try {
        await itemService.create(data, ownerId);
        return res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create', { error: errorMessage, data, title: 'Publish Auction' });
    }
});

router.get('/auction/:itemId/details', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await itemService.getOne(itemId).lean();

        const isOwner = item.owner.toString() === req.user?._id;

        if (isOwner) {
            const hasBid = !!item?.bidder;
            const bidderEmail = item?.bidder?.email;
            return res.render('details-owner', { item, hasBid, bidderEmail, title: 'Auction Details' });
        }

        const isUserBidder = item?.bidder?._id == req.user?._id;

        return res.render('details', { item, isUserBidder, title: 'Auction Details' });
    } catch (err) {
        console.log(err)
        return res.redirect('/404');
    }
});

router.get('/auction/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await itemService.getOne(itemId).lean();

        if (item.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        return res.render('edit', { item, title: 'Edit Auction' });
    } catch (err) {
        console.log(err);
        return res.redirect('/404');
    }
});

router.post('/auction/:itemId/edit', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    const item = req.body;

    try {

        const findItem = await itemService.getOne(itemId).lean();

        if (findItem.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        if (!!findItem.bidder && item.price && item.price === '') {
            throw new Error('This auction has a bidder, so you cannot change the price!');
        }

        await itemService.edit(itemId, item);
        return res.redirect(`/auction/${itemId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, item, title: 'Edit Auction' });
    }
});

router.get('/auction/:itemId/delete', isAuth, async (req, res) => {

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

router.post('/auction/:itemId/bid', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;
    const bidPrice = +req.body?.price;
    let item = [];
    let isUserBidder = false;
    try {

        item = await itemService.getOne(itemId).lean();

        if (item.owner.toString() === userId) {
            throw new Error('You cant bid your own auction!');
        }

        if (item?.bidder?._id == userId) {
            isUserBidder = true;
            throw new Error('You are currently the higher bidder!');
        }

        if (bidPrice <= item?.price) {
            throw new Error('Bid must be greater than the current price!');
        }

        item.price = bidPrice;
        item.bidder = userId;

        await itemService.edit(itemId, item);

        res.redirect(`/auction/${itemId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('details', { item, isUserBidder, error: errorMessage, title: 'Auction Details' });
    }

    res.end();
});

router.get('/auction/:itemId/close', isAuth, async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user?._id;

    try {

        const item = await itemService.getOne(itemId).lean();

        const isOwner = item.owner.toString() === userId;

        if (!isOwner) {
            return res.redirect('404');
        }

        const hasBid = !!item?.bidder;

        if (!hasBid) {
            return res.redirect('404');
        }

        item.closed = true;

        await itemService.edit(itemId, item);

        res.redirect('/closedAuctions');
    }
    catch (err) {
        res.redirect('/404');
    }

});

router.get('/closedAuctions', isAuth, async (req, res) => {

    let items = [];
    const openAuctions = [];
    const userId = req.user?._id;
    try {
        items = await itemService.getAll().lean();

        items.forEach(auction => {
            if (auction.closed === true && auction?.owner == userId) {
                openAuctions.push(auction);
            }
        });
    } catch (err) {
        return res.redirect('/404');
    }
    res.render('closed-auctions', { items: openAuctions, title: 'Closed Auctions' });
});

export default router;