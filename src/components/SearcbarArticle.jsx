import React from "react";
import "./SearchbarArticle.css";
import SearchIcon from "/images/mascot-icons/search.png";

function SearchbarArticle() {
  return (
    <form className="search-bar w-full flex justify-between bg-white rounded-lg">
      <input
        type="text"
        name="article"
        id="article-search"
        autoFocus="true"
        placeholder="Masukkan nama article"
        className="w-full"
      />
      <button className="bg-primary-1 hover:bg-primary-2 flex justify-center items-center gap-2 rounded-lg px-5 py-4">
        <p className=" text-base text-white font-bold">Search</p>
        <img className="w-5" src={SearchIcon} alt="" />
      </button>
    </form>
  );
}

export default SearchbarArticle;
