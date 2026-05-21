const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

import type { Express, Request, Response } from 'express';

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit';

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err: Error) => {
    console.error('MongoDB connection error:', err);
  });

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'OctoFit Tracker Backend - API Running' });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
