import React from "react";
import skyshareApi from "../utilities/skyshareApi";
import { useState, useEffect } from "react";
import TalentCta from "../components/TalentCta";
import Skyshareabout from "../components/TalentAbout";
import BenefitSkyshare from "../components/BenefitTalent";
import AlurAcara from "../components/AlurAcara";
import TimelineSkyshare from "../components/TimelineSkyshare";
import CurrentGroupSkyshare from "../components/CurrentGroupSkyshare";
import AllActivitiesSkyShare from "../components/AllActivitiesTalent";

function Skyshare() {
  const [talent, setTalent] = useState([]);
  useEffect(() => {
    const getDataTalent = async function () {
      try {
        const response = await skyshareApi.get("/talent");
        setTalent(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataTalent();
  }, []);
  console.log(talent, "hoooo");
  return (
    <>
      <div className="talent-academy">
        <TalentCta />
        <Skyshareabout />
        <BenefitSkyshare />
        <AlurAcara talent={talent} />
        <TimelineSkyshare talent={talent} />
        <CurrentGroupSkyshare />
        <AllActivitiesSkyShare />
      </div>
    </>
  );
}

export default Skyshare;
