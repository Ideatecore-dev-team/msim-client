import React from "react";
import mascot1 from "../../public/images/mascot-icons/pose=11.png";
import SearchbarArticle from "./SearcbarArticle";

function ArticleHero() {
  return (
    <>
      <div className="hero bg-orange-bg bg-cover bg-center flex flex-col pb-24 pt-24 items-center self-stretch h-auto">
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
