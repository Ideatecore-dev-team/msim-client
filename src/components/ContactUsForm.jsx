import React from "react";
import SkyshareLogo from "../../public/images/Skyshare-Logo.png";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";
import { Link } from "react-router-dom";

function ContactUsForm() {
  return (
    <>
      <div className="hero bg-background border-t-2 border-black flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content">
          <h1 className="headline-1 text-center">Apa yang bisa kami bantu?</h1>
          <div className="w-full mt-10 flex justify-around gap-10">
            <div className="ml-4 w-1/2">
              <label className=" font-bold ml-8 block" htmlFor="firstname">
                Nama Depan <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className=" pl-2 rounded-md border-2 border-gray-400 ml-8 w-3/4 py-2 mb-2"
                type="text"
                id="firstname"
              />
              <label className=" font-bold ml-8 block" htmlFor="lastname">
                Nama Belakang <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className=" pl-2 rounded-md border-2 border-gray-400 ml-8 w-3/4 py-2 mb-2"
                type="text"
                id="lastname"
              />
              <label className=" font-bold ml-8 block" htmlFor="email">
                Email <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="pl-2 rounded-md border-2 border-gray-400 ml-8 w-3/4 py-2 mb-2"
                type="text"
                id="email"
              />
            </div>
            <div className="  w-1/2">
              <label className=" font-bold ml-8 block" htmlFor="firstname">
                Berikan Pesan atau pertanyaan{" "}
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                className=" pl-2 rounded-md border-2 h-48 border-gray-400 ml-8 w-3/4 px-1 py-1 mb-2"
                type="paragraph"
                id="firstname"
              />
            </div>
          </div>
          <div className="w-full mt-10 flex justify-center">
            <button className=" bg-primary-1 flex justify-center items-center gap-2 hover:bg-primary-2 rounded-xl w-10 py-3">
              <p className="paragraph text-white font-bold">Send Message</p>
              <img className="w-8 -rotate-90" src={ArrowLeft} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsForm;
