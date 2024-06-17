/* eslint-disable react/prop-types */
import React from "react";
import ArrowOrange from "../../public/images/mascot-icons/arrow-orange.png";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./ArticleList.css";

function ArticleList({ searchTerm, articles, sortOrder, selectedCategories }) {
  const filterAndSortArticles = () => {
    let filteredArticles = articles;

    // Filter berdasarkan kategori
    if (selectedCategories) {
      filteredArticles = filteredArticles.filter(
        (article) => article.category_name === selectedCategories.category_name
      );
    }

    // Filter berdasarkan kata kunci pencarian
    if (searchTerm) {
      filteredArticles = filteredArticles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Urutkan artikel berdasarkan sortOrder
    if (sortOrder) {
      filteredArticles.sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        if (sortOrder === "newest") {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      });
    }

    return filteredArticles;
  };

  const filteredArticles = filterAndSortArticles();

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
    <div className="article-list-section bg-background flex flex-col items-center self-stretch py-14 lg:pb-24 lg:pt-12">
      <div className="article-lists-container flex flex-col items-center gap-7 lg:gap-10">
        <h1 className=" headline-1">Article Terbaru</h1>
        <div className="article-list flex flex-col items-start gap-4 lg:gap-6 ">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="article-card flex flex-col lg:flex-row bg-white rounded-2xl pb-8 lg:pr-6 lg:pb-0 gap-4 lg:gap-6 overflow-hidden"
            >
              <div
                className="article-list-img bg-cover lg:rounded-2xl lg:h-full"
                style={{ backgroundImage: `url(${article.image_heading})` }}
              ></div>
              <div className=" article-content w-full lg:w-3/4 flex flex-col py-0 px-6 lg:py-6 lg:px-0 items-start gap-4">
                <h4 className=" headline-4">{article.title}</h4>
                <div className="article-desc">
                  <p className=" paragraph ">
                    {parse(extractAndLimitContent(article.content, 120))}
                  </p>
                </div>
                <div className=" article-cta flex flex-col lg:flex-row items-center mx-auto gap-2 lg:gap-4 w-full">
                  <p
                    style={{ backgroundColor: `${article.category_color}` }}
                    className={`px-3 py-1 text-white w-28 text-center rounded-full`}
                  >
                    {article.category_name}
                  </p>
                  <Link
                    to={`/article/${article.id}`}
                    className="paragraph underline text-primary-1 flex flex-row items-center justify-center"
                  >
                    Baca Selengkapnya
                    <img
                      className="size-4 lg:size-6 "
                      src={ArrowOrange}
                      alt=""
                    />
                  </Link>
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
