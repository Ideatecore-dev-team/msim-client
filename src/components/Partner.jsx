import React from "react";
import Partner1 from "../../public/images/partner1.png";
import Partner2 from "../../public/images/partner2.png";
import Partner3 from "../../public/images/partner3.png";

function Partner() {
  return (
    <>
      <div className="partner flex flex-col mx-auto pb-24">
        <div className="partner-container flex flex-col items-center gap-12">
          <h2 className=" font-bold text-3xl text-center">🤗 Our Partner</h2>
          <div className="partner-list flex items-start gap-6">
            <div className="partner1 flex w-44 h-16 content-center items-center">
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
