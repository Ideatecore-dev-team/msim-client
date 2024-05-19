import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./HomeArticle.css";
import { useNavigate } from "react-router-dom";

function HomeArticle() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getAllArticle = async function () {
      try {
        const response = await axios.get("https://api.julio.my.id/article");
        setArticles(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllArticle();
  }, []);
  const sortArticles = [...articles].sort((a, b) => b.id - a.id);
  const navigate = useNavigate();

  return (
    <>
      <div className=" home-art lg:py-20 xs:py-14 lg:px-0 xs:px-6">
        <div className="art-header lg:pb-12 xs:pb-7 flex max-w-6xl mx-auto justify-around items-center">
          <h2 className="text-right lg:w-1/2 lg:ml-20 font-bold lg:text-3xl xs:text-2xl">
            Artikel Terbaru
          </h2>
          <button
            onClick={() => navigate("/article")}
            className=" bg-primary-1 hover:bg-primary-2 px-4 py-3 rounded-lg lg:flex hidden"
          >
            <p className="text-white font-semibold">View More</p>
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
          </button>
        </div>
        <div className="article max-w-6xl flex justify-center mx-auto flex-wrap gap-6 pb-20">
          {sortArticles.slice(0, 3).map((article) => {
            return (
              <div
                key={article.id}
                className="card-art bg-white rounded-2xl lg:gap-6 xs:gap-4 flex flex-col overflow-hidden"
              >
                {/* <div className="card-img">
                  <img className=" h-56 w-full" src={article.image} alt="" />
                </div> */}
                {/* <div
                  className="card-img bg-contain"
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                ></div> */}
                <div
                  className="card-img bg-cover"
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                ></div>
                {/* <div
                  className="card-img bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                ></div> */}
                <div className="card-content flex px-6 flex-col gap-4">
                  <p className="font-bold text-base">{article.title}</p>
                  <p className="font-normal text-sm">
                    {article.content.substring(0, 100) +
                      (article.content.length > 100 ? "..." : "")}
                  </p>
                  <div className="card-cta flex lg:flex-row xs:flex-col gap-4 items-center">
                    <div className="text-white category flex px-4 py-1 content-center items-center gap-3 rounded-3xl">
                      <p className="font-normal lg:text-sm xs:text-xs">
                        {article.category}
                      </p>
                    </div>
                    <a href="#" className="link-txt flex items-start gap-1">
                      <span className="lg:text-base xs:text-sm">
                        Baca Selengkapnya
                      </span>
                      <svg
                        className=" lg:size-6 xs:size-5"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.8105 13.3506L3.31079 13.3506L3.31079 11.8506L20.8105 11.8506L20.8105 13.3506Z"
                          fill="#FEA02F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.0604 11.8506C16.5329 11.8506 13.6504 14.9527 13.6504 18.2606L13.6504 19.0106L15.1504 19.0106L15.1504 18.2606C15.1504 15.7491 17.3931 13.3506 20.0604 13.3506L20.8104 13.3506L20.8104 11.8506L20.0604 11.8506Z"
                          fill="#FEA02F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.0604 13.3506C16.5329 13.3506 13.6504 10.2484 13.6504 6.94054L13.6504 6.19054L15.1504 6.19054L15.1504 6.94054C15.1504 9.45212 17.3931 11.8506 20.0604 11.8506L20.8104 11.8506L20.8104 13.3506L20.0604 13.3506Z"
                          fill="#FEA02F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center w-full -mt-10">
          <button
            onClick={() => navigate("/article")}
            className=" bg-primary-1 hover:bg-primary-2 lg:px-4 lg:py-3 xs:px-3 xs:py-3 rounded-lg flex lg:hidden"
          >
            <p className="text-white lg:text-base xs:text-sm font-semibold">
              View More
            </p>
            <svg
              width="19"
              height="19"
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
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeArticle;
