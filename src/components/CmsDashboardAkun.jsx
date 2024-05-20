import React from "react";
import { Link, Navigate } from "react-router-dom";
import IconAddUser from "../../public/images/mascot-icons/Add User.png";
import ArrowRight from "../../public/images/mascot-icons/Arrow - Right 3.png";
import Edit from "../../public/images/mascot-icons/Edit.png";
import Character from "../../public/images/mascot-icons/Char.png";
import Add from "../../public/images/mascot-icons/Plus.png";

function CmsDashboardAkun() {
  return (
    <>
      <div className="bg-background flex flex-col pb-24 pt-12 items-center self-stretch h-auto">
        <div className="content flex gap-4 ">
          <div className="">
            <div className="py-4 px-3 w-72 flex justify-center items-center rounded-xl bg-neutral-white ">
              <ul>
                <li className="  py-4 w-64 px-4">
                  <Link className="flex gap-4" to="/">
                    <img className="w-6" src={IconAddUser} alt="" />
                    <p className=" text-base">Kelola Akun</p>
                  </Link>
                </li>
                <li className=" py-4 w-64 px-4">
                  <Link className="flex gap-4" to="/">
                    <img className="w-6" src={ArrowRight} alt="" />
                    <p className=" text-base">Talent Academy</p>
                  </Link>
                </li>
                <li className="  py-4 w-64 px-4">
                  <Link className="flex gap-4" to="/">
                    <img className="w-6" src={ArrowRight} alt="" />
                    <p className=" text-base">Mentor Academy</p>
                  </Link>
                </li>
                <li className=" py-4 w-64 px-4">
                  <Link className="flex gap-4" to="/">
                    <img className="w-6" src={ArrowRight} alt="" />
                    <p className=" text-base">Parents Academy</p>
                  </Link>
                </li>
                <li className=" py-4 w-64 px-4">
                  <Link className="flex gap-4" to="/">
                    <img className="w-6" src={Edit} alt="" />
                    <p className=" text-base">Article</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-full">
            <div className=" ">
              <h1 className="headline-1">Kelola akun</h1>
              <p className="paragraph">
                Kelola akun admin kamu disini (hanya berlaku untuk role{" "}
                <span className=" font-bold">“Super Admin”</span>).
              </p>
            </div>
            <div className=" mt-10 border-2 border-black rounded-xl pb-44 px-3 bg-neutral-white w-full">
              <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                <div className="flex items-center gap-5 ">
                  <img className=" w-10" src={Character} alt="" />
                  <h4 className="headline-4">Akun Admin</h4>
                </div>
                <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                  <Link to="/" className="bg-primary-1">
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
                      <td className="px-16 py-4 text-left">
                        <Link to=""></Link>
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
