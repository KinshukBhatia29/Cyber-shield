import React from "react";
import "../styles/ServicesSection.css";

const services = [
  {
    icon: "/icons/consulting.svg",
    title: "Consulting Cyber Crime Victims",
    description:
      "Our highly technical Cyber Volunteers help Cyber Crime victims by consulting them and making them aware about Cyber Misery. They guide the victims to get Cyber Justice using their experience with law enforcement agencies."
  },
  {
    icon: "/icons/awareness.svg",
    title: "Spreading Cyber Awareness",
    description:
      "CyberNGO keeps Hawkeye over Global Cyber Threats and scams. We frequently update people with Cyber Precaution Guidelines through social media platforms to keep them Cyber Smart."
  },
  {
    icon: "/icons/lawlink.svg",
    title: "Link Victims with Law Agencies",
    description:
      "Many victims don’t know where or how to file a report. Our volunteers guide them on the proper process, ensuring timely help with the aid of experienced legal professionals and digital helpdesks."
  }
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <img src={service.icon} alt="icon" className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
