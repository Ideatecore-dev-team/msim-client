import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./HomeArticle.css";
import Button from "./Button";

function HomeArticle() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAllArticle = async function () {
      try {
        const response = await axios.get("http://localhost:80/api/article");
        setArticles(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllArticle();
  }, []);
  const sortArticles = [...articles].sort((a, b) => b.id - a.id);
  return (
    <>
      <div className="home-art ">
        <div className="art-header pb-12 pt-20 flex max-w-6xl mx-auto content-center items-center">
          <div className="blankspace"></div>
          <h2 className="text-center font-bold text-3xl">🗞️ Artikel Terbaru</h2>
          <Button onClick={() => console.log("Button clicked")} className="">
            View More
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" inline ml-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.749 13.3037L3.24926 13.3037L3.24926 11.8037L20.749 11.8037L20.749 13.3037Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 11.8037C16.4718 11.8037 13.5894 14.9059 13.5894 18.2138L13.5894 18.9638L15.0894 18.9638L15.0894 18.2138C15.0894 15.7022 17.332 13.3037 19.9994 13.3037L20.7494 13.3037L20.7494 11.8037L19.9994 11.8037Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 13.3037C16.4718 13.3037 13.5894 10.2016 13.5894 6.89366L13.5894 6.14366L15.0894 6.14366L15.0894 6.89366C15.0894 9.40524 17.332 11.8037 19.9994 11.8037L20.7494 11.8037L20.7494 13.3037L19.9994 13.3037Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
        <div className="article max-w-6xl flex justify-center mx-auto flex-wrap gap-6 pb-20">
          {sortArticles.slice(0, 3).map((article) => {
            return (
              <div
                key={article.id}
                className="card-art bg-white rounded-2xl pb-8 gap-6 flex flex-col overflow-hidden"
              >
                <div className="w-full">
                  <img src={article.image} alt="" />
                </div>
                <div className="card-content flex px-6 flex-col gap-4">
                  <p className="font-bold text-base">{article.title}</p>
                  <p className="font-normal text-base">
                    {article.content.substring(0, 100) +
                      (article.content.length > 100 ? "..." : "")}
                  </p>
                  <div className="card-cta flex gap-4 items-center">
                    <div className="text-white category flex px-4 py-1 content-center items-center gap-3 rounded-3xl">
                      <p className="font-normal text-xs">{article.category}</p>
                    </div>
                    <a href="#" className="link-txt flex items-start gap-1">
                      <span className="text-base">Baca Selengkapnya</span>
                      <svg
                        className="size-6"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Your SVG code */}
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomeArticle;