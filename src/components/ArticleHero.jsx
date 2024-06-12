import React, { useState } from "react";
import mascot1 from "/images/mascot-icons/pose=11.png";
import SearchbarArticle from "./SearcbarArticle";
import FilterIcon from "/images/mascot-icons/Filter.png";
import ArrowUp from "/images/mascot-icons/Arrow - Right 3.png";
import "./ArticleHero.css";

function ArticleHero({ onSearch }) {
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
      <div className="hero bg-orange-bg bg-cover bg-center flex flex-col py-24 items-center self-stretch">
        <div className="article-hero-container flex flex-col items-center justify-end w-nav gap-3 flex-wrap relative">
          <div className="article-mascot flex items-start justify-center size-52">
            <img className="size-52" src={mascot1} alt="" />
          </div>
          <div className="filter-container absolute flex pl-6 flex-col items-end gap-6">
            <button
              onClick={filterActive}
              className="filter-button border-2 border-black rounded-xl  bg-gray-200 hover:bg-gray-300"
            >
              <img className="size-6" src={FilterIcon} alt="" />
            </button>
            <div
              id="filter"
              className="filter-pop bg-white scale-y-0 origin-top duration-500 absolute rounded-xl border-2 border-black"
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
          <div className="article-find flex flex-col items-center gap-4">
            <h1 className="headline-1 text-black">Cari Article</h1>
            <p className="paragraph text-neutral-2">
              Cari article menarik untukmu!
            </p>
            <SearchbarArticle onSearch={onSearch} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleHero;
