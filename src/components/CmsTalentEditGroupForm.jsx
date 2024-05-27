import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import CmsNavCard from "./CmsNavCard";
import Arrow from "../../public/images/mascot-icons/Arrow - Down 3.png";
import File from "../../public/images/mascot-icons/Fill 337.png";
import Book from "../../public/images/mascot-icons/Document.png";
import Work from "../../public/images/mascot-icons/Work.png";
import Time from "../../public/images/mascot-icons/Time Circle.png";
import Edit1 from "../../public/images/mascot-icons/Edit Square.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Location from "../../public/images/mascot-icons/Location.png";
import Elipse from "../../public/images/mascot-icons/Ellipse 17.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import Group from "../../public/images/mascot-icons/3 User.png";
import Chain from "../../public/images/mascot-icons/Link.png";

function CmsTalentEditGroupForm() {
  return (
    <>
      <div className="bg-background flex pb-56 flex-col pt-12 items-center self-stretch">
        <div className="content-1 flex gap-4">
          <div>
            <CmsNavCard />
          </div>
          <div className="w-full">
            <div>
              <div className="flex items-center gap-4">
                <img className="w-4 h-4" src={Elipse} alt="" />
                <h1 className="headline-1">Edit Group</h1>
              </div>
              <p className="paragraph">Masukkan data pada field yang tertera</p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className=" join-button mt-6">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mb-1" htmlFor="cta">
                      Nama Grup <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Masukkan nama grup"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        <img className=" w-6 h-6" src={Chain} alt="" />
                        Link Instagram Grup{" "}
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="https://"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                  </form>
                </div>

                <div className=" mt-4 flex gap-5 justify-end">
                  <div className=" w-56 py-2 flex">
                    <button
                      type="button"
                      className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-200 text-black font-bold"
                    >
                      Batal
                    </button>
                  </div>
                  <div className=" w-56 py-2 flex">
                    <button
                      type="submit"
                      className="bg-primary-1 w-full py-2 rounded-md hover:bg-primary-2 text-white font-bold"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CmsTalentEditGroupForm;
