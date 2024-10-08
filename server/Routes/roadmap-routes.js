import express from 'express'
import {createPath} from '../Controllers/roadmap-controller.js'
import Auth from '../Middlewares/auth.js';

const app = express.Router();
app.post('/create-path',Auth, createPath)


export default app