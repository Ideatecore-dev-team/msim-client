import React, { useEffect, useState } from "react";
import ArticleHero from "../components/ArticleHero";
import ArticleList from "../components/ArticleList";
import axios from "axios";

function Article() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const getAllArticle = async function () {
      try {
        const response = await axios.get("https://api.julio.my.id/article");
        setArticle(response.data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllArticle();
  }, []);

  return (
    <>
      <div className="home">
        <ArticleHero />
        <ArticleList articles={article} />
      </div>
    </>
  );
}

export default Article;
