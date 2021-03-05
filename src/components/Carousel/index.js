import Carousel from "react-multi-carousel";
import { Flex, Img, Text } from '@chakra-ui/react'
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};


const Simple = ({ deviceType, props, setMovieSelected }) => {
  var images = []


  props.tranding.results.forEach(movie => {
    images.push({
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'+movie.poster_path,
      title: movie.title ? movie.title : movie.name,
      id: movie.id
    })
  })

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}  
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      arrows={false}
      slidesToSlide={1}
    >
      {images.map((movie, index) => {
        return (
          <Flex key={index} style={{ position: "relative" }} flexDirection="column" onClick={() => setMovieSelected(movie)}>
            <Flex 
              position="absolute" 
              w="72px" 
              h="72px" 
              background="gray.400"
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              bgGradient="linear(to-r, #de1e1e, #fb0102)"
              boxShadow="lg"
              top="12px"
              left="12px"
            >
              <Text fontSize="36px" fontWeight="bold" color="white">{index+1}</Text>
            </Flex>
            <Img src={movie.image} draggable={false} />
            <Text
              position="relative"
              textAlign="center"
              fontWeight="500"
              mt="1rem"
              fontSize="28px"
              color="black"
            >
              {movie.title}
            </Text>
          </Flex>
        );
      })}
    </Carousel>
  );
};



export default Simple;