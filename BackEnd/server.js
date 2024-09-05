import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import approvalRoutes from './Config/approvalRoutes.js'; // Adjust the path as needed
import HttpError from './Models/http-error.js'; // Adjust the path as needed

dotenv.config();

// Initialize the Express app
const app = express();
const port = process.env.PORT || 4000;

// Setup HTTP and Socket.IO server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

// Set headers for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// Routes
app.use('/api/approval', approvalRoutes);

// Catch all for invalid routes
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

// Database Connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@chat.5ojvxi4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=chat`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => {
    console.log("MongoDB Connected Successfully.");
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// Socket.io logic
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });

  // Listen for document approval updates
  socket.on('documentApproved', (data) => {
    io.emit('progressUpdate', data); // Broadcast to all clients
  });
});

