import {configDotenv} from 'dotenv'
import express from 'express'
import { connectToDB } from './DatabaseCon/index.js';
import userRoutes from './Routes/user-routes.js'
import RoadmapRoutes from './Routes/roadmap-routes.js'
import cors from 'cors'

// Database Connection
connectToDB();

// Loading env Variables
configDotenv();

// express setup
const app = express();
app.use(express.json());
app.use(cors());

// Routes Setup
app.use('/', userRoutes)
app.use('/',RoadmapRoutes)

// server setup in action
const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})
