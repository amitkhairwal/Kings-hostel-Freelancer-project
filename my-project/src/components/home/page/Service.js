import React from 'react';
import img1 from '../../../image/activity.jpg';
import img2 from '../../../image/food.jpg';
import img3 from '../../../image/services3.jpeg';

export default function Service() {
    return (
        <div className="services-container mt-12 px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service item for Cultural Diversity */}
            <div className="service-item flex flex-col items-center text-center">
                <img src={img1} alt="Cultural Diversity" className="w-full h-auto md:max-w-xs lg:max-w-sm object-cover mb-4" style={{ width: '100%', height: '100%' }} />
                <h3 className='text-lg md:text-xl font-bold text-black mb-2'>After-Hours Chill Zone</h3>
                <p>Take a break from studies and relax in our After-Hours Chill Zone, where students can enjoy friendly matches of table tennis to unwind and recharge</p>
                <a href="/cultural" className='text-blue-600 hover:text-blue-700 mt-2'>Read More</a>
            </div>

            {/* Service item for Nutritious Meal Plans */}
            <div className="service-item flex flex-col items-center text-center">
                <img src={img2}  alt="Nutritious Meal Plans" className="w-full h-auto md:max-w-xs lg:max-w-sm object-cover mb-4" style={{ width: '100%', height: '100%' }} />
                <h3 className='text-lg md:text-xl font-bold text-black mb-2'>Nutritious Meal Plans</h3>
                <p>We provide a range of delicious and nutritious meal plans crafted by experienced chefs and nutritionists, using fresh and locally-sourced ingredients.</p>
                <a href="/nutritious" className='text-blue-600 hover:text-blue-700 mt-2'>Read More</a>
            </div>

            {/* Service item for Accommodation Services */}
            <div className="service-item flex flex-col items-center text-center">
                <img src={img3} alt="Accommodation Services" className="w-full h-auto md:max-w-xs lg:max-w-sm object-cover mb-4" style={{ width: '100%', height: '100%' }} />
                <h3 className='text-lg md:text-xl font-bold text-black mb-2'>Accommodation Services</h3>
                <p>We provide spacious, comfortable, and hygienic accommodation options for students and working professionals, complete with round-the-clock security and maintenance services.</p>
                <a href="/accommodation" className='text-blue-600 hover:text-blue-700 mt-2'>Read More</a>
            </div>
        </div>
    );
}
