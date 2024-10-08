import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

if (!process.env.OPENAI_SECRET_KEY) {
    throw new Error('OPENAI_SECRET_KEY is not defined in environment variables');
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_SECRET_KEY
});

export default openai;