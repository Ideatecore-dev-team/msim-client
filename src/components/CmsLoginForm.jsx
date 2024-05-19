import React from "react";
import Pose1 from "../../public/images/mascot-icons/pose=2.png";
import Pose2 from "../../public/images/mascot-icons/pose=7.png";
import Pose3 from "../../public/images/mascot-icons/pose=6.png";
import Pose4 from "../../public/images/mascot-icons/pose=8.png";
import Pose5 from "../../public/images/mascot-icons/pose=3.png";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";

function CmsLoginForm() {
  return (
    <>
      <div className="hero bg-background flex flex-col pb-12 pt-24 items-center self-stretch h-full">
        <div className=" w-4/5  text-white flex justify-center">
          <div className="">
            <div className="-ml-36">
              <img className="w-36" src={Pose1} alt="" />
              <img className="w-36 -mt-20 ml-20 absolute" src={Pose5} alt="" />
              <img className="w-36 -mt-36 ml-40 absolute" src={Pose4} alt="" />
              <img className="w-36 -mt-4 ml-40 absolute" src={Pose3} alt="" />
              <img className="w-36 -mt-3 ml-1 absolute" src={Pose2} alt="" />
            </div>
          </div>
        </div>
        <div className=" mt-36 w-96">
          <h1 className="headline-1 text-center">CMS MsiM</h1>
          <p className="paragraph text-center">
            Website ini digunakan untuk mengelola konten pada website MSiM.
          </p>
        </div>
        <div className=" mt-6 bg-white border-2 rounded-xl shadow-lg shadow-gray-500 border-black px-5 pb-10 pt-5">
          <h4 className="headline-4 text-center">Login Admin</h4>
          <input
            type="text"
            placeholder="Username"
            className="px-2 mt-5 py-2 rounded-md w-80 block border border-gray-300 shadow-sm shadow-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-2 mt-5 py-2 rounded-md w-80 block border border-gray-300 shadow-sm shadow-gray-500"
          />
          <div className="px-2 mt-5 py-2 rounded-md w-80 border border-gray-300 shadow-sm shadow-gray-500">
            <form action="">
              <input
                type="radio"
                name="role"
                value="superadmin"
                id="superadmin"
              />
              <label htmlFor="superadmin" className="ml-2 font-bold">
                Super Admin
              </label>
              <input
                type="radio"
                name="role"
                value="admin"
                id="admin"
                className="ml-5"
              />
              <label htmlFor="admin" className="ml-2 font-bold">
                Admin
              </label>
            </form>
          </div>
          <button className=" bg-primary-1 w-80 py-2 mt-5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-2">
            <p className="font-bold text-white">Login</p>
            <img className="w-6 -rotate-90" src={ArrowLeft} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CmsLoginForm;
