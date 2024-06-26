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
import Show from "../../public/images/mascot-icons/Show.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import Chain from "../../public/images/mascot-icons/Link.png";

function CmsMentorForm() {
  return (
    <>
      <div className="bg-background flex flex-col pt-12 items-center self-stretch">
        <div className="content-1 flex gap-4">
          <div>
            <CmsNavCard />
          </div>
          <div className="w-full">
            <div>
              <h1 className="headline-1">Mentor Academy</h1>
              <p className="paragraph">
                Kelola secara dinamis page Mentor Academy disini.
              </p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className=" booklet mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Book} alt="" />
                  <h4 className="headline-4">Booklet</h4>
                </div>
                <div className="bg-neutral-white py-4 gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        <img className="w-6" src={Chain} alt="" />
                        Link Booklet <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="https://"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                  </form>
                </div>
              </div>

              <div className=" alur-acara mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Work} alt="" />
                  <h4 className="headline-4">Alur Acara</h4>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className=" font-bold text-base">
                    Upload gambar “Alur Acara”{" "}
                    <span className=" text-base font-bold text-orange-300">
                      *
                    </span>
                  </h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 border-dashed flex justify-center items-center border-gray-400 rounded-xl h-60">
                    <div className="">
                      <div className="flex justify-center">
                        <img className=" w-7 mb-4" src={File} alt="" />
                      </div>
                      <p className="paragraph text-center">Drag & Drop here</p>
                      <p className="paragraph text-center">or</p>
                      <div className="flex relative justify-center">
                        <h4 className=" font-bold text-orange-400 text-base absolute">
                          Browse
                        </h4>
                        <input
                          className="ml-80 opacity-0 absolute"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-4 bg-primary-1 hover:bg-primary-2 flex justify-center rounded-xl">
                    <button className="bg-primary-1 hover:bg-primary-2 flex justify-center gap-2 py-4">
                      <p className=" text-white font-bold">Upload File</p>
                      <img className=" w-6 -rotate-90" src={Arrow} alt="" />
                    </button>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className=" text-base">
                      Minimal Ukuran{" "}
                      <span className=" font-bold">(956 x 350px)</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className=" timeline mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Time} alt="" />
                  <h4 className="headline-4">Timeline</h4>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className=" font-bold text-base">
                    Upload gambar “Timeline”{" "}
                    <span className=" text-base font-bold text-orange-300">
                      *
                    </span>
                  </h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 border-dashed flex justify-center items-center border-gray-400 rounded-xl h-60">
                    <div className="">
                      <div className="flex justify-center">
                        <img className=" w-7 mb-4" src={File} alt="" />
                      </div>
                      <p className="paragraph text-center">Drag & Drop here</p>
                      <p className="paragraph text-center">or</p>
                      <div className="flex relative justify-center">
                        <h4 className=" font-bold cursor-pointer text-orange-400 text-base absolute">
                          Browse
                        </h4>
                        <input
                          className="ml-80 cursor-pointer opacity-0 absolute"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-4 bg-primary-1 hover:bg-primary-2 flex justify-center rounded-xl">
                    <button className="bg-primary-1 hover:bg-primary-2 flex justify-center gap-2 py-4">
                      <p className=" text-white font-bold">Upload File</p>
                      <img className=" w-6 -rotate-90" src={Arrow} alt="" />
                    </button>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className=" text-base">
                      Minimal Ukuran{" "}
                      <span className=" font-bold">(956 x 350px)</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className=" join-button mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Chain} alt="" />
                  <h4 className="headline-4">Join Button</h4>
                </div>
                <div className="bg-neutral-white py-4 gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mb-1" htmlFor="cta">
                      Call To Action <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Example: Join Skyshare Academy Season 6"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        <img className="w-6" src={Chain} alt="" />
                        Call To Action <span className="text-red-500">*</span>
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

export default CmsMentorForm;
