import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "./Carousel.module.css";

const LoginCarousel = () => {
  const items = [
    {
      name: "Slide #2",
      img: process.env.PUBLIC_URL + "/assets/img/loginCarousel/Slide02.jpg",
    },
    {
      name: "Slide #3",
      img: process.env.PUBLIC_URL + "/assets/img/loginCarousel/Slide03.jpg",
    },
  ];

  return (
    <Carousel className={classes.CarouselStyle} >
      {items.map((item, index) => (
        <Item key={index} img={item.img} name={item.name} />
      ))}
    </Carousel>
  );
};

const Item = ({ img, name }) => {
  return (
    <div className={classes.SlideItem}>
      <img src={img} alt={name} />
    </div>
  );
};

export default LoginCarousel;
