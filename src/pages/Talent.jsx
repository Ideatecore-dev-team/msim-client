import React from "react";
import TalentCta from "../components/TalentCta";
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
        <TalentCta />
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
