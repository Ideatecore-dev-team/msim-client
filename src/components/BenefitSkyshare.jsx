import React from "react";
import Stars from "../../public/images/mascot-icons/Vector1.png";
import Icon1 from "../../public/images/mascot-icons/circle.png";

function BenefitSkyshare() {
  return (
    <>
      <div className="hero bg-orange-bg bg-cover border-t-2 border-black flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className="content -mt-10">
          <div className="flex justify-center">
            <div className=" h-14 gap-3 flex items-center">
              <img className="w-12 h-12" src={Stars} alt="starts" />
              <h2 className="headline-2">Benefit of joining</h2>
            </div>
          </div>
          <div className=" w-full h-auto">
            <div className="flex justify-center gap-6 mt-16">
              <div className=" w-80 h-96 rounded-xl border-black border-2 shadow-md bg-white">
                <div className="flex justify-center">
                  <img className=" w-16 -mt-8" src={Icon1} alt="" />
                </div>
                <div className="flex mt-5 justify-center">
                  <div className="border-b-2 pb-4 border-black px-4">
                    <h4 className="headline-4">Exclusive Resources</h4>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className=" w-72">
                    <p className="paragraph text-center">
                      Akses ke workshop, seminar, kursus online, dan komunitas
                      yang mendukung untuk meningkatkan pengalaman belajarmu dan
                      memperluas wawasan.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-80 h-96 rounded-xl border-black border-2 shadow-md bg-white">
                <div className="flex justify-center">
                  <img className=" w-16 -mt-8" src={Icon1} alt="" />
                </div>
                <div className="flex mt-5 justify-center">
                  <div className="border-b-2 pb-4 border-black px-4">
                    <h4 className="headline-4">Career Advancement</h4>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className=" w-72">
                    <p className="paragraph text-center">
                      Dapatkan konseling karier, kesempatan untuk berjejaring,
                      dan bimbingan untuk menjelajahi magang dan melamar
                      pekerjaan, mempersiapkanmu untuk sukses dalam bidang yang
                      kamu pilih.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-80 h-96 rounded-xl border-black border-2 shadow-md bg-white">
                <div className="flex justify-center">
                  <img className=" w-16 -mt-8" src={Icon1} alt="" />
                </div>
                <div className="flex mt-5 justify-center">
                  <div className="border-b-2 pb-4 border-black px-4">
                    <h4 className="headline-4">Personalized Mentorship</h4>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className=" w-72">
                    <p className="paragraph text-center">
                      Dapatkan mentor yang disesuaikan dengan kebutuhanmu,
                      mendukungmu dalam menghadapi tantangan akademik, keputusan
                      karier, dan perkembangan pribadi.
                    </p>
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
export default BenefitSkyshare;
