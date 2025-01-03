import "./Services.css";
import { GiRazor, GiBeard } from "react-icons/gi";
import { BsScissors } from "react-icons/bs";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Haircut",
      price: "$40",
      description: "Fresh and modern haircuts with personalized styles.",
      icon: BsScissors,
    },
    {
      name: "Shaving",
      price: "$40",
      description:
        "Classic shaving with a smooth finish, complemented by a warm towel.",
      icon: GiRazor,
    },
    {
      name: "Beard Trimming",
      price: "$30",
      description: "Styling and grooming for the perfect beard.",
      icon: GiBeard,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4, // Delay between animation
      },
    },
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="service-title">Services</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.8 }}
          className="services-list"
        >
          {services.map((service, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="service-item"
            >
              <motion.div variants={iconVariants} className="service-icon">
                <service.icon className="icon" />
              </motion.div>
              <div className="service-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <span className="service-price">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
