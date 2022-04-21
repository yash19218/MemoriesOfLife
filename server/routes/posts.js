import express from "express";
const router  = express.Router();

import {getPosts , createPost} from '../controllers/posts.js';
//https:localhost5000/posts/

router.get('/',getPosts);
router.post('/',createPost);

export default router;