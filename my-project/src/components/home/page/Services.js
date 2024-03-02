import React from 'react'
import Service from './Service'
import Testimonials from './Testimonials'

export default function Services() {
    return (
        <div className="mt-2 bg-slate-100 p-4 md:p-8">
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-1 col-end-3  text-5xl font-bold">All services</div>
            </div>
            <Service />
            <div className="bg-gradient-to-r to-indigo-600 py-5 px-10 mt-10">
                <h1 className="font-poppins font-bold text-4xl leading-60px text-black text-center">
                    What our clients say?
                </h1>
                <p className="font-poppins font-normal text-2xl leading-30px text-black text-center mt-4">
                    Hear What Our Clients Have to Say About Us
                </p>
            </div>
            <Testimonials />
        </div>
    )
}

