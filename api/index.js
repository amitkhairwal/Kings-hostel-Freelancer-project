import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import listingRouter from './routes/listing.route.js'; 
import postRoutes from './routes/post.route.js'// Adjust the path as necessary
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env file into process.env

mongoose
  .connect(process.env.MONGO_URI) // Ensure your .env file has MONGO_URI defined
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Listing routes
app.use('/api/listings', listingRouter); // Note: Adjusted to plural 'listings' to reflect resource name
app.use('/api/post', postRoutes);
// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
const PORT = process.env.PORT || 3000; // Fallback to port 3000 if PORT not defined in .env
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
