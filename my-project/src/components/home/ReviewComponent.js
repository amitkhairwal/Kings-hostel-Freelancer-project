// // import React from 'react';

// // const reviews = [
// //   {
// //     name: 'Emily Selman',
// //     rating: 5,
// //     review: 'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.'
// //   },
// //   {
// //     name: 'Hector Gibbons',
// //     rating: 4,
// //     review: 'Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!'
// //   },
// //   {
// //     name: 'Mark Edwards',
// //     rating: 5,
// //     review: 'I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.'
// //   }
// // ]

// // const Review = ({review}) => (
// //   <div className="review">
// //     <h3>{review.name}</h3>
// //     <p>{review.rating} ★</p>
// //     <p>{review.review}</p>
// //   </div>
// // )

// // const ReviewList = () => (
// //   <div className="review-list">
// //     {reviews.map(review => <Review key={review.name} review={review} />)}
// //   </div>
// // )

// // export default ReviewList;







// import React from 'react';

// const reviews = [
//   {
//     name: 'Emily Selman',
//     rating: 5,
//     review: 'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.'
//   },
//   {
//     name: 'Hector Gibbons',
//     rating: 4,
//     review: 'Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!'
//   },
//   {
//     name: 'Mark Edwards',
//     rating: 5,
//     review: 'I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.'
//   }
// ];

// const Review = ({ review }) => (
//   <div className="review bg-gray-100 p-4 my-4 rounded">
//     <h3 className="text-xl font-semibold">{review.name}</h3>
//     <p className="text-yellow-400 text-2xl">{Array.from({ length: review.rating }, (_, index) => <span key={index}>★</span>)}</p>
//     <p className="text-gray-700">{review.review}</p>
//   </div>
// );

// const ReviewList = () => (
//   <div className="review-list">
//     {reviews.map((review, index) => <Review key={index} review={review} />)}
//   </div>
// );

// export default ReviewList;
