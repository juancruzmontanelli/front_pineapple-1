import React from "react";
import Carousel from "react-material-ui-carousel";
import ItemCarousel from "./ItemCarousel";
import BannerUno from "../assets/1.png";
import BannerDos from "../assets/2.png";
import BannerTres from "../assets/3.png";

function CarouselComponent() {
  var items = [BannerUno, BannerDos, BannerTres];

  return (
    <Carousel sx={{ mb: "5%" }}>
      {items.map((item, i) => (
        <ItemCarousel key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
