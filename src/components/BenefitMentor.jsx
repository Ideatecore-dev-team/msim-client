import React from "react";
import Stars from "../../public/images/mascot-icons/Vector.png";
import Icon1 from "../../public/images/mascot-icons/circle.png";

function BenefitMentor() {
  return (
    <>
      <div className="hero bg-blue-bg bg-cover border-y-2 border-black flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
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
                    <h4 className="headline-4">Advanced Mentorship</h4>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className=" w-72">
                    <p className="paragraph text-center">
                      Mentor Academy menawarkan tingkat pembimbingan lanjutan
                      kepada individu yang telah menyelesaikan SkyShare Academy,
                      memberikan wawasan dan bimbingan yang lebih mendalam untuk
                      meningkatkan perjalanan pengembangan pribadi dan
                      profesional mereka.
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
                    <h4 className="headline-4">
                      Specialized Skill Development
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className=" w-72">
                    <p className="paragraph text-center">
                      Mentor Academy fokus pada pengembangan keterampilan khusus
                      yang disesuaikan dengan aspirasi karier dan minat peserta.
                      Baik itu mengasah keterampilan kepemimpinan, menguasai
                      pengetahuan industri tertentu, atau menavigasi transisi
                      karier yang kompleks.
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
                    <h4 className="headline-4 text-center">
                      Exclusive Networking
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className=" w-72">
                    <p className="paragraph text-center">
                      Peserta mendapatkan akses ke jaringan eksklusif dari para
                      profesional, pakar industri, dan alumni Mentor Academy.
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
export default BenefitMentor;
