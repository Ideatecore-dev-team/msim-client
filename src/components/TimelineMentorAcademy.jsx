import React from "react";
import TimeIcon from "../../public/images/mascot-icons/Time Circle.png";
import TimelineImage from "../../public/images/Timeline Ex.png";

function TimelineMentorAcademy({ mentor }) {
  return (
    <>
      <div className="hero bg-background flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content -mt-10">
          <div className="flex justify-center">
            <div className=" h-14 mt-5 gap-3 flex items-center">
              <img className="w-12 h-12" src={TimeIcon} alt="starts" />
              <h2 className="headline-2 font-bold">Timeline</h2>
            </div>
          </div>
          {mentor && (
            <div className="ml-24 timeline-img mt-10">
              <img
                className="w-full h-full"
                src={mentor.gambar_timeline}
                alt="Alur Acara Image"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TimelineMentorAcademy;
