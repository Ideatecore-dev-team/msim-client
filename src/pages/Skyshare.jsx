import React from "react";
import SkyshareCta from "../components/SkyshareCta";
import Skyshareabout from "../components/SkyshareAbout";
import BenefitSkyshare from "../components/BenefitSkyshare";
import AlurAcara from "../components/AlurAcara";
import TimelineSkyshare from "../components/TimelineSkyshare";
import CurrentGroupSkyshare from "../components/CurrentGroupSkyshare";

function Skyshare() {
  return (
    <>
      <div className="home">
        <SkyshareCta />
        <Skyshareabout />
        <BenefitSkyshare />
        <AlurAcara />
        <TimelineSkyshare />
        <CurrentGroupSkyshare />
      </div>
    </>
  );
}

export default Skyshare;
