import React from "react";
import Icon1 from "../../public/images/mascot-icons/circle-1.png";
import Icon2 from "../../public/images/mascot-icons/circle-2.png";
import Icon3 from "../../public/images/mascot-icons/circle.png";

function Misi() {
  return (
    <>
      <div className="hero flex background flex-col items-center self-stretch">
        <div className="content h-full flex justify-center flex-wrap">
          <div className=" w-1/2 lg:w-full mt-24 pb-10 ">
            <h1 className="healine1 text-center text-black font-bold mb-10">
              Misi
            </h1>
            <div className=" w-full flex gap-4 mb-10">
              <img className=" w-16 h-16" src={Icon3} alt="icon" />
              <div className="">
                <h4 className="font-semibold">Personalized Mentorship</h4>
                <p className="paragraph">
                  MSiM menyediakan mentor yang sesuai dengan kebutuhan individu,
                  membantu mengatasi tantangan akademik, karier, dan pertumbuhan
                  pribadi.
                </p>
              </div>
            </div>
            <div className=" w-full flex gap-4 mb-10">
              <img className=" w-16 h-16" src={Icon1} alt="icon" />
              <div className="">
                <h4 className="font-semibold">
                  Integration of Islamic Spirituality
                </h4>
                <p className="paragraph">
                  Kami memadukan nilai-nilai Islam ke dalam pendekatan
                  pembinaan, menciptakan individu yang unggul dalam kehidupan
                  pribadi dan mengamalkan prinsip-prinsip kebaikan dan keadilan.
                </p>
              </div>
            </div>
            <div className=" w-full flex gap-4 mb-10">
              <img className=" w-16 h-16" src={Icon2} alt="icon" />
              <div className="">
                <h4 className="font-semibold">Empowerment for Success</h4>
                <p className="paragraph">
                  MSiM memberdayakan individu untuk meraih kesuksesan di dunia
                  dan akhirat, menyediakan keterampilan, pengetahuan, dan
                  kedalaman spiritual yang diperlukan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Misi;
