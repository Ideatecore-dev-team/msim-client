import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Vector.png";
import SkyshareLogo from "../../public/images/Skyshare-Logo.png";

function SkyshareActivitiesHero() {
  return (
    <>
      <div className="hero bg-orange-bg bg-cover bg-center flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content text-white">
          <div className="w-full mt-52 flex justify-center items-end">
          <div className="flex justify-center">
            <img className="w-56" src={SkyshareLogo} alt="" />
          </div>

          </div>
            <div className="w-full flex mt-10 justify-center">
                <h1 className=" text-black font-bold text-5xl">
                  Talent Activities
                </h1>
            </div>
          <div className="w-full flex items-center mt-5  justify-center">
            <img className="w-5" src={WorkIcon} alt="tas" />
            <p className="paragraph ml-2 text-slate-600">
              Ada kegiatan apa aja sih di Skyshare Academy?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkyshareActivitiesHero;
