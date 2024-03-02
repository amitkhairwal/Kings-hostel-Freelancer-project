import React from "react";
import Carousel from "nuka-carousel";
import FeedbackCard from "./FeedbackCard";
import img from '../../../image/img2.webp';

const Testimonials = () => {
  const feedback = [
    {
      content: "As you come to a new town to pursue your goals, you are skeptical about how will your living arrangement be like. But, Kings PG made it very easy for me to accomodate into my college life. A home away from home in the truest sense. Clean environment and good homely food. The caretakers are very understanding and will go to the fullest to help you in any kind of issue. Thanks for the lovely stay.",
      name: "Aryaman S",
      title: "Student",
      img: img,
      rating: 5,
    },
    {
      content: "Best PG in the area serving good food hospitality and environment. Would 200% recommend to everyone. Big shout out to Owner for catering best service in the area❤️ Must try their food before considering other PG’s",
      name: "Vaibhav R",
      title: "Professional",
      img: img,
      rating: 4,
    },
    {
      content: "Awesome place to stay. Easy to reach well connected by road as well as metro. Owner is very well mannered and supportive. Food provided by them is hygienic as well home like food. Charges are affordable as well. Well furnished,neat and tidy",
      name: "Himanshu Raghav",
      title: "Student",
      img: img,
      rating: 5,
    },
    {
      content: "Kings Hostel/PG provided a hygienic and secure environment, complete with nutritious meals and a diverse cultural experience. The perfect choice for professionals and students.",
      name: "DAVID WILSON",
      title: "Professional",
      img: img,
      rating: 4,
    },
  ];

  return (
    <div className="bg-gradient-to-r to-indigo-600 py-0 px-4 sm:px-10">
      <Carousel
        className="mt-0"
        slidesToShow={1}
        cellSpacing={20}
        wrapAround={true}
        autoplay={true}
        autoplayInterval={3000}
        breakpoints={{
          640: { // sm
            slidesToShow: 1,
          },
          768: { // md
            slidesToShow: 2,
          },
          1024: { // lg
            slidesToShow: 3,
          },
          1280: { // xl
            slidesToShow: 4,
          },
        }}
      >
        {feedback.map((item, index) => (
          <FeedbackCard
            key={index}
            content={item.content}
            name={item.name}
            title={item.title}
            img={item.img}
            rating={item.rating}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
