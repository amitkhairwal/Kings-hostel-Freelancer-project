import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using react-router for navigation
import Service from './Service'; // Assuming Service is a component you've defined
import FeaturesAndBenefits from './FeaturesAndBenefits'; // Assuming FeaturesAndBenefits is another component

function OurServicesSection() {
    return (
        <div className="container mx-auto max-xl-screen-lg p-4 md:p-0">
            <div className="mt-2 bg-zinc-100 p-4 md:p-8">
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-1 col-end-3 text-5xl font-bold">Our services</div>
                    <div className="col-end-7 col-span-2">
                        <Link to="/services">
                            <button className="mt-4 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded">View All Services</button>
                        </Link>
                    </div>
                </div>
                <Service />
                <FeaturesAndBenefits />
            </div>
        </div>
    );
}
export default OurServicesSection;