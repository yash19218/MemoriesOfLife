import express from "express";
const router  = express.Router();

import {getPosts , createPost , updatePost , deletePost,likePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';
//https:localhost5000/posts/

router.get('/',getPosts);
router.post('/',auth,createPost);//for posting data ! in DB
router.patch('/:id',auth,updatePost);//for updating we use patch!
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);//likePost is something we updating the thing!

export default router;