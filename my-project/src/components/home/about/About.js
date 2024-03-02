import React from 'react';
import about from '../../../image/about.webp';
import OurTeam from './OurTeam'; // Ensure this path matches the location of your OurTeam component

export default function About() {
    return (
        <div className="mt-2 bg-slate-100 p-4 md:p-8">
            {/* Mission Statement Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col justify-center">
                    <h3 className='text-5xl font-semibold mb-3'>Mission Statement</h3>
                    <p>
                        At Kings Hostel, our mission is to provide a comfortable and hygienic living space for students and working professionals, complete with nutritious meals and cultural experiences that foster personal growth. We are committed to ensuring the safety and well-being of our guests while providing them with a welcoming and diverse environment.
                    </p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={about} alt="Mission Statement" className="max-w-full h-auto md:max-w-md lg:max-w-lg" />
                </div>
            </div>
            {/* Our Team Section */}
            <OurTeam/>
        </div>
    );
}
