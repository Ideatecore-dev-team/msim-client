import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Work.png";
import AlurImage from "../../public/images/Alur Acara Ex.png";

function AlurAcara({ skyshare }) {
  const data = skyshare && skyshare.length > 0 ? skyshare[0] : null;
  return (
    <>
      <div className="hero bg-background border-t-2 border-slate-800 flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content -mt-10  w-11/12">
          <div className="flex justify-center">
            <div className=" h-14 mt-5 gap-3 flex items-center">
              <img className="w-12 h-12" src={WorkIcon} alt="starts" />
              <h2 className="headline-2 font-bold">Alur Acara</h2>
            </div>
          </div>
          {data && (
            <div className="flex lg:justify-normal justify-center w-full h-96 mt-10">
              <img
                className=" lg:w-full w-full h-64 lg:h-full"
                src={data.gambar_alur_acara}
                alt="alur image"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default AlurAcara;