import React from "react";
import logoPlaceholder from "../../public/images/logo placeholder.png";
import "./Hero.css";

function TagLine() {
  return (
    <>
      <div className="hero bg-gray-200 flex flex-col pt-24 items-center self-stretch">
        <div className="content  text-white flex flex-row justify-center items-center flex-wrap">
          <div className="flex  flex-col items-center">
            <div className="logo-placeholder w-96 h-32">
              <img src={logoPlaceholder} alt="logo" />
            </div>
            <p className="text-sm font-medium text-slate-900	">
              Build up your mentoring with us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TagLine;
