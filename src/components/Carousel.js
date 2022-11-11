import React from "react";
import Carousel from "react-material-ui-carousel";
import BannerUno from "../assets/1.png";
import BannerDos from "../assets/2.png";
import BannerTres from "../assets/3.png";
import { Paper } from "@mui/material";

function CarouselComponent() {
  var items = [BannerUno, BannerDos, BannerTres];

  return (
    <Carousel sx={{ mb: "5%" }}>
      {items.map((item, i) => (
        <Paper>
          <img src={item} style={{ width: "100%" }} alt=""></img>
        </Paper>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
