import React from "react";
import Partner1 from "../../public/images/partner1.png";
import Partner2 from "../../public/images/partner2.png";
import Partner3 from "../../public/images/partner3.png";

function Partner() {
  return (
    <>
      <div className="partner flex flex-col mx-auto lg:pb-24 lg:px-0 sm:pb-14 sm:px-6">
        <div className="partner-container flex flex-col items-center lg:gap-12   overflow-hidden">
          <h2 className=" font-bold text-3xl text-center">Our Partner</h2>
          <div className="partner-list flex items-start lg:gap-6 sm:gap-4 sm:overflow-x-auto">
            <div className="partner1 flex w-44 h-16 content-center items-center max-w-full">
              <img src={Partner1} alt="partnerlogo" />
            </div>
            <div className="partner2 flex w-44 h-16 content-center items-center">
              <img src={Partner2} alt="partnerlogo" />
            </div>
            <div className="partner3 flex w-44 h-16 content-center items-center">
              <img src={Partner3} alt="partnerlogo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
