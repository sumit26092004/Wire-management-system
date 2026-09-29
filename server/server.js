import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import dealerRoutes from './routes/dealerRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/dealers', dealerRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/resources', resourceRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', system: 'Railpower & Railwire API', time: new Date().toISOString() });
});

// Serve static frontend build in production mode
const clientDist = path.join(__dirname, '../client/dist');
app.use(express.static(clientDist));

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(clientDist, 'index.html'));
  } else {
    res.status(404).json({ message: 'API Endpoint Not Found' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (http://localhost:${PORT})`);
});
