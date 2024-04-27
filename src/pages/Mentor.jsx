import React from "react";
import MentorCta from "../components/MentorCta";
import Mentorabout from "../components/MentorAbout";
import BenefitMentor from "../components/BenefitMentor";

function Mentor() {
    return (
        <>
        <div className="home">
            <MentorCta />
            <Mentorabout />
            <BenefitMentor />
        </div>
        </>
    );
}

export default Mentor;
