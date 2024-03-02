// import React, { useState } from 'react';

// export default function Reviews() {
//     const reviews = [
//         {
//             name: "John Doe",
//             comment: "Great service, highly recommend!",
//             rating: 4,
//             image: "https://via.placeholder.com/50",
//         },
//         {
//             name: "Jane Smith",
//             comment: "Excellent experience, will come back again!",
//             rating: 4,
//             image: "https://via.placeholder.com/50",
//         },
//         // Add more reviews as needed
//     ];

//     const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

//     const nextReview = () => {
//         setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//     };

//     const prevReview = () => {
//         setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
//     };

//     const review = reviews[currentReviewIndex];

//     return (
//         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-5">
//             <h2 className="text-2xl font-semibold mb-5 text-center text-gray-800">Customer Review</h2>
//             <div className="border-b py-4">
//                 <div className="flex items-center space-x-4">
//                     <img
//                         className="w-16 h-16 rounded-full object-cover"
//                         src={review.image}
//                         alt={review.name}
//                     />
//                     <div className="flex-1">
//                         <p className="text-lg font-semibold text-gray-900">{review.name}</p>
//                         <p className="text-gray-500">"{review.comment}"</p>
//                         <div className="flex mt-2">
//                             {[...Array(review.rating)].map((_, i) => (
//                                 <svg key={i} className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
//                                     <path d="M10 15l-5.5 3 1.5-6.5L1 7h6L10 1l3 6h6l-5 4.5 1.5 6.5z" />
//                                 </svg>
//                             ))}
//                             {[...Array(5 - review.rating)].map((_, i) => (
//                                 <svg key={i} className="w-5 h-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
//                                     <path d="M10 15l-5.5 3 1.5-6.5L1 7h6L10 1l3 6h6l-5 4.5 1.5 6.5z" />
//                                 </svg>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex justify-center space-x-4 mt-4">
//                 <button
//                     onClick={prevReview}
//                     className="px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
//                 >
//                     Previous
//                 </button>
//                 <button
//                     onClick={nextReview}
//                     className="px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// }
