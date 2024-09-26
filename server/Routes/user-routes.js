import express from 'express';
import {Signup, Login} from '../Controllers/user-controller.js'


const app = express.Router();
app.post('/register', Signup)
app.post('/login', Login)

export default app