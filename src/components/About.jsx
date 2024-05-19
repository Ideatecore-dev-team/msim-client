import React from "react";
import "./About.css";
import Image1 from "../../public/images/Walk-Together.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
function About() {
  return (
    <>
      <div className="about flex flex-col items-center self-stretch pt-14 lg:pt-24">
        <div className="flex flex-col justify-center items-center gap-7 lg:gap-10">
          <h1 className="text-center text-2xl lg:text-4xl text-black font-bold">
            About
          </h1>
          <div className="about-container flex flex-col lg:flex-row gap-8 lg:gap-6">
            <div className="about-desc flex flex-col mx-auto lg:items-start gap-8 lg:gap-4 text-center lg:text-left ">
              <h4 className=" text-base lg:text-lg font-bold w-full">
                Apa sih MSiM itu?
              </h4>
              <p className=" self-stretch text-sm lg:text-base font-normal w-full">
                MSiM (More Stylish in Mentoring) menyediakan dua program
                unggulan: SkyShare Academy dan Mentor Academy, yang
                masing-masing menawarkan pembinaan personal dan profesional.
                Dengan fokus pada pengembangan karier dan kepemimpinan, MSiM
                bertujuan untuk menciptakan lingkungan pendidikan yang mendukung
                dan menginspirasi para pelajar.
              </p>
            </div>
            <div className="about-picture flex justify-center lg:justify-end relative w-full">
              <div className="mascot-about">
                <img
                  className="absolute size-24 lg:size-52 left-12 lg:left-0 bottom-0"
                  src={Mascot1}
                  alt="mascot1"
                />
              </div>
              <div className="pic-caption">
                <div
                  className="pict rounded-lg border border-neutral-1 shadow-md"
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), url(${Image1}) lightgray 50% / cover no-repeat`,
                  }}
                ></div>
                <p className="caption text-right">
                  Dokumentasi Skyshare Academy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
