import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mascot1 from "../../public/images/mascot-icons/Char.png";
import Mascot2 from "../../public/images/mascot-icons/Char-1.png";
import Mascot3 from "../../public/images/mascot-icons/Char-2.png";
import Mascot4 from "../../public/images/mascot-icons/Char-3.png";
import Mascot5 from "../../public/images/mascot-icons/Char-4.png";

function MaCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.7,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    draggable: true,
    // pauseOnHover: true,
  };
  return (
    <div className="h-full ">
      <div className=" h-full -mt-50">
        <div className=" pr-16 cover-size ">
          <Slider {...settings}>
            <div className=" m-auto mt-40 ">
              <div className="bg-white rounded-xl card-size border-gray-900 border-2 shadow-md">
                <div className="rounded-full w-16 h-16 -mt-9 ml-28">
                  <img
                    className="w-16 h-16 border-2 border-black rounded-full"
                    src={Mascot1}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="headline-4 text-center mt-3">
                    1. Circle Time
                  </h4>
                  <div className="flex justify-center mt-4 w-full">
                    <div className="border-t-2 border-black w-2/3 "></div>
                  </div>
                  <p className="paragraph mt-5 mx-5 text-center">
                    Kegiatan yang dilakukan secara berkelompok dengan tujuan
                    membangun pemahaman atau konsep mengenai suatu materi dengan
                    waktu seminggu sekali sesuai kesepakatan bersama.
                  </p>
                </div>
              </div>
            </div>
            <div className=" m-auto mt-40 ">
              <div className="bg-white rounded-xl card-size border-gray-900 border-2 shadow-md">
                <div className="rounded-full w-16 h-16 -mt-9 ml-28">
                  <img
                    className="w-16 h-16 border-2 border-black rounded-full"
                    src={Mascot2}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="headline-4 text-center mt-3">2. Sport Time</h4>
                  <div className="flex justify-center mt-4 w-full">
                    <div className="border-t-2 border-black w-2/3 "></div>
                  </div>
                  <p className="paragraph mt-5 mx-5 text-center">
                    kegiatan berolahraga secara rutin bersama dengan waktu
                    sebulan sekali.
                  </p>
                </div>
              </div>
            </div>
            <div className=" m-auto mt-40 ">
              <div className="bg-white rounded-xl card-size border-gray-900 border-2 shadow-md">
                <div className="rounded-full w-16 h-16 -mt-9 ml-28">
                  <img
                    className="w-16 h-16 border-2 border-black rounded-full"
                    src={Mascot3}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="headline-4 text-center mt-3">3. Training</h4>
                  <div className="flex justify-center mt-4 w-full">
                    <div className="border-t-2 border-black w-2/3 "></div>
                  </div>
                  <p className="paragraph mt-5 mx-5 text-center">
                    Pelatihan kepada member untuk meningkatkan kapasitas
                    softskill dan hardskill dengan waktu minimal setahun sekali.
                  </p>
                </div>
              </div>
            </div>
            <div className=" m-auto mt-40 ">
              <div className="bg-white rounded-xl card-size border-gray-900 border-2 shadow-md">
                <div className="rounded-full w-16 h-16 -mt-9 ml-28">
                  <img
                    className="w-16 h-16 border-2 border-black rounded-full"
                    src={Mascot4}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="headline-4 text-center mt-3">
                    4. Fill Your Mind (FUM)
                  </h4>
                  <div className="flex justify-center mt-4 w-full">
                    <div className="border-t-2 border-black w-2/3 "></div>
                  </div>
                  <p className="paragraph mt-5 mx-5 text-center">
                    Kegiatan mengikuti seminar atau talkshow dengan tema
                    pengembangan diri yang bertujuan untuk memperluas wawasan
                    dan cakrawala berfikir member dengan waktu minimal setahun
                    sekali.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MaCarousel;
