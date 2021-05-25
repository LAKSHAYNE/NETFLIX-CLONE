import React from "react";
import {Carousel} from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

function TopCarousel() {
  let match = useRouteMatch();
  return (
    <Carousel >
      <Carousel.Item interval={2000} style={{height:"350px"}}>
        <img
          style={{height:"100%" ,objectFit:"contain"}}
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/229954.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{height:"350px"}}>
      <Link to="/VideoPage/attackontitan/v6.4animu.me%2FShingeki-no-Kyojin%2FShingeki-no-Kyojin-Episode-01-1080p.mp4">
        <img
        style={{height:"100%" ,objectFit:"contain"}}
          className="d-block w-100"
          src="https://ctd-thechristianpost.netdna-ssl.com/en/full/60090/attack-on-titan-season-2.jpg"
          alt="Third slide"
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{height:"350px"}}>
        <img
        style={{height:"100%" ,objectFit:"contain"}}
          className="d-block w-100"
          src="https://www.cnet.com/a/img/PcYrj3VeGQzXaKo67pyCCJ3V57E=/1200x630/2020/01/29/0e98a39c-221f-4162-91c9-c8652a3f23d4/one-piece.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default TopCarousel;
