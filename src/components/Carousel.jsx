import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mascot2 from "../../public/images/mascot-icons/Char-1.png";
import Mascot3 from "../../public/images/mascot-icons/Char-2.png";
import Mascot4 from "../../public/images/mascot-icons/Char-3.png";
import Mascot5 from "../../public/images/mascot-icons/Char-4.png";

function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <div className="w-full h-full -mt-50">
      <div className=" h-auto cover-size">
        <Slider {...settings}>
          <div className="m-auto mt-40 ">
            <div className="bg-white rounded-xl card-size border-gray-900 border-2 shadow-md">
              <div className="rounded-full w-16 h-16 -mt-9 ml-5">
                <img className="w-16 h-16" src={Mascot2} alt="" />
              </div>
              <div className="">
                <h4 className="headline-4 ml-6 mt-3">Nailah Farah Fadhilah</h4>
                <p className="paragraph mx-6 pb-4 border-b border-black">
                  Member group of New Orbit
                </p>
                <p className="paragraph ml-6">
                  “Aku sangat senang, seru banget bisa kenal sama kakak-kakak di
                  Skyshare Academy dan dapet mentor yang alhamdulillah cocok dan
                  bisa main bareng teman-teman sefrekuensi, nambah ilmu, dan
                  buat aku tetap menjaga apa yang harus jaga.”
                </p>
              </div>
            </div>
          </div>
          <div className="m-auto mt-40">
            <div className="bg-white card-size rounded-xl border-gray-900 border-2 shadow-md">
              <div className="rounded-full w-16 h-16 -mt-9 ml-5">
                <img className="w-16 h-16" src={Mascot4} alt="" />
              </div>
              <div className="">
                <h4 className="headline-4 ml-6 mt-3">Bunda Annisa Rahmawati</h4>
                <p className="paragraph mx-6 pb-4 border-b border-black">
                  Orang tua dari Ananda Mecca
                </p>
                <p className="paragraph ml-6">
                  ”Percaya banget deh pokoknya sama Skyshare Academy”
                </p>
              </div>
            </div>
          </div>
          <div className="m-auto mt-40">
            <div className="bg-white card-size rounded-xl border-gray-900 border-2 shadow-md">
              <div className="rounded-full w-16 h-16 -mt-9 ml-5">
                <img className="w-16 h-16" src={Mascot3} alt="" />
              </div>
              <div className="">
                <h4 className="headline-4 ml-6 mt-3">
                  Muhammad Naufal Laksita
                </h4>
                <p className="paragraph mx-6 pb-4 border-b border-black">
                  Member group of Legacy
                </p>
                <p className="paragraph ml-6">
                  “Setelah mengikuti MSIM Mentoring Consulting terutama program
                  Skyshare Academy saya merasa memiliki teman yang satu
                  frekuensi. Teman-teman di group bukan hanya menjadi partner
                  untuk saling berbagi cerita namun juga sebagai penjaga
                  keimanan serta kesadaran saya sebagai manusia. ”
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
