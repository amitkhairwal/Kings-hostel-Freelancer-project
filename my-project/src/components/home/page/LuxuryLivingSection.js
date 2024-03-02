import img from '../../../image/img1.webp';
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you've installed react-router-dom and imported Link



function LuxuryLivingSection() {
    return (
        <div className="flex flex-col md:flex-row items-center bg-zinc-100 p-8">
            <div className="py-4 md:pr-8 flex-grow">
                <h2 id="services" className="text-6xl font-semibold mb-3">Luxury Living for Students and Professionals</h2>
                <p className="text-gray-700 text-xl">Experience Kings Hostel/PG in Dwarka Sector 14, offering comfort and convenience for students and professionals. Enjoy nutritious meals, vibrant community living, and affordable, quality accommodation near NSUT and Deen Dayal Upadhyaya College.</p>
                <Link to="/services">
                    <button className="mt-4 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded">View All Services</button>
                </Link>
            </div>
            <div className="py-8 flex-grow">
                {/* Increased image size for larger breakpoints */}
                <img src={img} alt="Kings Hostel and PG" className="w-full h-auto md:w-4/4" />
            </div>
        </div>
    );
}

export default LuxuryLivingSection;
