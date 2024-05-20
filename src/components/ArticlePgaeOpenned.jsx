import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
        const response = await axios.get(
          `https://api.skyshareacademy.com/article/${id}`
        );
        setArticle(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticleById();
  }, [id]);
  console.log(article);
  return (
    <>
      <div className="hero flex background border-t-2 border-black flex-col items-center self-stretch">
        <div className="content h-full pb-20 mt-10">
          <h1 className=" headline-1 text-center">{article.title}</h1>
          <div className="flex w-full mt-10 justify-between">
            <div className="">
              <p className="paragraph">Author:</p>
              <h4 className="headline-4">Muhammad Nusa A.</h4>
            </div>
            <div className="">
              <p className="paragraph pl-10">Category:</p>
              <h4 className="text-white flex justify-center items-center font-bold bg-red-300 px-2 py-1 rounded-full">
                {article.category}
              </h4>
            </div>
          </div>
          <h4 className="headline-4 mt-10 -ml-2">
            Menurut kalian apasih yang memberikan inovasi dalam mentoring?
          </h4>
          <div className="">
            <p>
              React Quill is a powerful and flexible WYSIWYG text editor for
              React applications. It provides a rich editing experience with
              support for text formatting, embedding media, and more. With React
              Quill, you can easily create and edit content in your web
              applications with ease.
            </p>

            <p>
              One of the key features of React Quill is its ability to handle
              image uploads seamlessly. Users can insert images directly into
              the editor, either by uploading from their device or providing a
              URL. This makes it easy to create visually appealing content
              without leaving the editor.
            </p>

            <p>
              In addition to images, React Quill also supports links, allowing
              users to add hyperlinks to their content. Whether it's linking to
              external websites, internal pages, or other resources, React Quill
              makes it simple to include clickable links in your documents.
            </p>

            <p>
              For example, here's a beautiful sunset image captured by a
              talented photographer:
              <br />
              <a href="https://unsplash.com/photos/SVQYnHrNnB0">
                <img
                  src="https://source.unsplash.com/SVQYnHrNnB0/800x600"
                  alt="Sunset Image"
                />
              </a>
            </p>
          </div>
          <div className="w-full flex justify-center mt-10">
            <a
              className="px-5 py-4 items-center gap-2 bg-primary-1 flex hover:bg-primary-2 rounded-lg"
              href="#"
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
