import React from "react";
import Carousel from "react-elastic-carousel";

const CarrouselSlider = () => { 
 
    const { items } = this.state;
    return (
      <Carousel>
        {items.map((item) => (
          <div key={item.id}> {item.title} </div>
        ))}
      </Carousel>
    );
  }

export default CarrouselSlider;
