import { Router } from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import deviceService from '../services/deviceService.js';

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('create', { title: 'TechStore - Create Product' });
});

router.post('/create', isAuth, async (req, res) => {
    const data = req.body;
    const ownerId = req.user?._id;
    try {
        await deviceService.create(data, ownerId);
        return res.redirect('/catalog');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create', { error: errorMessage, device: data, title: 'TechStore - Create Product' });
    }
});

router.get('/device/:deviceId/details', async (req, res) => {
    const deviceId = req.params.deviceId;
    try {
        const device = await deviceService.getOne(deviceId).lean();
        const isOwner = device.owner.toString() === req.user?._id;
        const isVoted = device.preferredList.some(user => user._id.toString() === req.user?._id);

        return res.render('details', { device, isOwner, isVoted, title: 'TechStore - Laptop Details' });
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/device/:deviceId/edit', isAuth, async (req, res) => {
    const deviceId = req.params.deviceId;
    try {
        const device = await deviceService.getOne(deviceId).lean();

        if (device.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        return res.render('edit', { device, title: 'TechStore - Edit Product' });
    } catch (err) {
        return res.redirect('/404');
    }
});

router.post('/device/:deviceId/edit', isAuth, async (req, res) => {
    const deviceId = req.params.deviceId;
    const device = req.body;

    try {

        const findDevice = await deviceService.getOne(deviceId).lean();

        if (findDevice.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await deviceService.edit(deviceId, device);
        return res.redirect(`/device/${deviceId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, device, title: 'TechStore - Edit Product' });
    }
});

router.get('/device/:deviceId/delete', isAuth, async (req, res) => {

    const deviceId = req.params.deviceId;

    try {

        const device = await deviceService.getOne(deviceId).lean();

        if (device.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await deviceService.del(deviceId);
        res.redirect('/catalog');
    } catch (err) {
        return res.redirect('/404');
    }
});

router.get('/device/:deviceId/prefer', isAuth, async (req, res) => {

    const deviceId = req.params.deviceId;
    const userId = req.user?._id;

    try {

        const findDevice = await deviceService.getOne(deviceId).lean();

        if (findDevice.owner?.toString() === req.user?._id) {
            return res.redirect('/404');
        }

        const isVoted = findDevice.preferredList.find(user => user._id.toString() === userId);

        if (isVoted) {
            return res.redirect('/404');
        }

        await deviceService.attach(deviceId, userId);

        res.redirect(`/device/${deviceId}/details`);
    } catch (err) {
        return res.redirect('/404');
    }
});

export default router;