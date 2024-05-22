import React from "react";
import "./CmsNavbar.css";
import Logo from "../../public/images/logo placeholder.png";
import IconButton from "../../public/images/mascot-icons/Fill 280.png";

function CmsNavbar() {
  return (
    <div className="bg-neutral-white justify-center items-center flex  py-6">
      <div className=" flex self-stretch items-start cms-navbar justify-between">
        <div className="">
          <img className=" w-44" src={Logo} alt="" />
        </div>
        <div className=" flex gap-2 items-center">
          <div className="">
            <h4 className="headline-4">admin123</h4>
            <p className="paragraph -mt-1">Super Admin</p>
          </div>
          <div className="">
            <button className="bg-primary-1 hover:bg-primary-2 py-3 px-3 rounded-xl">
              <img className="w-8" src={IconButton} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CmsNavbar;
