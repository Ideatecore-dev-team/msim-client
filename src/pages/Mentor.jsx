import React from "react";
import MentorCta from "../components/MentorCta";
import Mentorabout from "../components/MentorAbout";
import BenefitMentor from "../components/BenefitMentor";
import CurrentGroupSkyshare from "../components/CurrentGroupSkyshare";
import AllActivitiesMentorAcademy from "../components/AllActivityMentorAcademy";

function Mentor() {
  return (
    <>
      <div className="home">
        <MentorCta />
        <Mentorabout />
        <BenefitMentor />
        <CurrentGroupSkyshare />
        <AllActivitiesMentorAcademy />
      </div>
    </>
  );
}

export default Mentor;
