import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SkyshareCta from "../components/SkyshareCta";
import Skyshareabout from "../components/SkyshareAbout";
import BenefitSkyshare from "../components/BenefitSkyshare";
import AlurAcara from "../components/AlurAcara";
import TimelineSkyshare from "../components/TimelineSkyshare";
import CurrentGroupSkyshare from "../components/CurrentGroupSkyshare";
import AllActivitiesSkyShare from "../components/AllActivitiesSkyShare";

function Skyshare() {
  const [skyshare, setSkyshare] = useState([]);
  useEffect(() => {
    const getDataSkyshare = async function () {
      try {
        const response = await axios.get("http://localhost:80/api/skyshare");
        setSkyshare(response.data.data);
      } catch (error) {}
      console.log(error);
    };
    getDataSkyshare();
  }, []);
  return (
    <>
      <div className="home">
        <SkyshareCta skyshare={skyshare} />
        <Skyshareabout />
        <BenefitSkyshare />
        <AlurAcara skyshare={skyshare} />
        <TimelineSkyshare skyshare={skyshare} />
        <CurrentGroupSkyshare />
        <AllActivitiesSkyShare />
      </div>
    </>
  );
}

export default Skyshare;
