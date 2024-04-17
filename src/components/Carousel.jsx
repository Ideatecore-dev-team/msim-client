import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true, // Menambahkan autoplay
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <div className="w-full mt-40">
      <div className=" h-auto">
        <Slider {...settings}>
          <div className="m-auto">
            <div className="bg-white rounded-md h-80 w-64 border-gray-900 border-2 shadow-md">
              hdmdd
            </div>
          </div>
          <div className="m-auto ">
            <div className="bg-white rounded-md h-80 w-64 border-gray-900 border-2 shadow-md">
              hdmdd
            </div>
          </div>
          <div className="m-auto">
            <div className="bg-white rounded-md h-80 w-64 border-gray-900 border-2 shadow-md">
              hdmdd
            </div>
          </div>
          <div className="m-auto">
            <div className="bg-white rounded-md h-80 w-64 border-gray-900 border-2 shadow-md">
              hdmdd
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
