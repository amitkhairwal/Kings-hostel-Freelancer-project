import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  let [userEmailAddress, setUserEmailAddress] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const service_id = "service_rasup57";
    const temple_id = "template_4dn3s6k";
    const public_key = "aPBI9980l4fvsy2Xh";
    const templateParams = {
      form_name: "Rx",
      reply_to: "rj187225@gmail.com",
      from_email: "rj187225@gmail.com",
      to_name: "Rupesh",
      message: userEmailAddress,
    };
    emailjs
      .send(service_id, temple_id, templateParams, public_key)
      .then((response) => {
        console.log("email sent successfully ", response);
        alert("message sent successfully");
      });
  };
  return (
    <div className="bg-teal-500 p-6 flex justify-center items-center">
      <div className="max-w-lg w-full text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-200 mb-6">
          Enter your email address to register for our newsletter and stay
          updated with the latest news!
        </p>
        <form
          className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2"
          onSubmit={handleForm}
        >
          <input
            type="email"
            required
            placeholder="Email Address"
            className="p-3 w-full sm:w-auto flex-grow border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
            onChange={(evt) => setUserEmailAddress(evt.target.value)}
          />
          <button
            type="submit"
            className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
