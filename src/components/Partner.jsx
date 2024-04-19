import React from "react";

function Partner() {
  return (
    <>
      <div className="partner flex flex-col mx-auto pb-24">
        <div className="partner-container flex flex-col items-center gap-12">
          <h2 className=" font-bold text-3xl text-center">🤗 Our Partner</h2>
          <div className="partner-list flex items-start gap-6">
            <div className="partner1 flex w-44 h-16 content-center items-center">
              <img src="../../public/images/partner1.png" alt="partnerlogo" />
            </div>
            <div className="partner2 flex w-44 h-16 content-center items-center">
              <img src="../../public/images/partner2.png" alt="partnerlogo" />
            </div>
            <div className="partner3 flex w-44 h-16 content-center items-center">
              <img src="../../public/images/partner3.png" alt="partnerlogo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner;
