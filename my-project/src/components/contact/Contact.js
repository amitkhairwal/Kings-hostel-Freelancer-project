import React, { useState } from "react";
import MapComponent from "./MapComponent";
import FromSection from "./FromSection";
import emailjs from "@emailjs/browser";

export default function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setsubject] = useState("");
  let [message, setmessage] = useState("");
  let [userFormData, setUserFormData] = useState();

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
      message: "asdsadd",
    };
    emailjs
      .send(service_id, temple_id, templateParams, public_key)
      .then((response) => {
        console.log("email sent successfully ", response);
        alert("message sent successfully");
      });
  };

  return (
    <div className="mt-2 bg-slate-100 p-4 md:p-8 lg:p-12">
      <div className="services-container grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="mb-3 py-4 lg:pr-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            Have Questions?
          </h3>
          <p className="w-full h-auto lg:w-3/4 text-base md:text-lg">
            Please feel free to call or email us, or use our contact form to get
            in touch with us. We look forward to hearing from you!
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            Emergency? Call Us:
          </h3>
          <p className="w-full h-auto lg:w-3/4 text-base md:text-lg">
            +91 76699 17474
          </p>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            Send Us Mail
          </h3>
          <p className="w-full h-auto lg:w-3/4 text-base md:text-lg">
            info@example.com
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            Find the Studio
          </h3>
          <MapComponent />
        </div>
        <div className="service-item">
          <FromSection />
        </div>
      </div>
    </div>
  );
}
