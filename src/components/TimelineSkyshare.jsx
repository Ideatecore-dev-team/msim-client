import React from "react";
import TimeIcon from "../../public/images/mascot-icons/Time Circle.png";
import TimelineImage from "../../public/images/Timeline Ex.png";

function TimelineSkyshare({ skyshare }) {
  const data = skyshare && skyshare.length > 0 ? skyshare[0] : null;
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
          {data && (
            <div className="flex w-full h-96 mt-10">
              <img
                className=" w-full h-full"
                src={data.gambar_timeline}
                alt="alur image"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TimelineSkyshare;
