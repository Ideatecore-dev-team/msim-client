import React from "react";
// import Button from "./Button";

function HomeArticle() {
  return (
    <>
      <div className="home-art">
        <h2 className="text-center pt-20 font-bold text-3xl w-full pb-20">
          🗞️ Artikel Terbaru
        </h2>
        <div className="article flex justify-center  mx-auto flex-wrap gap-10 pb-20">
          <div className="card-art bg-white rounded-2xl pb-16 gap-6 flex flex-col overflow-hidden">
            <div className="card-img bg-card-bg-1 bg-cover"></div>
            <div className="card-content  flex py-6 flex-col gap-4 px-6">
              <p className=" font-bold text-base ">
                Bagaimana Mentorship Membakar Inovasi
              </p>
              <p className=" font-normal text-base">
                Dalam lanskap kreativitas dan inovasi, mentorship adalah kunci
                untuk membuka potensi tersembunyi. Lebih dari sekadar...
              </p>
              <div className="card-cta flex gap-4 items-center">
                <div className="text-white category flex px-4 py-1 content-center items-center gap-3 rounded-3xl">
                  <p className=" font-normal text-xs">Mentorship</p>
                </div>
                <a href="/article" className="flex items-start gap-1">
                  <span className="link-txt text-base">Baca Selengkapnya</span>
                  <svg
                    className=" size-6"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.8105 13.3506L3.31079 13.3506L3.31079 11.8506L20.8105 11.8506L20.8105 13.3506Z"
                      fill="#FEA02F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.0604 11.8506C16.5329 11.8506 13.6504 14.9527 13.6504 18.2606L13.6504 19.0106L15.1504 19.0106L15.1504 18.2606C15.1504 15.7491 17.3931 13.3506 20.0604 13.3506L20.8104 13.3506L20.8104 11.8506L20.0604 11.8506Z"
                      fill="#FEA02F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.0604 13.3506C16.5329 13.3506 13.6504 10.2484 13.6504 6.94054L13.6504 6.19054L15.1504 6.19054L15.1504 6.94054C15.1504 9.45212 17.3931 11.8506 20.0604 11.8506L20.8104 11.8506L20.8104 13.3506L20.0604 13.3506Z"
                      fill="#FEA02F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card-art bg-white rounded-2xl pb-16 gap-6 flex flex-col overflow-hidden">
            <div className="card-img bg-card-bg-2 bg-cover"></div>
            <div className="card-content flex py-6 flex-col gap-4 px-6">
              <p className=" font-bold text-base ">
                Mentoring untuk Kewirausahaan Perempuan
              </p>
              <p className=" font-normal text-base">
                Dalam upaya untuk meningkatkan peran dan kontribusi pengusaha
                perempuan dalam dunia bisnis, sebuah program mentorship...
              </p>
              <div className="card-cta flex gap-4 items-center">
                <div className="text-white category flex px-4 py-1 content-center items-center gap-3 rounded-3xl">
                  <p className=" font-normal text-xs">Mentorship</p>
                </div>
                <a href="/article" className="flex items-start gap-1">
                  <span className="link-txt text-base">Baca Selengkapnya</span>
                  <svg
                    className=" size-6"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.8105 13.3506L3.31079 13.3506L3.31079 11.8506L20.8105 11.8506L20.8105 13.3506Z"
                      fill="#FEA02F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.0604 11.8506C16.5329 11.8506 13.6504 14.9527 13.6504 18.2606L13.6504 19.0106L15.1504 19.0106L15.1504 18.2606C15.1504 15.7491 17.3931 13.3506 20.0604 13.3506L20.8104 13.3506L20.8104 11.8506L20.0604 11.8506Z"
                      fill="#FEA02F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.0604 13.3506C16.5329 13.3506 13.6504 10.2484 13.6504 6.94054L13.6504 6.19054L15.1504 6.19054L15.1504 6.94054C15.1504 9.45212 17.3931 11.8506 20.0604 11.8506L20.8104 11.8506L20.8104 13.3506L20.0604 13.3506Z"
                      fill="#FEA02F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card-art bg-white rounded-2xl pb-16 gap-6 flex flex-col overflow-hidden">
            <div className="card-img bg-card-bg-3 bg-cover"></div>
            <div className="card-content flex py-6 flex-col gap-4 px-6">
              <p className=" font-bold text-base ">
                Program Mentorship Siswa Sukses
              </p>
              <p className=" font-normal text-base">
                Sebuah program mentorship inovatif telah diluncurkan dengan
                tujuan membimbing dan menginspirasi generasi muda. Program
                ini...
              </p>
              <div className="card-cta flex gap-4 items-center">
                <div className="text-white category-2 flex px-4 py-1 content-center items-center gap-3 rounded-3xl">
                  <p className=" font-normal text-xs">Pelajar</p>
                </div>
                <a href="/article" className="flex items-start gap-1">
                  <span className="link-txt text-base">Baca Selengkapnya</span>
                  <svg
                    className=" size-6"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.8105 13.3506L3.31079 13.3506L3.31079 11.8506L20.8105 11.8506L20.8105 13.3506Z"
                      fill="#FEA02F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.0604 11.8506C16.5329 11.8506 13.6504 14.9527 13.6504 18.2606L13.6504 19.0106L15.1504 19.0106L15.1504 18.2606C15.1504 15.7491 17.3931 13.3506 20.0604 13.3506L20.8104 13.3506L20.8104 11.8506L20.0604 11.8506Z"
                      fill="#FEA02F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.0604 13.3506C16.5329 13.3506 13.6504 10.2484 13.6504 6.94054L13.6504 6.19054L15.1504 6.19054L15.1504 6.94054C15.1504 9.45212 17.3931 11.8506 20.0604 11.8506L20.8104 11.8506L20.8104 13.3506L20.0604 13.3506Z"
                      fill="#FEA02F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <Button onClick={() => console.log("Button clicked")} className="">
          View More
          <svg
            className=" inline align-middle pb-1 ml-1"
            id="Arrow - Right"
            width="24"
            height="24"
            viewBox="0 0 26 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4885 4.56152L12.0775 5.97852L17.1205 10.9995H3.5415V12.9995H17.1195L12.0775 18.0215L13.4885 19.4385L20.9585 11.9995L13.4885 4.56152Z"
              fill="white"
            />
          </svg>
        </Button> */}
      </div>
    </>
  );
}

export default HomeArticle;
