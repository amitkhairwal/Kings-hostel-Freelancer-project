import React from 'react';
import { IoIosWifi } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb";
import { GiLift } from "react-icons/gi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaChair } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { MdLocalLaundryService } from "react-icons/md";
import { GiCampCookingPot } from "react-icons/gi";
import { BiCube } from "react-icons/bi";
import { GiWaterfall } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import img4 from '../../../image/featurea.webp'; // Ensure you have this import if img4 is used

function FeaturesAndBenefits() {
    return (
        <div className="container mx-auto p-4 mt-5 mt-12 ">
            <h2 className="text-4xl font-bold mb-4 text-center">Features & Benefits</h2>
            <div className="services-container grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                <div className="service-item p-4 shadow-lg rounded-lg bg-white">
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <ul className="list-none p-0">
                        {[
                            { icon: <IoIosWifi />, name: 'Wi-Fi 300 Mbps' }, // Adding icon and name
                            { icon:<TbAirConditioning/> , name: 'All AC rooms' },
                            { icon: <GiWaterfall/>, name: 'Geyser' },
                            { icon: <GiLift/>, name: 'Lift' },
                            { icon: <CgSmartHomeRefrigerator/>, name: 'RO for water and Refrigerator' },
                            { icon: <MdBalcony/>, name: 'Attached balcony' },
                            { icon: <PiTelevisionSimpleDuotone/>, name: 'Common hall with TV' },
                            { icon: <MdLocalLaundryService/>, name: 'Laundry' },
                            { icon: <GiCampCookingPot/>, name: 'Self cooking area' }
                        ].map((feature, index) => (
                            <li key={index} className="mb-1 flex items-center">
                                {typeof feature.icon === 'string' ? feature.icon : feature.icon} <span className="ml-2">{feature.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="service-item p-4 shadow-lg rounded-lg bg-white">
                    <h3 className="text-lg font-semibold mb-2">More Features</h3>
                    <ul className="list-none p-0">
                        {[
                            { icon: <IoBedOutline />, name: 'Separate bed with box for storage' },
                            { icon: <BiCube />, name: 'Separate Almira' },
                            { icon: <FaChair />, name: 'Separate chair and table' },
                            { icon: <MdCleaningServices />, name: 'Daily cleaning' },
                            { icon: <MdOutlineBedroomChild />, name: 'Single and double sharing rooms' },
                            { icon: <GiMeal />, name: 'Three times meal and evening tea' }
                        ].map((feature, index) => (
                            <li key={index} className="mb-1 flex items-center">
                                {feature.icon} <span className="ml-2">{feature.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="service-item">
                    <img src={img4} alt="Service" className="w-full h-auto md:w-3/4 shadow-lg rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default FeaturesAndBenefits;
