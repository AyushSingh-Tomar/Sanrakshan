import express from 'express';
import cors from 'cors';

// application configuration
const app = express()
const port=4000

// MiddleWare
app.use(express.json())
app.use(cors())

app.get()