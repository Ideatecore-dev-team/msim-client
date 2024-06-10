import React from "react";
import { useEffect, useState } from "react";
import skyshareApi from "../utilities/skyshareApi";
import GroupIcon from "../../public/images/mascot-icons/3 User.png";
import SchoolIcon1 from "../../public/images/1.png";
import SchoolIcon2 from "../../public/images/2.png";
import SchoolIcon3 from "../../public/images/3.png";
import ArrowDown from "../../public/images/mascot-icons/Arrow - Down 3.png";

const CurrentGroupSkyshare = () => {
  const [groups, setgroups] = useState([]);
  useEffect(() => {
    const getGroupSchool = async function () {
      try {
        const response = await skyshareApi.get("/school");
        setgroups(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGroupSchool();
  }, []);
  console.log(groups, "groups");
  return (
    <>
      <div className="group-section flex px-3 py-14 lg:py-24 lg:px-0 flex-col items-center bg-background">
        <div className="group-container flex flex-col items-center gap-9 lg:gap-10">
          <div className="group-title flex items-center gap-2 lg:gap-4">
            <img className=" size-6 lg:size-10" src={GroupIcon} alt="starts" />
            <h2 className="headline-2">Current Group</h2>
          </div>
          <div className="schoolgroup-card flex items-center gap-9 lg:flex-row flex-col">
            {groups.map((group) => {
              return (
                <div className="card-size1 rounded-xl border-2 mt-4 border-black bg-white">
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7319723526257!2d106.835111275332!3d-6.166636160434512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f516437bc001%3A0x4e45903b12eb3209!2sSMAN%201%20JAKARTA!5e0!3m2!1sid!2sid!4v1717938834325!5m2!1sid!2sid"
                    width="290"
                    height="140"
                    // style={{ border: "0" }}
                    style={{
                      borderRadius: "10px 10px 0px 0px",
                      zIndex: "-10",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className=" h-auto border-t-2 -mt-3 relative bg-white border-black rounded-t-xl ">
                    <div className="w-full flex justify-center  ">
                      <div className="w-16 border-2 border-black  rounded-full -mt-8">
                        <img className="w-16" src={SchoolIcon1} alt="" />
                      </div>
                    </div>
                    <div className=" flex justify-center">
                      <div className="w-1/8 px-3 border-b-2 border-black">
                        <h4 className="headline-4 text-center pb-2 ">
                          {group.nama_sekolah}
                        </h4>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className=" w-5/6 mt-4 ">
                        <p className="paragraph text-justify text-slate-500">
                          PPW9+WGV, Jl. Pd. Jati Raya No.9 03, Jurang Mangu
                          Barat, Kec. Pd. Aren, Kota Tangerang Selatan, Banten
                          15223
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-5 justify-center">
                      <a
                        className="bg-primary-1 hover:bg-primary-2 px-3 py-2 rounded-full flex"
                        href="#"
                      >
                        <p className="px-2 text-white">Daftar Kelompok</p>
                        <img className="w-5 ml-2" src={ArrowDown} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentGroupSkyshare;
