import React from "react";
import mascot1 from "../../public/images/mascot-icons/pose=11.png";
import SearchbarArticle from "./SearcbarArticle";
import FilterIcon from "../../public/images/mascot-icons/Filter.png";
import ArrowUp from "../../public/images/mascot-icons/Arrow - Right 3.png";

function ArticleHero() {
  const filterActive = function () {
    const filter = document.querySelector("#filter");
    filter.classList.toggle("scale-y-0");
    filter.classList.toggle("scale-y-100");
  };

  const categoryDrop = function () {
    const category = document.querySelector("#category");
    category.classList.toggle("hidden");
    category.classList.toggle("active");
  };

  return (
    <>
      <div className="hero bg-orange-bg bg-cover bg-center flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
        <div className=" w-auto absolute mt-14 ml-96">
          <button
            onClick={filterActive}
            className="ml-96 px-4 py-4 border-2 border-black rounded-xl  bg-gray-200 hover:bg-gray-300"
          >
            <img className=" w-6" src={FilterIcon} alt="" />
          </button>
          <div
            id="filter"
            className="bg-white scale-y-0 origin-top duration-500 absolute w-full -mt-16 rounded-xl border-2 border-black"
          >
            <div className=" w-full flex justify-between">
              <div className="ml-8 mt-5 ">
                <h4 className="headline-4">Kategori</h4>
              </div>
              <div
                onClick={filterActive}
                className=" bg-blue-950 mr-5 mt-5 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer"
              >
                <h2 className=" text-xl text-white -mt-1">x</h2>
              </div>
            </div>
            <div className=" flex justify-center mt-5">
              <input
                onMouseEnter={categoryDrop}
                className=" input w-full mx-8 outline-none px-4 border-b-2 py-2 border-gray-300"
                type="text"
                placeholder="Pilih Kategori"
              />
              <div className="arrow rotate-90 absolute ml-80">
                <img className="w-8 " src={ArrowUp} alt="" />
              </div>
            </div>
            <div id="category" className=" durasi hidden mt-5">
              <div className=" mx-8 flex flex-wrap gap-2">
                <p className=" text-white px-4 py-1  rounded-full bg-red-300">
                  Mentorship
                </p>
                <p className=" text-white px-4 py-1 rounded-full bg-sky-300">
                  Pelajar
                </p>
                <p className=" text-white px-4 py-1 rounded-full bg-green-400">
                  Islamic mentoring
                </p>
                <p className=" text-white px-4 py-1 rounded-full bg-violet-300">
                  Random
                </p>
                <p className=" text-white px-4 py-1 rounded-full bg-pink-400">
                  Lomba
                </p>
                <p className=" text-white px-4 py-1 rounded-full bg-orange-300">
                  Penting
                </p>
              </div>
            </div>
            <div className="flex mt-5 justify-start">
              <h4 className="headline-4 ml-8">Filter</h4>
            </div>
            <div className="flex mt-3 pb-5">
              <button>
                <p className=" paragraph ml-8 px-4 py-1 rounded-full border-black border-2">
                  Terbaru
                </p>
              </button>
              <button>
                <p className=" paragraph ml-8 px-4 py-1 rounded-full border-black border-2">
                  Terlama
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="content text-white">
          <div className="w-full mt-32 flex justify-center items-end">
            <img className=" w-52" src={mascot1} alt="" />
          </div>
          <div className="w-full flex mt-10 justify-center">
            <h1 className=" text-black font-bold text-5xl">Cari Article</h1>
          </div>
          <div className="w-full flex items-center mt-5  justify-center">
            <p className="paragraph text-slate-600">
              Cari article menarik untukmu!
            </p>
          </div>
          <SearchbarArticle />
        </div>
      </div>
    </>
  );
}

export default ArticleHero;
