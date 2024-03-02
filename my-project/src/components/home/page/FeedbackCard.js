import React from "react";

const FeedbackCard = ({ content, name, title, img, rating }) => {
  // Function to render rating stars
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          key={i}
          className="w-6 h-6 fill-current text-yellow-400"
          // xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 1l2.6 6.4h6.8l-5.2 4.2 2.2 6.6-5.8-4.2-5.8 4.2 2.2-6.6-5.2-4.2h6.8l2.6-6.4z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mx-auto my-0 feedback-card">
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
        {content}
      </p>
      <div className="flex items-center">
        {/* Render rating stars */}
        <div className="flex mr-2">{renderStars()}</div>
        <div className="flex flex-col">
          <img src={img} alt={name} className="rounded-full" />
          <div className="flex flex-col ml-2">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
              {name}
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
