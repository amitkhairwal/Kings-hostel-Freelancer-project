import React from 'react';
import img5 from '../../../image/ceo.webp'; // Update the path to your actual image
import img6 from '../../../image/chef.webp'; // Update the path to your actual image
import Testimonials from '../page/Testimonials'; // Update the import path to where your Testimonials component is located

export default function OurTeam() {
    const team = [
        {
            name: "John Smith",
            role: "Founder & CEO",
            image: img5,
            bio: 'Hi, I’m Amit Kumar, the founder of Kings Hostel. With a background in B. Sc (Hotel Management) and over 7 years of experience in the hospitality industry, I’ve honed my skills in guest services, operations, and management. My journey began Front Office Department at Leela Palace, Bangalore, where I learned the art of creating memorable guest experiences. Later, as a Purchase Supervisor at the Balubaid Group of Companies in Jeddah, KSA, I delved into global procurement and supply chain management. In April 2018, I transitioned to the role of Business Operations Manager at Sona Yukti Pvt. Ltd in Delhi, where I orchestrated business operations, fine-tuning my leadership abilities. Since 2020, I’ve been passionately involved in the PG business, hosting a diverse community of more than 600 tenants. Welcome to Kings Hostel, where hospitality meets practical living'
        },
        {
            name: "Lisa Johnson",
            role: "Head Chef",
            image: img6,
            bio: "Lisa's expertise in creating nutritious and delicious meals makes her a valuable member of the Kings Hostel team. She is passionate about using fresh and healthy ingredients to create meals that cater to everyone's dietary needs."
        },
    ];

    return (
        <div className="container mx-auto max-xl-screen-lg p-4 md:p-0">
            <div className="mt-2 bg-slate-100 p-4 md:p-8">
                <div className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Team</h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Meet Our Team: Dedicated Professionals Committed to Your Comfort and Well-being
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
                        {team.map((member) => (
                            <div key={member.name} className="flex flex-col sm:flex-row items-center">
                                <div className="sm:w-1/3 flex justify-center">
                                    <img
                                        className="h-48 w-full object-cover sm:h-full sm:w-48 rounded-full"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                </div>
                                <div className="mt-6 sm:mt-0 sm:ml-6 sm:flex-1 text-center sm:text-left">
                                    <div className="text-lg font-semibold text-indigo-600">{member.role}</div>
                                    <div className="mt-2 text-xl font-bold text-gray-900">{member.name}</div>
                                    <div className="mt-4 text-gray-500">{member.bio}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-5 px-10">
                    <h1 className="font-bold text-4xl text-white text-center">Client Testimonials</h1>
                    <p className="font-normal text-2xl text-white text-center mt-4">Hear What Our Clients Have to Say About Us</p>
                </div>
                <Testimonials />
            </div>
        </div>
    );
}
