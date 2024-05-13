import React from "react";
import Image1 from "../../public/images/Walk-Together.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
function About() {
  return (
    <>
      <div className="hero flex background flex-col items-center self-stretch">
        <div className="content h-full flex justify-center flex-wrap">
          <div className=" w-full">
            <h1 className="healine1 text-center text-black font-bold mb-10">
              About
            </h1>
            <div className=" flex flex-wrap lg:flex-nowrap ml-72 lg:ml-0 gap-4">
              <div className=" w-2/3">
                <h4 className="headline-4 mb-4 text-center lg:text-left">
                  Apa sih MSiM itu?
                </h4>
                <p className=" text-center lg:text-left">
                  MSiM (More Stylish in Mentoring) menyediakan dua program
                  unggulan: SkyShare Academy dan Mentor Academy, yang
                  masing-masing menawarkan pembinaan personal dan profesional.
                  Dengan fokus pada pengembangan karier dan kepemimpinan, MSiM
                  bertujuan untuk menciptakan lingkungan pendidikan yang
                  mendukung dan menginspirasi para pelajar.
                </p>
              </div>
              <div className=" ml-16 lg:ml-0 w-1/2 flex justify-end">
                <img
                  className="absolute w-52 mr-72 mt-28 "
                  src={Mascot1}
                  alt="mascot1"
                />
                <div className="">
                  <img
                    className=" border border-black rounded-xl w-96"
                    src={Image1}
                    alt="image1"
                  />
                  <p className="paragraph text-right">
                    Dokumentasi Skyshare Academy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
