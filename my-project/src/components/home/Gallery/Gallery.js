import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "@material-tailwind/react";
import { Carousels } from "../../Carousel/Carousel";

export default function Gallery() {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/listings");
        setListings(response.data);
      } catch (error) {
        console.error("Failed to fetch listings", error);
        setError("Failed to load listings. Please try again later.");
      }
    };

    fetchListings();
  }, []);

  return (
    <>
     
      <div className="container mx-auto px-4 py-8 bg-stone-200">
        <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {listings.map((listing) => (
            <div
              key={listing._id}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
            >
              {listing.image && listing.image.length > 0 && (
                <img
                  src={listing.image[0]}
                  alt={listing.name}
                  className="w-full h-48 md:h-64 lg:h-80 object-cover object-center"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{listing.name}</h3>
                <p className="text-gray-700 text-sm">{listing.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
