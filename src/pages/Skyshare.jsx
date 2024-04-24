import React from "react";
import SkyshareCta from "../components/SkyshareCta";
import Skyshareabout from "../components/SkyshareAbout";
import BenefitSkyshare from "../components/BenefitSkyshare";

function Skyshare() {
  return (
    <>
      <div className="home">
        <SkyshareCta />
        <Skyshareabout />
        <BenefitSkyshare />
      </div>
    </>
  );
}

export default Skyshare;
