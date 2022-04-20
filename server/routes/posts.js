import express from "express";
const router  = express.Router();

import {getPosts} from '../controllers/posts.js';
//https:localhost5000/posts/
router.get('/',getPosts);

export default router;