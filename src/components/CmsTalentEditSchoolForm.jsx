import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import Group from "../../public/images/mascot-icons/3 User.png";
import Chain from "../../public/images/mascot-icons/Link.png";

function CmsTalentEditSchoolForm() {
  const Navigate = useNavigate();
  function handleNavigate() {
    Navigate("/cms/talent/editgroup");
  }
  return (
    <>
      <div className="bg-background flex flex-col pt-12 items-center self-stretch">
        <div className="content-1 flex gap-4">
          <div>
            <CmsNavCard />
          </div>
          <div className="w-full">
            <div>
              <h1 className="headline-1">Edit School</h1>
              <p className="paragraph">Masukkan data pada field yang tertera</p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className=" logo-sekolah mt-6">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className=" font-bold text-base">
                    Upload Logo Sekolah{" "}
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
                    <h4 className=" text-base">(File PDF)</h4>
                  </div>
                </div>
              </div>

              <div className=" join-button mt-6">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mb-1" htmlFor="cta">
                      Nama Sekolah <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Masukkan nama sekolah"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        Alamat Sekolah <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="Masukkan alamat sekolah"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        Masukkan Embed Google Maps (HTML){" "}
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="Example : https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6197699153263!2d106.71407467533372!3d-6.3135771617850365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e55a184cee4d%3A0xc038909b2253775e!2sSMA%20Negeri%209%20Kota%20Tangerang%20Selatan!5e0!3m2!1sid!2sid!4v1714293197913!5m2!1sid!2sid"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                  </form>
                </div>
                <div className="daftar-sekolah mt-6">
                  <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                    <div className="flex items-center gap-5 ">
                      <img className=" w-6" src={Group} alt="" />
                      <h4 className="headline-4">Group</h4>
                    </div>
                    <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                      <Link
                        to="/cms/talent/editgroup"
                        className="bg-primary-1 hover:bg-primary-2"
                      >
                        <img className=" w-6" src={Add} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-neutral-white p-4 gap-4 flex items-center">
                    <table>
                      <thead>
                        <tr>
                          <th className=" pr-8 pl-2 py-3">No.</th>
                          <th className="pr-24 w-48 py-3">Nama Grup</th>
                          <th className="pr-24 py-3">Link Instagram</th>
                          <th className="pl-16 py-3">Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pl-3 py-4 text-left font-semibold text-sm">
                            1.
                          </td>
                          <td className="pl-1 py-4 text-left text-sm">
                            SIT Cordova 1 Pondok Aren
                          </td>
                          <td className="pl-10 py-4 text-left">
                            <div className="flex  items-center text-sm gap-1">
                              <img className=" w-6 h-6" src={Chain} alt="" />
                              https://www.instagram.com/grup1/
                            </div>
                          </td>
                          <td className="pl-24 py-4 text-left flex gap-4">
                            <div className="w-10 flex items-center justify-center rounded-md py-2">
                              <button
                                onClick={handleNavigate}
                                className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center"
                              >
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

export default CmsTalentEditSchoolForm;
