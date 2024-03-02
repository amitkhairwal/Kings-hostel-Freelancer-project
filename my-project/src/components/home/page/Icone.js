import React from "react";
import { Link } from "react-router-dom"; // Ensure you're using react-router for navigation
import Service from "./Service"; // Assuming Service is a component you've defined
import FeaturesAndBenefits from "./FeaturesAndBenefits"; // Assuming FeaturesAndBenefits is another component
import img1 from "../../../image/metro_station.jpg";
import img2 from "../../../image/library.jpg";
import img3 from "../../../image/vegas_mall.webp";
import { MdLocationOn } from 'react-icons/md'
function Amenities() {
  return (
    <>
      <div className="mt-4 bg-slate-100 p-4 md:p-8 lg:p-12 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">
          All Amenities At Your Door Steps
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <img
              className="w-full h-full object-cover"
              src={img3}
              alt="Image 1"
            />
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">Vegas Mall</h2>
              <p className="flex  item-center font-semibold gap-1 mt-2"> <MdLocationOn className='h-4 w-4 text-green-700'/>  650m</p>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              className="w-full h-full object-cover"
              src={img2}
              alt="Image 2"
            />
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">Library</h2>
              <p className=" flex  item-center font-semibold gap-1 mt-2"><MdLocationOn className='h-4 w-4 text-green-700'/> 150m</p>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              className="w-full h-full object-cover"
              src={img1}
              alt="Image 3"
            />
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">Dwarka Metro Station</h2>
              <p className="flex  item-center font-semibold gap-1 mt-2"><MdLocationOn className='h-4 w-4 text-green-700'/> 1.356 km</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amenities;
