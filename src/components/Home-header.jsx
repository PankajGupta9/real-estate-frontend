// Header.js
import { useState, useEffect } from "react";
import "./Header.css";
import image1 from "../assets/Home/1.jpg";
import image2 from "../assets/Home/2.jpg";
import image3 from "../assets/Home/3.webp";
import image4 from "../assets/Home/4.webp";
const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="main-header">
      <div className="header-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`header-image ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;
