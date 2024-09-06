import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io'; 
import approvalRoutes from './Routes/approvalRoutes.js';
import HttpError from './Models/http-error.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const server = http.createServer(app); // Create HTTP server
const io = new SocketIOServer(server); // Initialize Socket.IO with the HTTP server

// Middleware
app.use(express.json());
app.use(cors());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api/approvals', approvalRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;        
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }

  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

// Connect to MongoDB and start the server
mongoose.connect(`mongodb+srv://AniketSih:ANI0103CS221060@cluster0.ur8jx.mongodb.net/`)
  .then(() => {
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    console.log("MongoDB Connected Successfully.");
  })
  .catch(err => {
    console.log(err);
  });

  // WebSocket setup
io.on('connection', (socket) => {
  console.log('New WebSocket connection');
  socket.on('disconnect', () => {
    console.log('WebSocket disconnected');
  });
});

export { io };