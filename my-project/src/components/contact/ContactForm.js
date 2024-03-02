// // ContactForm.js
// import React, { useState } from "react";
// import axios from "axios";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/send-email", formData);
//       if (response.status === 200) {
//         alert("Email sent successfully!");
//       } else {
//         alert("Failed to send email.");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   };

//   return (
//     <form
//       className="max-w-md mx-auto bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
//       onSubmit={handleSubmit}
//     >
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//       </div>
//       {/* Other input fields */}
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }

// export default ContactForm;
