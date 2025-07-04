import React, { useState, useEffect } from "react";
import styles from "../styles/Carousel.module.css"; // <-- CSS Module

const slides = [
  {
    image: "/images/image.png",
    title: "Cybercrime Has No Age—We Protect All",
    subtitle: "Children. Women. Elderly. Everyone Deserves Online Safety.",
    button: "Explore Programs"
  },
  {
    image: "/images/slider3.jpg",
    title: "Legal Literacy Meets Cyber Awareness",
    subtitle: "When Tech Meets Law, Citizens Win.",
    button: "Know Your Rights"
  },
  {
    image: "/images/slider6.jpg",
    title: "Real Stories. Real Impact.",
    subtitle: "Behind Every Campaign, A Life Changed.",
    button: "Read Stories"
  },
  {
    image: "/images/slider8.jpg",
    title: "Learn. Act. Prevent.",
    subtitle: "Your Digital Rights, Your Responsibility.",
    button: "Start Learning"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => setCurrent((current - 1 + length) % length);
  const nextSlide = () => setCurrent((current + 1) % length);

  return (
    <header className={styles.heroCarouselContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        </div>
      ))}

      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>❮</button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>❯</button>
    </header>
  );
};

export default HeroCarousel;
