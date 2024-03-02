import React from "react";
import Slider from "react-slick";
import img1 from "./pg-carousel-img1.jpg";
import img2 from "./pg-carousel-img2.jpg";

export function Carousels() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    // <h1>asdasds</h1>
    <div className="w-full m-2 mb-12  ">
      <Slider {...settings}>
        <div>
          <img
            style={{ height: "80vh" }}
            className="w-full"
            src={img1}
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            style={{ height: "80vh" }}
            className="w-full"
            src={img2}
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            style={{ height: "80vh" }}
            className="w-full"
            src={img1}
            alt="Slide 3"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}
