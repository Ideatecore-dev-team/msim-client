import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Work.png";

function AlurAcaraMentorAcademy({ mentor }) {
  return (
    <div className="hero bg-background flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
      <div className="content -mt-10">
        <div className="flex justify-center">
          <div className="h-14 mt-5 gap-3 flex items-center">
            <img className="w-12 h-12" src={WorkIcon} alt="Work Icon" />
            <h2 className="headline-2 font-bold">Alur Acara</h2>
          </div>
        </div>
        {mentor && (
          <div className="ml-24 timeline-img mt-10">
            <img
              className="w-full h-full"
              src={mentor.gambar_alur_acara}
              alt="Alur Acara Image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AlurAcaraMentorAcademy;
