import {configDotenv} from 'dotenv'
import express from 'express'
import { connectToDB } from './DatabaseCon/index.js';

// Database Connection
connectToDB();

// Loading env Variables
configDotenv();

// express setup
const app = express();


// server setup in action
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})