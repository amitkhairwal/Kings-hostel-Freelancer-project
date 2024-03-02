import express from 'express';

import { create, getposts } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', create)
router.get('/getposts', getposts)

export default router;