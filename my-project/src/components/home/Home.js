import React from 'react';
import OurTeam from './about/OurTeam';
import Reviews from './Reviews';
import ReviewComponent from './ReviewComponent';
import RatingsReview from './page/RatingsReview';
import OurServicesSection from './page/OurServicesSection';
import LuxuryLivingSection from './page/LuxuryLivingSection';

export default function Home() {
    return (
        <div className="container mx-auto max-xl-screen-lg p-4 md:p-0 bg-zinc-100">
            <LuxuryLivingSection/>
            <RatingsReview/>
            <OurServicesSection/>
            <OurTeam />
            {/* <Reviews /> */}
            {/* <ReviewComponent /> */}
        </div>
    );
}

