import express from "express";
const router  = express.Router();

import {getPosts , createPost , updatePost} from '../controllers/posts.js';
//https:localhost5000/posts/

router.get('/',getPosts);
router.post('/',createPost);//for posting data ! in DB
router.patch('/:id',updatePost);//for updating we use patch!

export default router;