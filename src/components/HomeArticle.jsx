import React from "react";
// import Button from "./Button";

function HomeArticle() {
  return (
    <>
      <div className="home-art">
        <h1 className="text-center pt-20 font-bold text-4xl w-full pb-20">
          🗞️ Artikel Terbaru
        </h1>
        <div className="article flex justify-center  mx-auto flex-wrap gap-10 pb-20">
          <div className="card-art rounded-2xl pb-16 gap-6 flex flex-col overflow-hidden">
            <div className="card-img"></div>
            <div className="card-content flex py-6 flex-col gap-4 px-6">
              <p className=" font-bold text-base ">
                Bagaimana Mentorship Membakar Inovasi
              </p>
              <p className=" font-normal text-base">
                Dalam lanskap kreativitas dan inovasi, mentorship adalah kunci
                untuk membuka potensi tersembunyi. Lebih dari sekadar...
              </p>
              <p className="text-base font-medium">Baca Selengkapnya</p>
            </div>
          </div>
          <div className="card-art rounded-2xl pb-16 gap-6 flex flex-col overflow-hidden">
            <div className="card-img"></div>
            <div className="card-content flex py-6 flex-col gap-4 px-6">
              <p className=" font-bold text-base ">
                Bagaimana Mentorship Membakar Inovasi
              </p>
              <p className=" font-normal text-base">
                Dalam lanskap kreativitas dan inovasi, mentorship adalah kunci
                untuk membuka potensi tersembunyi. Lebih dari sekadar...
              </p>
              <p className="text-base font-medium">Baca Selengkapnya</p>
            </div>
          </div>
          <div className="card-art rounded-2xl pb-16 gap-6 flex flex-col overflow-hidden">
            <div className="card-img"></div>
            <div className="card-content flex py-6 flex-col gap-4 px-6">
              <p className=" font-bold text-base ">
                Bagaimana Mentorship Membakar Inovasi
              </p>
              <p className=" font-normal text-base">
                Dalam lanskap kreativitas dan inovasi, mentorship adalah kunci
                untuk membuka potensi tersembunyi. Lebih dari sekadar...
              </p>
              <p className="text-base font-medium">Baca Selengkapnya</p>
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
