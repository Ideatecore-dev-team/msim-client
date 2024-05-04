import React from "react";
import MaCarousel from "./SSACarousel";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";
import { Link } from "react-router-dom";

function MentorActivitiesCarousel() {
  return (
    <>
      <div className="testimoni bg-background bg-cover border-y-2 border-black flex justify-center">
        <div className="flex -mt-20 max-w-full">
          <MaCarousel />
        </div>
      </div>
      <div className=" absolute -mt-32 w-full flex justify-center ">
        <Link
          className=" flex items-center gap-2 px-4 py-3 bg-primary-1 rounded-xl shadow-lg hover:bg-primary-2 "
          to="/ourprogram/mentor"
        >
          <p className="text-white text-lg">Go to Mentor Academy</p>
          <img className="w-7 -rotate-90" src={ArrowLeft} alt="" />
        </Link>
      </div>
    </>
  );
}

export default MentorActivitiesCarousel;
