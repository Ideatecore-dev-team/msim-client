import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partner.css";
import Partner1 from "../../public/images/partner1.png";
import Partner2 from "../../public/images/partner2.png";
import Partner3 from "../../public/images/partner3.png";

function Partner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="partner flex flex-col mx-auto lg:pb-24 lg:px-0 xs:pb-9 xs:px-6">
        <div className="partner-container flex flex-col items-center lg:gap-12 xs:gap-7 overflow-hidden">
          <h2 className=" font-bold lg:text-3xl xs:text-2xl text-center">
            Our Partner
          </h2>
          <div className="partner-list lg:gap-6 xs:gap-4 lg:flex">
            {isMobile ? (
              <Slider {...settings}>
                <div className="partner1 flex content-center items-center">
                  <img
                    src={Partner1}
                    alt="partnerlogo"
                    className="w-full h-auto"
                  />
                </div>
                <div className="partner2 flex content-center items-center">
                  <img
                    src={Partner2}
                    alt="partnerlogo"
                    className="w-full h-auto"
                  />
                </div>
                <div className="partner3 flex content-center items-center">
                  <img
                    src={Partner3}
                    alt="partnerlogo"
                    className="w-full h-auto"
                  />
                </div>
              </Slider>
            ) : (
              <>
                <div className="partner1">
                  <img
                    src={Partner1}
                    alt="partnerlogo"
                    className="w-full h-auto"
                  />
                </div>
                <div className="partner2">
                  <img
                    src={Partner2}
                    alt="partnerlogo"
                    className="w-full h-auto"
                  />
                </div>
                <div className="partner3">
                  <img
                    src={Partner3}
                    alt="partnerlogo"
                    className="w-full h-auto"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
