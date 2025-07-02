// CarouselComponent.jsx
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import "../styles/Carousel.css"
const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
      >
        <div>
          <img src="/images/image.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;