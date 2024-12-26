import React from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <section className="google-map" id="google-map">
      <div className="google-map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098916!2d-122.40119868468184!3d37.79361497975686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064aef8b3c3%3A0x4e8a1f7e8b39b925!2sGoogle%20San%20Francisco!5e0!3m2!1sen!2sus!4v1691500800000!5m2!1sen!2sus"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
