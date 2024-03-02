import React, { useState } from 'react';
import axios from 'axios';

function AddListing() {
  const [listing, setListing] = useState({
    name: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setListing({ ...listing, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/listings/add', listing);
      alert('Listing added successfully!');
      setListing({ name: '', description: '', image: '' });
    } catch (error) {
      console.error('Failed to add listing', error);
      alert('Failed to add listing');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Add Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={listing.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 xl:text-xl"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={listing.description}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-xl"
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={listing.image}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 xl:text-xl"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Listing
        </button>
      </form>
    </div>
  );
}

export default AddListing;
