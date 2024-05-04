import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import MentorCta from "../components/MentorCta";
import Mentorabout from "../components/MentorAbout";
import BenefitMentor from "../components/BenefitMentor";
import CurrentGroupSkyshare from "../components/CurrentGroupSkyshare";
import AllActivitiesMentorAcademy from "../components/AllActivityMentorAcademy";
import AlurAcaraMentorAcademy from "../components/AlurAcaraMentorAcademy";
import TimelineMentorAcademy from "../components/TimelineMentorAcademy";

function Mentor() {
  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    const GetDataMentor = async function () {
      try {
        const response = await axios.get("http://localhost:80/api/mentor");
        setMentor(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetDataMentor();
  }, []);
  return (
    <>
      <div className="home">
        <MentorCta mentor={mentor} />
        <Mentorabout />
        <BenefitMentor />
        <AlurAcaraMentorAcademy mentor={mentor} />
        <TimelineMentorAcademy mentor={mentor} />
        <CurrentGroupSkyshare />
        <AllActivitiesMentorAcademy mentor={mentor} />
      </div>
    </>
  );
}

export default Mentor;
