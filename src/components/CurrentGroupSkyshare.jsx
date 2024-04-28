import React from "react";
import GroupIcon from "../../public/images/mascot-icons/3 User.png";
import SchoolIcon1 from "../../public/images/1.png";
import SchoolIcon2 from "../../public/images/2.png";
import SchoolIcon3 from "../../public/images/3.png";
import ArrowDown from "../../public/images/mascot-icons/Arrow - Down 3.png";

const CurrentGroupSkyshare = () => {
  return (
    <>
      <div className="hero bg-background flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content -mt-10">
          <div className="flex justify-center">
            <div className="h-14 gap-3 flex items-center">
              <img className="w-12 h-12" src={GroupIcon} alt="starts" />
              <h2 className="headline-2 font-bold">Current Group</h2>
            </div>
          </div>
          <div className="flex w-full h-5/6 justify-center gap-6 mt-7">
            {/* card1 */}
            <div className="card-size rounded-xl border-2 mt-4 border-black bg-white">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126891.654787017!2d106.802617!3d-6.346862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef0af0efc65b%3A0xb6d4f90191504723!2sBAIQ%20MARKET!5e0!3m2!1sid!2sid!4v1714239918170!5m2!1sid!2sid"
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
                      SIT Cordova 1 Pondok Aren
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className=" w-5/6 mt-4 ">
                    <p className="paragraph text-justify text-slate-500">
                      PPW9+WGV, Jl. Pd. Jati Raya No.9 03, Jurang Mangu Barat,
                      Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15223
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
            {/* card1 */}

            {/* card2 */}
            <div className="card-size rounded-xl border-2 mt-4 border-black bg-white">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126891.654787017!2d106.802617!3d-6.346862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef0af0efc65b%3A0xb6d4f90191504723!2sBAIQ%20MARKET!5e0!3m2!1sid!2sid!4v1714239918170!5m2!1sid!2sid"
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
                    <img className="w-16" src={SchoolIcon2} alt="scoolicon" />
                  </div>
                </div>
                <div className=" flex justify-center">
                  <div className="w-1/8 px-3 border-b-2 border-black">
                    <h4 className="headline-4 text-center pb-2 ">
                      SMPIT AL-IZZAH
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className=" w-5/6 mt-4 ">
                    <p className="paragraph text-justify text-slate-500">
                      Jl. Pd. Belimbing No.88, Jurang Mangu Barat, Kec. Pd.
                      Aren, Kota Tangerang Selatan, Banten 15223
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
            {/* card2 */}

            {/* card3 */}
            <div className="card-size rounded-xl border-2 mt-4 border-black bg-white">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126891.654787017!2d106.802617!3d-6.346862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef0af0efc65b%3A0xb6d4f90191504723!2sBAIQ%20MARKET!5e0!3m2!1sid!2sid!4v1714239918170!5m2!1sid!2sid"
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
                    <img className="w-16" src={SchoolIcon3} alt="schoolIcon" />
                  </div>
                </div>
                <div className=" flex justify-center">
                  <div className="w-1/8 px-3 border-b-2 border-black">
                    <h4 className="headline-4 text-center pb-2 ">
                      SMA Negeri 9 Tangsel
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className=" w-5/6 mt-4 ">
                    <p className="paragraph text-justify text-slate-500">
                      Jl. Hidup Baru No.31, Serua, Kec. Ciputat, Kota Tangerang
                      Selatan, Banten 15414
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
            {/* card3 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentGroupSkyshare;
