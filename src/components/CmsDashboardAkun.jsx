import React from "react";
import { Link, Navigate } from "react-router-dom";
import Character from "../../public/images/mascot-icons/Char.png";
import Edit1 from "../../public/images/mascot-icons/Edit Square.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import CmsNavCard from "./CmsNavCard";

function CmsDashboardAkun() {
  return (
    <>
      <div className="bg-background flex flex-col pb-44 pt-12 items-center self-stretch h-auto">
        <div className="content flex gap-4 ">
          <div className="">
            <CmsNavCard />
          </div>
          <div className=" w-full">
            <div className=" ">
              <h1 className="headline-1">Kelola akun</h1>
              <p className="paragraph">
                Kelola akun admin kamu disini (hanya berlaku untuk role{" "}
                <span className=" font-bold">“Super Admin”</span>).
              </p>
            </div>
            <div className=" shadow-md mt-10 border-2 border-black rounded-xl pb-44 px-3 bg-neutral-white w-full">
              <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                <div className="flex items-center gap-5 ">
                  <img className=" w-10" src={Character} alt="" />
                  <h4 className="headline-4">Akun Admin</h4>
                </div>
                <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                  <Link to="/" className="bg-primary-1 hover:bg-primary-2">
                    <img className=" w-6" src={Add} alt="" />
                  </Link>
                </div>
              </div>
              <div className="mt-5 ml-2">
                <table>
                  <thead>
                    <tr>
                      <th className=" pr-8 pl-2 py-3">No.</th>
                      <th className="pr-16 py-3">Username</th>
                      <th className="px-16 py-3">Password</th>
                      <th className="px-16 py-3">Role</th>
                      <th className="px-16 py-3">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pl-3 py-4 text-left font-semibold">1.</td>
                      <td className="pl-1 py-4 text-left">admin1</td>
                      <td className="px-16 py-4 text-left">hdkdk1234</td>
                      <td className="px-16 py-4 text-left">Admin</td>
                      <td className="px-16 py-4 text-left flex gap-4">
                        <div className="w-10 flex items-center justify-center rounded-md py-2">
                          <button className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center">
                            <img className="w-5" src={Edit1} alt="" />
                          </button>
                        </div>
                        <div className="w-10 flex items-center justify-center rounded-md py-2">
                          <button className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg flex justify-center items-center">
                            <img className="w-5" src={Delete} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-3 py-4 text-left font-semibold">2.</td>
                      <td className="pl-1 py-4 text-left">admin1</td>
                      <td className="px-16 py-4 text-left">hdkdk1234</td>
                      <td className="px-16 py-4 text-left">Admin</td>
                      <td className="px-16 py-4 text-left flex gap-4">
                        <div className="w-10 flex items-center justify-center rounded-md py-2">
                          <button className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center">
                            <img className="w-5" src={Edit1} alt="" />
                          </button>
                        </div>
                        <div className="w-10 flex items-center justify-center rounded-md py-2">
                          <button className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg flex justify-center items-center">
                            <img className="w-5" src={Delete} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CmsDashboardAkun;
