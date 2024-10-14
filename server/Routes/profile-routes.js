import {showProfile, editProfile} from '../Controllers/profile-controller.js'
import express from 'express'
import Auth from '../Middlewares/auth.js';

const router = express.Router();
router.get('/show-profile', Auth, showProfile)
router.post('/update-profile', Auth, editProfile)

export default router;
