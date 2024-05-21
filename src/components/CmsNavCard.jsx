import React from "react";
import { Link, Navigate } from "react-router-dom";
import Edit from "../../public/images/mascot-icons/Edit.png";
import ArrowRight from "../../public/images/mascot-icons/Arrow - Right 3.png";
import IconAddUser from "../../public/images/mascot-icons/Add User.png";

function CmsNavCard() {
  return (
    <>
      <div className="py-4 px-3 w-72 flex justify-center items-center rounded-xl bg-neutral-white ">
        <ul>
          <li className="  py-4 w-64 px-4 hover:bg-background rounded-xl">
            <Link className="flex gap-4" to="/">
              <img className="w-6" src={IconAddUser} alt="" />
              <p className=" text-base">Kelola Akun</p>
            </Link>
          </li>
          <li className=" py-4 w-64 px-4 hover:bg-background rounded-xl">
            <Link className="flex gap-4" to="/ourprogram/talent">
              <img className="w-6" src={ArrowRight} alt="" />
              <p className=" text-base">Talent Academy</p>
            </Link>
          </li>
          <li className="  py-4 w-64 px-4 hover:bg-background rounded-xl">
            <Link className="flex gap-4" to="/ourprogram/mentor">
              <img className="w-6" src={ArrowRight} alt="" />
              <p className=" text-base">Mentor Academy</p>
            </Link>
          </li>
          <li className=" py-4 w-64 px-4 hover:bg-background rounded-xl">
            <Link className="flex gap-4" to="">
              <img className="w-6" src={ArrowRight} alt="/ourprogram/parent" />
              <p className=" text-base">Parents Academy</p>
            </Link>
          </li>
          <li className=" py-4 w-64 px-4 hover:bg-background rounded-xl">
            <Link className="flex gap-4" to="/article">
              <img className="w-6" src={Edit} alt="" />
              <p className=" text-base">Article</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default CmsNavCard;
