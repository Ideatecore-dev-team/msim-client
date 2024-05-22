import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Vector.png";
import SkyshareLogo from "../../public/images/Skyshare-Logo.png";
import "./SkyshareActivitiesHero.css";

function SkyshareActivitiesHero() {
  return (
    <>
      <div className=" bg-talent-bg talent-activities flex py-14 px-6 lg:py-24 lg:px-0 flex-col items-center self-stretch gap-3">
        <div className="container-hero max-w-6xl text-white">
          <div className="inside-padding relative">
            <div className="icon-hero flex justify-center absolute items-center">
              <img className="w-56" src={SkyshareLogo} alt="" />
            </div>
            <div className="container-content flex flex-col items-center gap-3 self-stretch bg-white px-6 pb-6 pt-24 mx-auto mt-64">
              <h1 className=" text-black font-bold text-5xl">
                Talent Activities
              </h1>
              <div className="flex items-center mt-5  justify-center">
                <img className="w-5" src={WorkIcon} alt="tas" />
                <p className="paragraph ml-2 text-slate-600">
                  Ada kegiatan apa aja sih di Talent Academy?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// padding: 96px 24px 24px 24px;

export default SkyshareActivitiesHero;
