import React from "react";
import img1 from "../../../image/activity.jpg";
import { IoBedOutline } from 'react-icons/io5';
import { BiCube } from 'react-icons/bi';
import { FaChair } from 'react-icons/fa';
import { MdBalcony, MdCleaningServices, MdLocalLaundryService, MdOutlineBedroomChild } from 'react-icons/md';
import { GiCampCookingPot, GiLift, GiMeal, GiWaterfall } from 'react-icons/gi';
import { PiTelevisionSimpleDuotone } from 'react-icons/pi';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { TbAirConditioning } from 'react-icons/tb';
import { IoIosWifi } from 'react-icons/io';

export default function Cultural() {
  return (
    <div className="mt-4 bg-slate-100 p-4 md:p-8 lg:p-12 flex flex-col items-center">
      <div className="services-container w-full max-w-4xl grid grid-cols-1 gap-8">
        {/* Image and description container */}
        <div className="service-item flex flex-col items-center text-center">
          <img
            src={img1}
            alt="Cultural Diversity"
            className="w-full h-auto md:max-w-xl object-center mb-8"
          />
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-4">Description</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-500">
            Catering to the holistic needs of our residents, Kings Hostel/PG
            proudly introduces our After-Hours Chill Zone, a dedicated space for
            students to unwind and rejuvenate after a long day of academic
            pursuits. Nestled conveniently in the heart of Dwarka Sector 14,
            this recreational haven features top-notch table tennis facilities,
            providing an avenue for both relaxation and social engagement. As
            advocates for student well-being, we recognize the importance of
            fostering a balanced lifestyle.
            <br /> Our After-Hours Chill Zone serves as a sanctuary where
            residents can escape the rigors of academic life and immerse
            themselves in recreational activities. Whether it's a friendly match
            of table tennis to relieve stress or simply unwinding with friends
            in a vibrant setting, this space encourages mental rejuvenation and
            promotes a sense of community among residents.
            <br />
            Join us at Kings Hostel/PG's After-Hours Chill Zone and embark on a
            journey of relaxation, recreation, and community building. Step away
            from the academic hustle and immerse yourself in a world of leisure
            and camaraderie. Your well-being is our priority, and we invite you
            to experience the difference at Kings Hostel/PG.
          </p>
        </div>
      </div>

      {/* Features sections */}
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
