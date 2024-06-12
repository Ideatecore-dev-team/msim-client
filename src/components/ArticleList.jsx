import React, { useEffect, useState } from "react";
import ArrowOrange from "../../public/images/mascot-icons/arrow-orange.png";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./ArticleList.css";
import skyshareApi from "../utilities/skyshareApi";

function ArticleList({ searchTerm }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getAllArticle = async function () {
      try {
        const response = await skyshareApi.get("/article");
        setArticles(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllArticle();
  }, []);

  const filterArticlesBySearch = () => {
    if (!searchTerm) return articles;
    return articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredArticles = filterArticlesBySearch();

  const extractAndLimitContent = (htmlContent, limit) => {
    // Replace <div> with <p>
    htmlContent = htmlContent
      .replace(/<div>/g, "<p>")
      .replace(/<\/div>/g, "</p>");

    const firstParagraphMatch = htmlContent.match(/<p>(.*?)<\/p>/s);
    if (!firstParagraphMatch) return "";
    let firstParagraph = firstParagraphMatch[1]; // Extract inner content of the first paragraph
    if (firstParagraph.length > limit) {
      firstParagraph = firstParagraph.substring(0, limit) + "...";
    }
    return `<p>${firstParagraph}</p>`; // Return as a paragraph
  };

  return (
    <div className="article-list-section bg-background flex flex-col items-center self-stretch pb-24 pt-12">
      <div className="article-lists-container flex flex-col items-center gap-10">
        <h1 className=" headline-1">Article Terbaru</h1>
        <div className="article-list flex flex-col items-start gap-6">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="article-card flex bg-white rounded-2xl pr-6 gap-6"
            >
              <div
                className="article-list-img bg-cover rounded-2xl h-full"
                style={{ backgroundImage: `url(${article.image_heading})` }}
              ></div>
              <div className=" article-content w-3/4 flex flex-col py-6 items-start gap-4">
                <h4 className=" headline-4">{article.title}</h4>
                <div className="article-desc">
                  <p className=" paragraph ">
                    {parse(extractAndLimitContent(article.content, 120))}
                  </p>
                </div>
                <div className=" article-cta flex items-center justify-center gap-4">
                  <p
                    className={`px-3 py-1 text-white bg-${article.category_color}-300 w-28 text-center rounded-full`}
                  >
                    {article.category_name}
                  </p>
                  <Link
                    to={`/article/${article.id}`}
                    className="paragraph underline text-primary-1"
                  >
                    Baca Selengkapnya
                  </Link>
                  <img className=" w-10" src={ArrowOrange} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleList;
