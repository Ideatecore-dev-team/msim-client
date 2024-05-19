import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Vector.png";
import MentorLogo from "../../public/images/Mentor-logo.png"

function MentorActivitiesHero() {
  return (
    <>
      <div className="hero bg-blue-bg bg-cover bg-center flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content text-white">
          <div className="w-full mt-52 flex justify-center items-end">
          <div className="flex justify-center">
            <img className="w-56" src={MentorLogo} alt="" />
          </div>

          </div>
          <div className="w-full flex mt-10 justify-center">
            <h1 className=" text-black font-bold text-5xl">
              Mentor Activities
            </h1>
          </div>
          <div className="w-full flex items-center mt-5  justify-center">
            <img className="w-5" src={WorkIcon} alt="tas" />
            <p className="paragraph ml-2 text-slate-600">
              Ada kegiatan apa aja sih di Mentor Academy?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorActivitiesHero;
