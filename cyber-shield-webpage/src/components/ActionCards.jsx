import React from 'react';
import styles from '../styles/ActionCards.module.css';

const cards = [
  {
    title: "Volunteer",
    color: "#f25d56",
    icon: "/images/volunter-icon.png",
    bgImage: "/images/cybers.png",
  },
  {
    title: "Internships",
    color: "#4477CE",
    icon: "/images/Internship-icon.png",
    bgImage: "/images/cybers.png",
  },
  {
    title: "Partner",
    color: "#F6C90E",
    icon: "/images/Partner-icon.png",
    bgImage: "/images/cybers.png",
  },
  {
    title: "Support",
    color: "#2BB673",
    icon: "/images/support-icon.png",
    bgImage: "/images/cybers.png",
  }
];

const ActionCards = () => {
  return (
    <section className={styles.cardsContainer}>
      {cards.map((card, index) => (
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${card.bgImage})` }}
          >
            <div
              className={styles.topBackground}
              style={{ backgroundColor: card.color }}
            >
              <h3>{card.title}</h3>
            </div>

            <img
              src={card.icon}
              alt={`${card.title} icon`}
              className={styles.icon}
            />
          </div>
      ))}
    </section>
  );
};

export default ActionCards;
