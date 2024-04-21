import React from "react";
import Mascot1 from "../../public/images/mascot-icons/pose=4.png";
import Carousel from "./Carousel";

function Testimoni() {
  return (
    <>
      <div className="testimoni flex justify-center">
        <div className="flex max-w-6xl">
          <div className="flex  h-3/4 mt-24 w-2/5 border-r-2 border-black items-center">
            <div className="w-96 -mt-20">
              <img
                className="mascot border-b-2 border-black"
                src={Mascot1}
                alt="mascot"
              />
              <h1 className="headline-2">🔥 Apa Kata Mereka?</h1>
              <p className="paragraph mt-4">
                Simakk Yukk apa kata para alumni & orang tua pelajar tentang
                program dari MSiM!
              </p>
            </div>
          </div>
          <div className="   w-3/5">
            <Carousel />
          </div>
          <div className=" w-1/12 h-3/4 border-l-2 bg-testimoni border-black mt-24 ml-1  z-10"></div>
        </div>
      </div>
    </>
  );
}

export default Testimoni;
