import React from "react";
import { GiScissors, GiRazor, GiBeard } from "react-icons/gi";
import "./Services.css";

const Services = () => {
  const services = [
    {
      name: "Hajvágás",
      price: "HUF 3000",
      description: "Friss és modern hajvágások, személyre szabott stílusok.",
      icon: GiScissors,
    },
    {
      name: "Borotválkozás",
      price: "HUF 2000",
      description:
        "Klasszikus borotválkozás sima bőrfelülettel, meleg törölközővel.",
      icon: GiRazor,
    },
    {
      name: "Beard Trim",
      price: "HUF 1500",
      description: "Formázás és ápolás a tökéletes szakállért.",
      icon: GiBeard,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-title">Szolgáltatások</h2>

        {/* Header */}
        <div className="services-header">
          <div className="header-icon"></div>
          <div className="content-grid">
            <div className="header-name">Szolgáltatás</div>
            <div className="header-price">Ár</div>
            <div className="header-description">Leírás</div>
          </div>
        </div>

        {/* Service Items */}
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                <service.icon className="icon" />
              </div>
              <div className="content-grid">
                <h3 className="service-name">{service.name}</h3>
                <span className="service-price">{service.price}</span>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
