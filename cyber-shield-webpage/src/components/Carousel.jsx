// CarouselComponent.jsx
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "../styles/Carousel.css"

const slides =  [
  {
    image: "/images/image.png",
    title: "Cybercrime Has No Age—We Protect All",
    subtitle: "Children. Women. Elderly. Everyone Deserves Online Safety.",
    text: "Cybercrime affects everyone—but some are more vulnerable. Project CyberShield runs customized awareness modules for children, women, and senior citizens, helping them identify online abuse, scams, and manipulation. From social media safety to financial fraud prevention, we’re bringing protection where it’s needed most.",
    button: "Explore Programs"
  },
  {
    image: "/images/slider3.jpg",
    title: "Legal Literacy Meets Cyber Awareness",
    subtitle: "When Tech Meets Law, Citizens Win.",
    text: "Most victims of cybercrime don’t know where to turn. That’s why Project CyberShield combines legal literacy with cyber awareness—teaching people their rights, guiding them through the complaint process, and connecting them to support networks. With pro bono lawyers, trained volunteers, and student-led helpdesks, we're bridging the justice gap in the digital age.",
    button: "Know Your Rights"
  },
  {
    image: "/images/slider6.jpg",
    title: "Real Stories. Real Impact.",
    subtitle: "Behind Every Campaign, A Life Changed.",
    text: "From helping a senior retrieve lost savings to assisting a teen in reporting online harassment, every CyberShield effort has a human story. Our community-driven model brings real change, one person at a time. Read the stories that keep us going.",
    button: "Read Stories"
  },
  {
    image: "/images/slider8.jpg",
    title: "Learn. Act. Prevent.",
    subtitle: "Your Digital Rights, Your Responsibility.",
    text: "We believe cyber awareness isn’t a one-time session—it’s a mindset. Our interactive courses, quizzes, and community initiatives help people practice safe browsing, secure payments, and responsible social media use every day.",
    button: "Start Learning"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };
  

  return (
    <header className="hero-carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <div className="content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </header>
  );
};


export default HeroCarousel;