import React, { useState } from "react";
import ArticleHero from "../components/ArticleHero";
import ArticleList from "../components/ArticleList";

function Article() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="article-section">
      <ArticleHero onSearch={handleSearch} />
      <ArticleList searchTerm={searchTerm} />
    </div>
  );
}

export default Article;
