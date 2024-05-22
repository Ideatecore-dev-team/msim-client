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
          <div className="w-full mt-10 flex  justify-between gap-5">
            <div className=" w-1/2 h-80 ">
              <form action="" className="ml-32 mt-2">
                <label
                  className=" w-full font-bold block mb-2"
                  htmlFor="firstname"
                >
                  Nama Depan <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className=" pl-2 rounded-md border-2 border-gray-400 w-full py-3 mb-4"
                  type="text"
                  id="firstname"
                  placeholder="Masukkan nama depan"
                />
                <label className=" font-bold  block mb-2" htmlFor="lastname">
                  Nama Belakang
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className=" pl-2 rounded-md border-2 border-gray-400 w-full py-3 mb-4"
                  type="text"
                  id="lastname"
                  placeholder="Masukkan nama Belakang"
                />
                <label className=" font-bold block mb-2" htmlFor="email">
                  Email <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className="pl-2 rounded-md border-2 border-gray-400 w-full py-3 mb-2"
                  type="text"
                  id="email"
                  placeholder="e.g astronaut@email.com"
                />
              </form>
            </div>
            <div className="  w-1/2">
              <label className=" font-bold block mt-2 mb-2" htmlFor="firstname">
                Berikan Pesan atau pertanyaan
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                className=" pl-2 rounded-md border-2 h-64 border-gray-400  w-3/4 px-1 py-1 mb-2 resize-none"
                type="paragraph"
                id="firstname"
                draggable="false"
                placeholder="Masukkan pesan atau pertanyaan anda"
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
