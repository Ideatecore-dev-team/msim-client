import React from "react";
import OurProgramHero from "../components/OurProgramHero";
import TalentAcademy from "../components/TalentAcademy";
import MentorAcademy from "../components/MentorAcademy";
import ParentsAcademy from "../components/ParentsAcademy";

function OurProgram() {
  return (
    <>
      <div className="home">
        {/* <OurProgramHero/> */}
        <TalentAcademy />
        <MentorAcademy />
        <ParentsAcademy />
      </div>
    </>
  );
}
export default OurProgram;
