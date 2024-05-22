import React from "react";
import "./SearchbarArticle.css";
import SearchIcon from "../../public/images/mascot-icons/search.png";

function SearchbarArticle() {
  return (
    <div className="w-full flex justify-center bg-white border-2 rounded-xl border-l-2 border-black">
      <input
        className="w-full py-4 rounded-l-xl text-black px-4"
        type="text"
        name="article"
        id="article-search"
        autoFocus="true"
        placeholder="Search Article"
      />
      <button className=" bg-primary-1 w-4 hover:bg-primary-2 flex justify-center items-center gap-2 rounded-xl">
        <p className="paragraph text-white">Search</p>
        <img className="w-5" src={SearchIcon} alt="" />
      </button>
    </div>
  );
}

export default SearchbarArticle;
