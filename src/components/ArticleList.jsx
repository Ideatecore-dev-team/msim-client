import React from "react";
import image1 from "../../public/images/cardbg1.jpeg";
import ArrowOrange from "../../public/images/mascot-icons/arrow-orange.png";
import { Link } from "react-router-dom";

function ArticleList() {
  return (
    <>
      <div className="hero bg-background flex flex-col items-center self-stretch h-auto">
        <div className="content h-auto">
          <div className="flex justify-center mt-10">
            <h1 className=" headline-1">Article Terbaru</h1>
          </div>
          <div className="flex bg-white mb-5 rounded-xl mt-10 border-2 border-black shadow-lg shadow-zinc-400">
            <img className=" rounded-xl w-64" src={image1} alt="" />
            <div className=" w-full">
              <h4 className=" headline-4 ml-5 mt-5">
                Bagaimana Mentorship Membakar Inovasi
              </h4>
              <p className=" ml-5 mt-5 paragraph">
                Dalam lanskap kreativitas dan inovasi, mentorship adalah kunci
                untuk membuka potensi tersembunyi. Lebih dari sekadar memberikan
                bimbingan, mentorship menghidupkan nyala...
              </p>
              <div className=" w-full flex gap-2">
                <p className="ml-5 mt-3 px-2 py-1 text-white bg-red-300 w-28 text-center rounded-full">
                  Mentorship
                </p>
                <a
                  href="#"
                  className="paragraph ml-3 underline text-primary-1 mt-4"
                >
                  Baca Selengkapnya
                </a>
                <img className=" w-10 mt-2" src={ArrowOrange} alt="" />
              </div>
            </div>
          </div>
          <div className="flex bg-white mb-5 rounded-xl mt-10 border-2 border-black shadow-lg shadow-zinc-400">
            <img className=" rounded-xl w-64" src={image1} alt="" />
            <div className=" w-full">
              <h4 className=" headline-4 ml-5 mt-5">
                Bagaimana Mentorship Membakar Inovasi
              </h4>
              <p className=" ml-5 mt-5 paragraph">
                Dalam lanskap kreativitas dan inovasi, mentorship adalah kunci
                untuk membuka potensi tersembunyi. Lebih dari sekadar memberikan
                bimbingan, mentorship menghidupkan nyala...
              </p>
              <div className=" w-full flex gap-2">
                <p className="ml-5 mt-3 px-2 py-1 text-white bg-red-300 w-28 text-center rounded-full">
                  Mentorship
                </p>
                <Link
                  to="/article/openned"
                  className="paragraph ml-3 underline text-primary-1 mt-4"
                >
                  Baca Selengkapnya
                </Link>
                <img className=" w-10 mt-2" src={ArrowOrange} alt="" />
              </div>
            </div>
          </div>
          <div className="flex bg-white mb-5 rounded-xl mt-10 border-2 border-black shadow-lg shadow-zinc-400">
            <img className=" rounded-xl w-64" src={image1} alt="" />
            <div className=" w-full">
              <h4 className=" headline-4 ml-5 mt-5">
                Bagaimana Mentorship Membakar Inovasi
              </h4>
              <p className=" ml-5 mt-5 paragraph">
                Dalam lanskap kreativitas dan inovasi, mentorship adalah kunci
                untuk membuka potensi tersembunyi. Lebih dari sekadar memberikan
                bimbingan, mentorship menghidupkan nyala...
              </p>
              <div className=" w-full flex gap-2">
                <p className="ml-5 mt-3 px-2 py-1 text-white bg-red-300 w-28 text-center rounded-full">
                  Mentorship
                </p>
                <a
                  href="#"
                  className="paragraph ml-3 underline text-primary-1 mt-4"
                >
                  Baca Selengkapnya
                </a>
                <img className=" w-10 mt-2" src={ArrowOrange} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleList;
