import express from 'express'
import {createPath, getPathDetails} from '../Controllers/roadmap-controller.js'
import Auth from '../Middlewares/auth.js';

const app = express.Router();
app.post('/create-path',Auth, createPath)
app.get('/get-path-details/:id', Auth, getPathDetails);


export default app