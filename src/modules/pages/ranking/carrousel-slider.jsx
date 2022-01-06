import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

class CarrouselSlider extends Component {
  render() {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map((item) => (
          <div key={item.id}> {item.title} </div>
        ))}
      </Carousel>
    );
  }
}

export default CarrouselSlider;
