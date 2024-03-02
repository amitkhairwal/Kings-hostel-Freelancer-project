import React from 'react';
import Icone from './Icone';
function RatingsReview() {
    return (
        <div className="container mx-auto max-xl-screen-lg p-4 md:p-0">
            <div className="mt-2 bg-zinc-100 p-4 md:p-8">
                {/* Assuming Icone is a custom component you have defined */}
                <Icone />
                <div className="md:flex md:space-x-12 md:items-center md:mt-0 p-20">
                    {/* Ratings & Reviews */}
                    <div className="flex flex-col items-center mb-4 md:mb-0">
                        <p className="text-2xl font-bold">4.8</p>
                        <p className="text-lg">★★★★</p>
                        <p className="text-sm">2,394 Ratings</p>
                        <p className="text-sm">Google Reviews</p>
                    </div>
                    <div className="flex flex-col items-center mb-4 md:mb-0">
                        <p className="text-2xl font-bold">A+</p>
                        <p className="text-lg">★★★★</p>
                        <p className="text-sm">125 Reviews</p>
                        <p className="text-sm">BBB Rating</p>
                    </div>
                    {/* Guest Testimonial */}
                    <div className="md:flex-grow text-center">
                        <p className="text-lg font-bold">What Our Guests Say</p>
                        <blockquote className="border-l-2 border-gray-300 pl-4 my-4">
                            <p className="text-lg">"Kings Hostel/PG provided a home away from home. The nutritious food and hygienic environment were just what I needed to focus on my studies and work."</p>
                            <p className="text-sm italic">- Kings Hostel/PG, Dwarka</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RatingsReview;