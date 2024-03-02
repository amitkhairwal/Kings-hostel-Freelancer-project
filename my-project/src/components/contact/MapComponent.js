import React from 'react';

function MapComponent() {
  return (
    <div className="overflow-hidden rounded-lg">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3502.700887582363!2d77.0315174!3d28.6087488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05876ff24751%3A0xd5164df97eac7b4e!2sKings%20Hostel%20-%20Pg%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1708729557709!5m2!1sen!2sin"
        className="w-full h-64 sm:h-72 md:h-96 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapComponent;
