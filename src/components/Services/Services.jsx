import "./Services.css";
import { GiRazor, GiBeard } from "react-icons/gi";
import { BsScissors } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      name: "Hajvágás",
      price: "HUF 3000",
      description: "Friss és modern hajvágások, személyre szabott stílusok.",
      icon: BsScissors,
    },
    {
      name: "Borotválkozás",
      price: "HUF 2000",
      description:
        "Klasszikus borotválkozás sima bőrfelülettel, meleg törölközővel.",
      icon: GiRazor,
    },
    {
      name: "Szakáll Igazítás",
      price: "HUF 1500",
      description: "Formázás és ápolás a tökéletes szakállért.",
      icon: GiBeard,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">Szolgáltatások</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                <service.icon className="icon" />
              </div>
              <div className="service-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <span className="service-price">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
