import express from "express";
const router  = express.Router();

import {signin,signup} from '../controllers/users.js';
//https:localhost5000/users/

router.post('/signin',signin);
router.post('/signup',signup);

export default router;