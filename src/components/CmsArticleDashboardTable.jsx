import React, { useEffect, useState } from "react";
import skyshareApi from "../utilities/skyshareApi";
import { Link, useNavigate } from "react-router-dom";
import Mascot from "../../public/images/mascot-icons/pose=2.png";
import Edit1 from "../../public/images/mascot-icons/Edit Square.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import CmsNavCard from "./CmsNavCard";
import Edit from "../../public/images/mascot-icons/Edit.png";

function CmsArticleDashboardTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataArticles, setDataarticles] = useState([]);
  const [deleteArticle, setDeleteArticle] = useState(null);

  useEffect(() => {
    const getDataArticles = async function () {
      try {
        const responseFromServer = await skyshareApi.get("/article");
        setDataarticles(responseFromServer.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataArticles();
  }, []);

  console.log(dataArticles);

  function closeModal() {
    setIsModalOpen(false);
    setSelectedUser(null);
  }

  function deletArticle(article) {
    setDeleteArticle(article);
    setIsModalOpen(true);
  }

  async function confirmDelete() {
    if (!deleteArticle) return;
    try {
      await skyshareApi.delete(`/article/${deleteArticle.id}`);
      setDataarticles(
        dataArticles.filter((article) => article.id !== deleteArticle.id)
      );
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-background flex flex-col pb-44 pt-12 items-center self-stretch h-auto">
        <div className="content-1 flex gap-4 ">
          <div className="">
            <CmsNavCard />
          </div>
          <div className=" w-full">
            <div className=" ">
              <h1 className="headline-1">Article</h1>
              <p className="paragraph">
                Kelola artikel untuk website MSiM disini.
              </p>
            </div>
            <div className=" shadow-md mt-10 border-2 border-black rounded-xl px-3 bg-neutral-white w-full">
              <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                <div className="flex items-center gap-5 ">
                  <img className=" w-10" src={Edit} alt="" />
                  <h4 className="headline-4">Daftar Article</h4>
                </div>
                <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                  <Link
                    to="/cms/article/add"
                    className="bg-primary-1 hover:bg-primary-2"
                  >
                    <img className=" w-6" src={Add} alt="" />
                  </Link>
                </div>
              </div>
              <div className="mt-5 ml-2">
                <table>
                  <thead>
                    <tr>
                      <th className=" pr-8 pl-2 py-3">No.</th>
                      <th className="pr-16 py-3">Tanggal</th>
                      <th className="px-16 py-3">Title</th>
                      <th className="px-16 py-3">Category</th>
                      <th className="px-16 py-3">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataArticles.map((article, index) => {
                      return (
                        <tr key={article.id}>
                          <td className="pl-3 py-4 text-left font-semibold">
                            {index + 1}
                          </td>
                          <td className="pl-1 py-4 text-left">
                            {new Date(article.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-16 py-4 text-left">
                            {article.title.substring(0, 15)}
                          </td>
                          <td className="px-16 py-4 text-left">
                            <p
                              className={`px-3 pb-1 text-white rounded-full bg-${article?.category_color}-300`}
                            >
                              {article.category_name}
                            </p>
                          </td>
                          <td className="px-16 py-4 text-left flex gap-4">
                            <div className="w-10 flex items-center justify-center rounded-md py-2">
                              <Link
                                to={`/cms/article/edit/${article.id}`}
                                className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center"
                              >
                                <img className="w-5" src={Edit1} alt="" />
                              </Link>
                            </div>
                            <div className="w-10 flex items-center justify-center rounded-md py-2">
                              <button
                                onClick={() => deletArticle(article)}
                                className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg flex justify-center items-center"
                              >
                                <img className="w-5" src={Delete} alt="" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-2/5 h-80 rounded-3xl p-6">
            <div className="flex justify-center">
              <img className=" w-40" src={Mascot} alt="" />
            </div>
            <h3 className="mb-5 mt-5 headline-3 text-center">
              Yakin untuk menghapus Admin?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 w-1/2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 w-1/2 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CmsArticleDashboardTable;
