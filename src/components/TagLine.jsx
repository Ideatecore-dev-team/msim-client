import React from "react";
import logoPlaceholder from "../../public/images/logo SkyshareAcademy.png";
import "./TagLine.css";

function TagLine() {
  return (
    <>
      <div className="logo-abt background flex flex-col xs:pt-12 lg:pt-24 items-center self-stretch">
        <div className="content flex flex-col items-center justify-center">
          <div className="logo-placeholder w-48 h-14 lg:w-96 lg:h-32">
            <img src={logoPlaceholder} alt="logo" />
          </div>
          <p className="logo-txt lg:text-xl font-medium text-slate-900	">
          </p>
        </div>
      </div>
    </>
  );
}
export default TagLine;
