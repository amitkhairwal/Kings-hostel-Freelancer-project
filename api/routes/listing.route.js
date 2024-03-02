import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';

const router = express.Router();

// Create a new listing
router.post('/add', createListing);

// Delete a listing by ID
router.delete('/:id', deleteListing);

// Update a listing by ID
// Note: Typically, the update operation is done using PUT or PATCH method, not POST.
// Using PUT for the update operation to adhere to RESTful practices.
router.put('/:id', updateListing);

// Get a single listing by ID
router.get('/:id', getListing);

// Get all listings
router.get('/', getListings);

export default router;
