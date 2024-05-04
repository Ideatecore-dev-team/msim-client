import React from "react";
import MaCarousel from "./SSACarousel";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";

function MentorActivitiesCarousel() {
  return (
    <>
      <div className="testimoni bg-background bg-cover border-y-2 border-black flex justify-center">
        <div className="flex -mt-20 max-w-full">
          <MaCarousel />
        </div>
      </div>
      <div className=" absolute -mt-32 w-full flex justify-center ">
        <a
          className=" flex items-center gap-2 px-4 py-3 bg-primary-1 rounded-xl shadow-lg hover:bg-primary-2 "
          href="/ourprogram/mentor"
        >
          <p className="text-white text-lg">Go to Mentor Academy</p>
          <img className="w-7 -rotate-90" src={ArrowLeft} alt="" />
        </a>
      </div>
    </>
  );
}

export default MentorActivitiesCarousel;
