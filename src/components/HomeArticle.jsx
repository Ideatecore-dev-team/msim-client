import React from "react";
import "./HomeArticle.css";
import Button from "./Button";

function HomeArticle() {
  return (
    <>
      <div className="home-art ">
        <div className="art-header pb-12 pt-20 flex max-w-6xl mx-auto content-center items-center">
          <div className="blankspace"></div>
          <h2 className="text-center font-bold text-3xl">🗞️ Artikel Terbaru</h2>
          <Button onClick={() => console.log("Button clicked")} className="">
            View More
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" inline ml-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.749 13.3037L3.24926 13.3037L3.24926 11.8037L20.749 11.8037L20.749 13.3037Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 11.8037C16.4718 11.8037 13.5894 14.9059 13.5894 18.2138L13.5894 18.9638L15.0894 18.9638L15.0894 18.2138C15.0894 15.7022 17.332 13.3037 19.9994 13.3037L20.7494 13.3037L20.7494 11.8037L19.9994 11.8037Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 13.3037C16.4718 13.3037 13.5894 10.2016 13.5894 6.89366L13.5894 6.14366L15.0894 6.14366L15.0894 6.89366C15.0894 9.40524 17.332 11.8037 19.9994 11.8037L20.7494 11.8037L20.7494 13.3037L19.9994 13.3037Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
        <div className="article max-w-6xl flex justify-center mx-auto flex-wrap gap-6 pb-20">
          <div className="card-art bg-white rounded-2xl pb-8 gap-6 flex flex-col overflow-hidden">
            <div className="card-img bg-card-bg-1 bg-cover"></div>
            <div className="card-content flex px-6 flex-col gap-4">
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
                <a href="/article" className="link-txt flex items-start gap-1">
                  <span className="text-base">Baca Selengkapnya</span>
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
          <div className="card-art bg-white rounded-2xl pb-8 gap-6 flex flex-col overflow-hidden">
            <div className="card-img bg-card-bg-2 bg-cover"></div>
            <div className="card-content flex px-6 flex-col gap-4">
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
                <a href="/article" className="link-txt flex items-start gap-1">
                  <span className="text-base">Baca Selengkapnya</span>
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
          <div className="card-art bg-white rounded-2xl pb-8 gap-6 flex flex-col overflow-hidden">
            <div className="card-img bg-card-bg-3 bg-cover"></div>
            <div className="card-content flex px-6 flex-col gap-4">
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
                <a href="/article" className="link-txt flex items-start gap-1">
                  <span className="text-base">Baca Selengkapnya</span>
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
      </div>
    </>
  );
}

export default HomeArticle;
