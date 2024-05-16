import React from "react";
import Mascot1 from "../../public/images/mascot-icons/pose=4.png";
import Carousel from "./Carousel";

function Testimoni() {
  return (
    <>
      <div className="lg:h-testimoni w-full bg-orange-bg bg-cover border-y-2 border-black flex justify-center">
        <div className="flex h-full justify-center  max-w-6xl lg:flex-nowrap flex-wrap">
          <div className="flex lg:h-3/4 mt-28 lg:w-2/5 items-center">
            <div className="w-96 -mt-20">
              <img
                className="mascot ml-24 lg:ml-0 mb-4 border-b-2 border-black"
                src={Mascot1}
                alt="mascot"
              />
              <h1 className=" text-center lg:text-left headline-2">
                Apa Kata Mereka?
              </h1>
              <p className=" text-center lg:text-left paragraph mt-4">
                Simakk Yukk apa kata para alumni & orang tua pelajar tentang
                program dari MSiM!
              </p>
            </div>
          </div>
          <div className=" border-l-2 border-r-2 border-black lg:h-3/4 pb-5 mt-24 lg:w-3/4">
            <Carousel />
          </div>
          <div className="w-full h-3/4 mt-28  z-10"></div>
        </div>
      </div>
    </>
  );
}

export default Testimoni;
