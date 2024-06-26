import React from "react";
// import axios from "axios";
import skyshareApi from "../utilities/skyshareApi";
import { useEffect, useState } from "react";
import MentorCta from "../components/MentorCta";
import Mentorabout from "../components/MentorAbout";
import BenefitMentor from "../components/BenefitMentor";
import AllActivitiesMentorAcademy from "../components/AllActivityMentorAcademy";
import AlurAcaraMentorAcademy from "../components/AlurAcaraMentorAcademy";
import TimelineMentorAcademy from "../components/TimelineMentorAcademy";

function Mentor() {
  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    const getDataMentor = async function () {
      try {
        const response = await skyshareApi.get("/mentor");
        setMentor(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataMentor();
  }, []);
  console.log(mentor, "==>");
  return (
    <>
      <div className="home">
        <MentorCta mentor={mentor} />
        <Mentorabout />
        <BenefitMentor />
        <AlurAcaraMentorAcademy mentor={mentor} />
        <TimelineMentorAcademy mentor={mentor} />
        <AllActivitiesMentorAcademy mentor={mentor} />
      </div>
    </>
  );
}

export default Mentor;
