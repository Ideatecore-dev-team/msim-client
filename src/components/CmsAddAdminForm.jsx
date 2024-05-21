import React from "react";
import { Link, Navigate } from "react-router-dom";
import Coution from "../../public/images/mascot-icons/Info Square.png";
import CmsNavCard from "./CmsNavCard";

function CmsAddAdminForm() {
  return (
    <>
      <div className="bg-background flex flex-col pb-44 pt-12 items-center self-stretch h-auto">
        <div className="content flex gap-4 ">
          <div className="">
            <CmsNavCard />
          </div>
          <div className=" w-full">
            <div className=" ">
              <h1 className="headline-1">Add Admin</h1>
              <p className="paragraph">
                Masukkan data pada <span className=" font-bold"> Field </span>
                yang tertera
              </p>
            </div>
            <div className=" shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className=" mt-10 ml-2">
                <form action="">
                  <label htmlFor="username" className=" font-bold block mb-2">
                    Username <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    placeholder="Masukkan Username"
                    type="text"
                    className=" w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                  />
                  <label
                    htmlFor="username"
                    className=" font-bold block mb-2 mt-5"
                  >
                    Password <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    placeholder="Masukkan Password"
                    type="password"
                    className=" w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                  />
                  <div className="flex gap-1">
                    <img className="w-5" src={Coution} alt="" />
                    <p className="text-xs mt-1">Minimal 8 huruf atau angka</p>
                  </div>
                  <label
                    htmlFor="username"
                    className=" font-bold block mb-2 mt-5"
                  >
                    Role <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    placeholder="Masukkan Role"
                    type="text"
                    className=" w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                  />
                  <div className=" w-full mt-10 flex justify-end">
                    <div className=" w-56 py-2 flex">
                      <button className="bg-primary-1 w-20 py-2 rounded-md hover:bg-primary-2 text-white font-bold">
                        Simpan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CmsAddAdminForm;
