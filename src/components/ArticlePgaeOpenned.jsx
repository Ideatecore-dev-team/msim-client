import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import skyshareApi from "../utilities/skyshareApi";
import Image1 from "../../public/images/Rectangle 33.png";
import Image2 from "../../public/images/Rectangle 34.png";
import Image3 from "../../public/images/Rectangle 35.png";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";

function ArticlePageOpenned() {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getArticleById = async function () {
      try {
        const response = await skyshareApi.get(`article/${id}`);
        setArticle(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticleById();
  }, [id]);
  console.log(article, "==>");
  return (
    <>
      <div className="hero flex background border-t-2 border-black flex-col items-center self-stretch">
        <div className="content h-full pb-20 mt-10">
          <h1 className=" headline-1 text-center">{article.title}</h1>
          <div className="flex w-full mt-10 justify-between">
            <div className="">
              <p className="paragraph">Author:</p>
              <h4 className="headline-4">{article.admin_name}</h4>
            </div>
            <div className="">
              <p className="paragraph pl-10">Category:</p>
              <h4
                className={`text-white flex justify-center items-center font-bold px-2 py-1 rounded-full bg-${article.category_color}-300`}
              >
                {article.category_name}
              </h4>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          <div className="w-full flex justify-center mt-10">
            <a
              className="px-5 py-4 items-center gap-2 bg-primary-1 flex hover:bg-primary-2 rounded-lg"
              href={`https://${article.link}`}
            >
              <p className="text-white font-semibold">Learn more</p>
              <img className="w-6 -rotate-90" src={ArrowLeft} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticlePageOpenned;
