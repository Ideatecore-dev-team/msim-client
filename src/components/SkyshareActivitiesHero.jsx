import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Vector.png";

function SkyshareActivitiesHero() {
  return (
    <>
      <div className="hero bg-orange-bg bg-cover bg-center flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content text-white">
          <div className="w-full mt-52 flex justify-center items-end">
            <div className="w-40 h-40 shadow-2xl border-2 border-black shadow-black flex items-center justify-center bg-white rounded-full">
              <h1 className=" font-bold text-5xl">13</h1>
            </div>
          </div>
          <div className="w-full flex mt-10 justify-center">
            <h1 className=" text-black font-bold text-5xl">
              Skyshare Activities
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
