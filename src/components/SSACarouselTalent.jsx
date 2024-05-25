import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./SSACarouselTalent.css";

function SsaCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 150,
    arrows: false,
    draggable: true,
    rows: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="activities-card mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M10.4726 17.3331V12.8192C10.4726 12.0521 11.0944 11.4303 11.8614 11.4303V5.87473C11.8614 5.87473 10.8198 5.18031 9.08366 5.18031C7.34755 5.18031 6.30588 5.87478 6.30588 5.87478V11.4303C7.07299 11.4303 7.69484 12.0522 7.69484 12.8193V17.333M3.18096 17.333V12.8193C3.18096 12.0522 2.5591 11.4303 1.79199 11.4303V5.87476C1.79199 5.87476 2.83366 5.18028 4.56977 5.18028M14.9865 17.3331V12.8192C14.9865 12.0521 15.6083 11.4303 16.3753 11.4303V5.87473C16.3753 5.87473 15.3337 5.18031 13.5975 5.18031M8.97949 3.79145C8.97949 3.79145 7.86838 3.09701 7.86838 2.22895C7.86838 1.55777 8.41248 1.01367 9.08366 1.01367C9.75484 1.01367 10.296 1.55777 10.296 2.22895C10.296 3.09701 9.18782 3.79145 9.18782 3.79145H8.97949ZM4.4656 3.79145C4.4656 3.79145 3.35449 3.09701 3.35449 2.22895C3.35449 1.55777 3.89859 1.01367 4.56977 1.01367C5.24095 1.01367 5.78205 1.55777 5.78205 2.22895C5.78205 3.09701 4.67394 3.79145 4.67394 3.79145H4.4656ZM13.4934 3.79145C13.4934 3.79145 12.3823 3.09701 12.3823 2.22895C12.3823 1.55777 12.9264 1.01367 13.5975 1.01367C14.2687 1.01367 14.8098 1.55777 14.8098 2.22895C14.8098 3.09701 13.7017 3.79145 13.7017 3.79145H13.4934Z"
                stroke="white"
                strokeWidth="1.04167"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">1. Circle Time</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan yang dilakukan secara berkelompok dengan tujuan membangun
            pemahaman atau konsep mengenai suatu materi dengan waktu seminggu
            sekali sesuai kesepakatan bersama.
          </p>
        </div>
        <div className="activities-card mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
            >
              <path
                d="M3.34798 5.87478H5.43131M2.56673 7.95812H6.21256M7.86194 7.39591C8.8575 6.45306 10.2019 5.87478 11.6813 5.87478C14.7496 5.87478 17.2369 8.36207 17.2369 11.4303C17.2369 14.4986 14.7496 16.9859 11.6813 16.9859C10.3675 16.9859 9.1602 16.5299 8.20909 15.7674M4.38965 1.01367C5.34847 1.01367 6.12576 1.79096 6.12576 2.74978C6.12576 3.76346 5.43131 4.73522 5.43131 5.7489V5.80479C5.43131 6.52638 5.66536 7.2285 6.09832 7.80575L6.25358 8.01277C7.07216 9.10423 7.51465 10.4317 7.51465 11.796C7.51465 12.4737 7.40539 13.147 7.19108 13.7899L6.12576 16.9859H2.65354L1.58822 13.7899C1.37391 13.147 1.26465 12.4737 1.26465 11.796C1.26465 10.4317 1.70714 9.10423 2.52572 8.01277L2.68098 7.80575C3.11394 7.2285 3.34798 6.52638 3.34798 5.80479V5.7489C3.34798 4.73522 2.65354 3.76346 2.65354 2.74978C2.65354 1.79096 3.43082 1.01367 4.38965 1.01367ZM13.0702 9.69423C12.6867 9.69423 12.3758 9.38332 12.3758 8.99978C12.3758 8.61624 12.6867 8.30534 13.0702 8.30534C13.4537 8.30534 13.7646 8.61624 13.7646 8.99978C13.7646 9.38332 13.4537 9.69423 13.0702 9.69423ZM11.6813 12.1248C11.2978 12.1248 10.9869 11.8139 10.9869 11.4303C10.9869 11.0468 11.2978 10.7359 11.6813 10.7359C12.0649 10.7359 12.3758 11.0468 12.3758 11.4303C12.3758 11.8139 12.0649 12.1248 11.6813 12.1248ZM14.4591 12.1248C14.0756 12.1248 13.7646 11.8139 13.7646 11.4303C13.7646 11.0468 14.0756 10.7359 14.4591 10.7359C14.8426 10.7359 15.1535 11.0468 15.1535 11.4303C15.1535 11.8139 14.8426 12.1248 14.4591 12.1248Z"
                stroke="white"
                strokeWidth="1.04167"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">2. Sport Time</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan yang dilakukan secara berkelompok dengan tujuan membangun
            pemahaman atau konsep mengenai suatu materi dengan waktu seminggu
            sekali sesuai kesepakatan bersama.
          </p>
        </div>
        <div className="activities-card mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <path
                d="M6 18.5204C5.80556 18.5071 5.63743 18.5 5.5 18.5C3.84315 18.5 2.5 19.8431 2.5 21.5C2.5 23.1569 3.84315 24.5 5.5 24.5C7.5 24.5 15.4128 21.3481 17.5 20.75V20.25C16.4827 20.0804 12.2455 19.3359 9 18.8743M17.5 16.5V12M17.5 16.5C19.7091 16.5 21.5 18.2909 21.5 20.5C21.5 22.7091 19.7091 24.5 17.5 24.5C15.8213 24.5 14.3841 23.4659 13.7908 22M17.5 16.5C15.6362 16.5 14.0701 17.7748 13.626 19.5M19 9L22 6M19 10.5H16.0311C14.8044 10.5 13.7013 9.75315 13.2457 8.61417L12 5.5H11.0862C10.3844 5.5 9.70479 5.74604 9.16564 6.19533L5.5 9.25V9.5L8.5 13.5V13.75C8.5 13.75 7.49996 16 7.5 20M10 10.5L13 12.5V12.75C13 12.75 11 14 10.5 15.75M14.8052 5.5C14.8052 5.5 16.6152 4.94296 16.9397 3.72413C17.1907 2.78174 16.6349 1.81307 15.6984 1.56055C14.7619 1.30804 13.8034 1.86843 13.5525 2.81082C13.2279 4.02965 14.5145 5.42162 14.5145 5.42162L14.8052 5.5Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">3. Training</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Pelatihan kepada member untuk meningkatkan kapasitas softskill dan
            hardskill dengan waktu minimal setahun sekali.
          </p>
        </div>
        <div className="activities-card mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23 12C23 5.92487 18.0751 1 12 1M23 12C23 18.0751 18.0751 23 12 23M23 12C23 14.2091 18.0751 16 12 16C5.92487 16 1 14.2091 1 12M12 1C5.92487 1 1 5.92487 1 12M12 1C14.7614 1 17 5.92487 17 12C17 18.0751 14.7614 23 12 23M12 1C9.23858 1 7 5.92487 7 12C7 18.0751 9.23858 23 12 23M12 23C5.92487 23 1 18.0751 1 12"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">4. Fill Your Mind (FUM)</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan mengikuti seminar atau talkshow dengan tema pengembangan
            diri yang bertujuan untuk memperluas wawasan dan cakrawala berfikir
            member dengan waktu minimal setahun sekali.
          </p>
        </div>
        <div className="activities-card mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23 12C23 5.92487 18.0751 1 12 1M23 12C23 18.0751 18.0751 23 12 23M23 12C23 14.2091 18.0751 16 12 16C5.92487 16 1 14.2091 1 12M12 1C5.92487 1 1 5.92487 1 12M12 1C14.7614 1 17 5.92487 17 12C17 18.0751 14.7614 23 12 23M12 1C9.23858 1 7 5.92487 7 12C7 18.0751 9.23858 23 12 23M12 23C5.92487 23 1 18.0751 1 12"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">5. Home Visit</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan circle time yang dilakukan secara berkala dari rumah ke
            rumah secara bergantian untuk membangun bonding, mengenal keluarga
            dan latar belakang member dengan waktu sebulan sekali.
          </p>
        </div>
      </Slider>
    </>
  );
}

export default SsaCarousel;
