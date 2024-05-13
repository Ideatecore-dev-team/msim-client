import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "../../public/images/mascot-icons/Fill 217.png";
import MessageIcon from "../../public/images/mascot-icons/Message.png";
import LocationIcon from "../../public/images/mascot-icons/Fill 278.png";
import YoutubeIcon from "../../public/images/mascot-icons/Vector3.png";
import InstagramIcon from "../../public/images/mascot-icons/ig.png";

function ContactUsHero() {
  return (
    <>
      <div className="hero bg-orange-bg bg-cover bg-center flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content text-white">
          <div className="w-full flex mt-64 justify-center">
            <h1 className=" text-black font-bold text-5xl">Contact Us!</h1>
          </div>
          <div className="w-full flex items-center mt-5  justify-center">
            <img className="w-5" src={PhoneIcon} alt="tas" />
            <p className="paragraph ml-2 text-slate-600">(+62) 856-8043-529</p>
          </div>
          <div className="w-full flex items-center mt-5  justify-center">
            <img className="w-5" src={MessageIcon} alt="tas" />
            <p className="paragraph ml-2 text-slate-600">
              msimbusiness@org.com
            </p>
          </div>
          <div className="w-full flex items-center mt-5  justify-center">
            <img className="w-5" src={LocationIcon} alt="tas" />
            <p className="paragraph ml-2 text-slate-600">
              Komplek Taman Mangu Indah B14/12 Pondok Aren, Tangerang Selatan
              15224
            </p>
          </div>
          <div className="w-full flex items-center mt-5 gap-5  justify-center">
            <a href="#">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-slate-800 hover:bg-slate-700">
                <img className="w-8" src={InstagramIcon} alt="tas" />
              </div>
            </a>
            <a href="#">
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-slate-800 hover:bg-slate-700">
                <img className="w-8" src={YoutubeIcon} alt="tas" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsHero;
