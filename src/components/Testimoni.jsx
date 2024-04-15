import React from "react";
import Profile1 from "../../public/images/profile1.jpeg";
import Profile2 from "../../public/images/profile2.jpeg";
import Profile3 from "../../public/images/profile3.jpeg";
import Mascot1 from "../../public/images/mascot-icons/pose=4.png";

function Testimoni() {
  return (
    <>
      <div className="testimoni flex">
        <div className="felx w-2/5 flex items-center justify-end">
          <div className=" w-96">
            <img className="mascot" src={Mascot1} alt="mascot" />
            <h1 className="headline-2">🔥 Apa Kata Mereka?</h1>
            <p className="paragraph mt-4">
              Simakk Yukk apa kata para alumni & orang tua pelajar tentang
              program dari MSiM!
            </p>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </>
  );
}

export default Testimoni;
