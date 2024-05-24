import React from "react";
import SkyshareCta from "../components/SkyshareCta";
import Skyshareabout from "../components/SkyshareAbout";
import BenefitSkyshare from "../components/BenefitSkyshare";
import AlurAcara from "../components/AlurAcara";
import TimelineSkyshare from "../components/TimelineSkyshare";
import CurrentGroupSkyshare from "../components/CurrentGroupSkyshare";
import AllActivitiesSkyShare from "../components/AllActivitiesSkyShare";

function Skyshare() {
  return (
    <>
      <div className="talent-academy">
        <SkyshareCta />
        <Skyshareabout />
        <BenefitSkyshare />
        <AlurAcara />
        <TimelineSkyshare />
        <CurrentGroupSkyshare />
        <AllActivitiesSkyShare />
      </div>
    </>
  );
}

export default Skyshare;
