import React from "react";
import ArrowRight from "../../public/images/mascot-icons/Arrow - Right 3.png";
import ArrowDown from "../../public/images/mascot-icons/Arrow - Down 3.png";
import { Link } from "react-router-dom";

function AllActivitiesMentorAcademy() {
  return (
    <>
      <div className="hero bg-background flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content h-72">
          <div className="flex justify-center ">
            <p className="paragraph px-10 text-center">
              Kalian akan mengikuti beragam aktivitas untuk mengupgrade
              kecerdasan majemuk yang dimiliki. Adapun aktivitas dalam program
              Mentor Academy yang akan kalian lakukan di antaranya, circle time,
              home visit, fill your mind, training, student expedition, take a
              walk together, experiantial learning, dan lain-lain.
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <Link
              className="flex px-3 py-2 rounded-full border-black border-2 hover:bg-slate-100 bg-white"
              to="/ourprogram/mentor/activities"
            >
              <p className="paragraph">Seluruh Kegiatan</p>
              <img className="w-5 ml-1" src={ArrowRight} alt="" />
            </Link>
          </div>
          <div className="flex justify-center mt-24">
            <Link
              className="flex px-5 py-4 bg-primary-1 shadow-lg rounded-xl hover:bg-primary-2"
              to="#"
            >
              <h4 className="headline-4 text-white font-bold">
                Join First Batch Now
              </h4>
              <img className="w-8 -rotate-90 ml-3" src={ArrowDown} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllActivitiesMentorAcademy;