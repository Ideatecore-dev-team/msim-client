import React from "react";
import ArticleHero from "../components/ArticleHero";
import ArticleList from "../components/ArticleList";

function Article() {
  return (
    <>
      <div className="home">
        <ArticleHero />
        <ArticleList />
      </div>
    </>
  );
}

export default Article;
