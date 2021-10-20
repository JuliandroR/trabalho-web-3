import express, { Router } from 'express';
import { resolve } from 'path';

const router = Router();

router.use('/pages', (req, res) => {
    res.status(404).send('Not found')
});
router.use('/uploads', express.static('images'));

router.use(express.static(resolve(__dirname, '../web/pages')));
router.use(express.static(resolve(__dirname, '../web')));

export default router;