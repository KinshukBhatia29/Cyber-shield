import React from 'react';
import '../styles/ImpactSection.css';

const impactData = [
  {
    title: 'PM POSHAN',
    subtitle: 'Programme',
    image: '/images/image.png',
  },
  {
    title: 'Homeless',
    subtitle: 'Mothers',
    image: '/images/mothers.jpg',
  },
  {
    title: 'Anganwadi',
    subtitle: 'Feeding',
    image: '/images/anganwadi.jpg',
  },
  {
    title: 'Breakfast',
    subtitle: '',
    image: '/images/breakfast.jpg',
  },
];

const ImpactSection = () => {
  return (
    <section className="impact-section">
      <h2 className="impact-title">
        How we work to make a difference
      </h2>
      <div className="impact-cards">
        {impactData.map((item, index) => (
          <div key={index} className="impact-card">
            <div className="impact-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="impact-text">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
