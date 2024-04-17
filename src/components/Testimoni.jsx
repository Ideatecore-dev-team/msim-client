import React from "react";
import Mascot1 from "../../public/images/mascot-icons/pose=4.png";
import Carousel from "./Carousel";

function Testimoni() {
  return (
    <>
      <div className="testimoni flex">
        <div className="flex w-2/4 border-r-2 border-black bg-orange-200 items-center">
          <div className="w-96 ml-32">
            <img className="mascot" src={Mascot1} alt="mascot" />
            <h1 className="headline-2">🔥 Apa Kata Mereka?</h1>
            <p className="paragraph mt-4">
              Simakk Yukk apa kata para alumni & orang tua pelajar tentang
              program dari MSiM!
            </p>
          </div>
        </div>
        <div className=" w-3/6 bg-orange-200">
          <Carousel />
        </div>
        <div className="bg-orange-200 w-1/5 border-l-2 border-black"></div>
      </div>
    </>
  );
}

export default Testimoni;
