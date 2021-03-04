import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};
const images = [
  "/assets/images/1.jpg",
  "/assets/images/2.jpg",
  "/assets/images/3.jpg",
  "/assets/images/4.jpg",
  "/assets/images/5.jpg",
  "/assets/images/6.jpg",
  "/assets/images/7.jpg",
  "/assets/images/8.jpg",
  "/assets/images/1.jpg",
  "/assets/images/10.jpg",
];

const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      arrows={false}
    >
      {images.map((image, index) => {
        return (
          <div key={index} style={{ position: "relative" }}>
            <img
              draggable={false}
              alt="text"
              style={{ width: "300px", height: "450px" }}
              src={image}
            />
            <p
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                color: "white",
                transform: " translateX(-50%)"
              }}
            >
              Legend:{index}.
            </p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Simple;