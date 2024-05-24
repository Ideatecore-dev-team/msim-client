import React from "react";
import TimeIcon from "../../public/images/mascot-icons/Time Circle.png";
import TimelineImage from "../../public/images/Timeline Ex.png";
import "./TimelineSkyshare.css";

function TimelineSkyshare() {
  return (
    <>
      <div className="timeline-section flex pt-14 lg:pt-24 flex-col items-center bg-background">
        <div className="timeline-container flex flex-col items-center gap-7 lg:gap-10">
          <div className="timeline-title flex items-center gap-2 lg:gap-4">
            <img className=" size-6 lg:size-10" src={TimeIcon} alt="starts" />
            <h2 className="headline-2">Timeline Acara</h2>
          </div>
          <div className="timeline-img">
            <img src={TimelineImage} alt="timeline-acara" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TimelineSkyshare;
