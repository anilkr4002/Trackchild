require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.set('io', io);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/locations', locationRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
