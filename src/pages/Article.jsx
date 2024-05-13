import React, { useEffect } from "react";
import ArticleHero from "../components/ArticleHero";
import ArticleList from "../components/ArticleList";

function Article() {
  useEffect(() => {});

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
