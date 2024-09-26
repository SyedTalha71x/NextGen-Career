import {configDotenv} from 'dotenv'
import express from 'express'
import { connectToDB } from './DatabaseCon/index.js';
import userRoutes from './Routes/user-routes.js'

// Database Connection
connectToDB();

// Loading env Variables
configDotenv();

// express setup
const app = express();
app.use(express.json());

// Routes Setup
app.use('/api', userRoutes)

// server setup in action
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})
