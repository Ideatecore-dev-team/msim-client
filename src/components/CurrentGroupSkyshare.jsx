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
            <div className="card-size1 rounded-xl border-2 mt-4 border-black bg-white">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.334623707073!2d106.718817!3d-6.252708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa7997b41e33%3A0x45c21b25aefd63b6!2sSIT%20Cordova%201%20Pondok%20Aren!5e0!3m2!1sid!2sid!4v1714293035287!5m2!1sid!2sid"
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
            <div className="card-size1 rounded-xl border-2 mt-4 border-black bg-white">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.068902535852!2d106.72045187533308!3d-6.254652961239223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa785c5556b5%3A0x943177de79825c3f!2sSMPIT%20AL-IZZAH!5e0!3m2!1sid!2sid!4v1714293141406!5m2!1sid!2sid"
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
            <div className="card-size1 rounded-xl border-2 mt-4 border-black bg-white">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6197699153263!2d106.71407467533372!3d-6.3135771617850365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e55a184cee4d%3A0xc038909b2253775e!2sSMA%20Negeri%209%20Kota%20Tangerang%20Selatan!5e0!3m2!1sid!2sid!4v1714293197913!5m2!1sid!2sid"
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
                <div className="flex mt-11 justify-center">
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
