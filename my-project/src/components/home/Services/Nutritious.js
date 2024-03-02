import React from 'react';
import img2 from '../../../image/food.jpg';
import { IoBedOutline } from 'react-icons/io5';
import { BiCube } from 'react-icons/bi';
import { FaChair } from 'react-icons/fa';
import { MdBalcony, MdCleaningServices, MdLocalLaundryService, MdOutlineBedroomChild } from 'react-icons/md';
import { GiCampCookingPot, GiLift, GiMeal, GiWaterfall } from 'react-icons/gi';
import { PiTelevisionSimpleDuotone } from 'react-icons/pi';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { TbAirConditioning } from 'react-icons/tb';
import { IoIosWifi } from 'react-icons/io';

export default function Nutritious() {
    return (
        <div className="mt-4 bg-slate-100 p-4 md:p-8 lg:p-12 flex flex-col justify-center items-center">
            {/* Image centered with enhanced responsiveness */}
            <img src={img2} alt="Nutritious Meal Plans" className="w-3/4 sm:w-2/3 md:w-1/2 lg:max-w-xl h-auto mb-8 object-center" />

            {/* Description and button with responsive text size */}
            <div className="text-center mb-8 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Description</h2>
                <p className="mt-4 max-w-4xl text-sm sm:text-base md:text-lg text-gray-500">
                Explore our Nutritious Meal Plans tile to discover how Kings Hostel/PG prioritizes your health and well-being. Our carefully curated meal options are tailored to meet your dietary needs, ensuring you enjoy balanced and wholesome nutrition throughout your stay. <br />
                 From hearty breakfasts to satisfying dinners, our meal plans offer a variety of delicious and nutritious choices that cater to diverse tastes and preferences. Experience the convenience and nourishment of our meal plans, designed to support your academic and professional pursuits with energy and vitality.
                </p>
            </div>

            {/* Features sections with enhanced grid responsiveness */}
            <div className="container mx-auto p-4 mt-5 mt-12 ">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Features & Benefits
        </h2>
        <div className="services-container grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="service-item p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-none p-0">
              {[
                { icon: <IoIosWifi />, name: "Wi-Fi 300 Mbps" }, // Adding icon and name
                { icon: <TbAirConditioning />, name: "All AC rooms" },
                { icon: <GiWaterfall />, name: "Geyser" },
                { icon: <GiLift />, name: "Lift" },
                {
                  icon: <CgSmartHomeRefrigerator />,
                  name: "RO for water and Refrigerator",
                },
                { icon: <MdBalcony />, name: "Attached balcony" },
                {
                  icon: <PiTelevisionSimpleDuotone />,
                  name: "Common hall with TV",
                },
                { icon: <MdLocalLaundryService />, name: "Laundry" },
                { icon: <GiCampCookingPot />, name: "Self cooking area" },
              ].map((feature, index) => (
                <li key={index} className="mb-1 flex items-center">
                  {typeof feature.icon === "string"
                    ? feature.icon
                    : feature.icon}{" "}
                  <span className="ml-2">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="service-item p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-2">More Features</h3>
            <ul className="list-none p-0">
              {[
                {
                  icon: <IoBedOutline />,
                  name: "Separate bed with box for storage",
                },
                { icon: <BiCube />, name: "Separate Almira" },
                { icon: <FaChair />, name: "Separate chair and table" },
                { icon: <MdCleaningServices />, name: "Daily cleaning" },
                {
                  icon: <MdOutlineBedroomChild />,
                  name: "Single and double sharing rooms",
                },
                { icon: <GiMeal />, name: "Three times meal and evening tea" },
              ].map((feature, index) => (
                <li key={index} className="mb-1 flex items-center">
                  {feature.icon} <span className="ml-2">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
        </div>
    );
}
