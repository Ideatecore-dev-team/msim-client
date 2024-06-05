import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { Link, useParams } from "react-router-dom";
import CmsNavCard from "./CmsNavCard";
import Arrow from "../../public/images/mascot-icons/Arrow-down.png";
import File from "../../public/images/mascot-icons/Image 3.png";
import Plus from "../../public/images/mascot-icons/Plus-0.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Del from "../../public/images/mascot-icons/Delete-0.png";
import Mascot from "../../public/images/mascot-icons/pose=2.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import Xbutton from "../../public/images/mascot-icons/Fill 300.png";
import Ceklist from "../../public/images/mascot-icons/Tick Square.png";
import Coution from "../../public/images/mascot-icons/Info Square.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
import Mascot2 from "../../public/images/mascot-icons/pose=1.png";
import Chain from "../../public/images/mascot-icons/Link.png";
import Close from "../../public/images/mascot-icons/Close Square.png";
import ReactQuill from "react-quill";
import skyshareApi from "../utilities/skyshareApi";
// import "react-quill/dist/quill.snow.css";

const imageHandler = function () {
  console.log("okeee");
  const url = prompt("Enter the image URL");
  if (url) {
    const range = this.quill.getSelection();
    this.quill.insertEmbed(range.index, "image", url);
  }
};

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: ["serif", "monospace", "fantasy", "sans-serif"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      // color
    ],
    handlers: {
      image: imageHandler,
    },
  },
};

function CmsArticleEditForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownAddOpen, setIsDropdownAddOpen] = useState(false);
  const [colorInputValet, setColorInputValet] = useState("#FFFFFF");
  const [colorInputHexa, setColorInputHexa] = useState("#FFFFFF");
  const [ishidenCategori, setIsHidenCategory] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [articleById, setArticleById] = useState({});
  const [value, setValue] = useState("");
  const quillRef = useRef(null);
  const [imageHeading, setImageHeading] = useState(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const { id } = useParams();

  // const handleEditDataArticle = async function (inputData) {
  //   try {
  //     const responseFromServer = await skyshareApi({
  //       url: `/article/${id}`,
  //       method: "put",
  //       data: inputData,
  //     });
  //     console.log(responseFromServer.data.data, "response");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const getDataArticle = async function () {
      try {
        const getDataFromServer = await skyshareApi.get(`/article/${id}`);
        const article = getDataFromServer.data.data;
        setArticleById(article);
        setValue(article.content || "");
        setTitle(article.title || "");
        setImageHeading(article.image_heading || "");
        setLink(article.link || "");
        setCategoryId(article.category_id || "");
      } catch (error) {
        console.log(error);
      }
    };
    getDataArticle();
  }, [id]);
  console.log(articleById, "==> article");

  const handleInputArticle = function () {
    const inputData = {
      image_heading: imageHeading,
      title: title,
      content: value,
      link: link,
      category_id: categoryId,
    };
    console.log(value, "value");
    console.log(inputData, "==> input data");
    // handleEditDataArticle(inputData);
  };
  useEffect(() => {
    setColorInputHexa(colorInputValet);
  }, [colorInputValet]);

  useEffect(() => {
    setColorInputValet(colorInputHexa);
  }, [colorInputHexa]);

  const handleHideCategory = () => {
    setIsHidenCategory(!ishidenCategori);
    if (ishidenCategori) setIsHidenCategory(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownAddOpen) setIsDropdownAddOpen(false);
  };

  const handleDropDownAddOpen = () => {
    setIsDropdownAddOpen(!isDropdownAddOpen);
    if (!isDropdownAddOpen) setIsDropdownOpen(true);
  };

  const handleSave = (e) => {
    handleInputArticle();
    e.preventDefault();
    setIsSaveModalOpen(true);
  };

  const handleCancel = () => {
    setIsCancelModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    setIsModalOpen(true);
  };

  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  const handleCategoryValue = () => {
    setCategoryId(articleById.category_id);
  };

  const handleDeleteCategory = () => {
    setIsModalOpen(true);
    setDeleteMessage("Yakin untuk menghapus category?");
    console.log(deleteMessage);
  };

  return (
    <>
      <div className="bg-background flex flex-col pt-12 items-center self-stretch">
        <div className="content-1 flex gap-4">
          <div>
            <CmsNavCard />
          </div>
          <div className="w-full">
            <div>
              <h1 className="headline-1">Edit Article</h1>
              <p className="paragraph">Masukkan data pada field yang tertera</p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className="alur-acara">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className="font-bold text-base">
                    Upload gambar heading{" "}
                    <span className="text-base font-bold text-orange-300">
                      *
                    </span>
                  </h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 flex justify-center items-center mb-4 border-gray-400 rounded-xl h-16">
                    <div className="flex justify-between px-4 w-full">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <img className="w-7" src={File} alt="" />
                          <p className="paragraph">Mentorship.png</p>
                        </div>
                        <input
                          value={articleById.image_heading}
                          onChange={(e) => setImageHeading(e.target.files[0])}
                          className="w-10 opacity-0 absolute"
                          type="file"
                        />
                      </div>
                      <div className="w-10 flex items-center justify-center rounded-md py-2">
                        <button
                          onClick={() => {
                            setIsModalOpen(true);
                            setDeleteMessage(
                              "Yakin untuk menghapus image heading?"
                            );
                          }}
                          className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg flex justify-center items-center"
                        >
                          <img className="w-5" src={Delete} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className="text-base">
                      Minimal Ukuran{" "}
                      <span className="font-bold">(956 x 350px)</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="join-button">
                <div className="bg-neutral-white py-4 gap-4 flex items-center">
                  <form className="w-full" onSubmit={handleSave}>
                    <label className="block font-bold mb-1" htmlFor="title">
                      Judul <span className="text-orange-400">*</span>
                    </label>
                    <input
                      id="title"
                      name="title"
                      onChange={(e) => setTitle(e.target.value)}
                      value={articleById.title}
                      placeholder="Bagaimana Mentorship Membakar Inovasi"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        Penulis <span className="text-orange-400">*</span>
                      </div>
                    </label>
                    <input
                      defaultValue={articleById.admin_name}
                      placeholder="Muhammad Nusa A."
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        Kategori <span className="text-orange-400">*</span>
                      </div>
                    </label>
                    <div
                      className={`w-full px-4 duration-500 origin-top ${
                        isDropdownAddOpen
                          ? "h-64"
                          : isDropdownOpen
                          ? "h-40"
                          : "h-14"
                      } border-gray-300 border-2 rounded-lg outline-none`}
                    >
                      <div className="mt-3.5 flex justify-between">
                        <div className="flex items-center justify-center">
                          <p className="text-gray-400">--Pilih kategory--</p>
                        </div>
                        <div className="flex">
                          <button type="button" onClick={handleDropdownToggle}>
                            <img
                              className={`w-6 duration-500 ${
                                isDropdownOpen ? "rotate-180" : "rotate-0"
                              }`}
                              src={Arrow}
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className={`mt-2 gap-4 flex-wrap bg-neutral-white absolute w-6/12 ${
                          isDropdownOpen && ishidenCategori ? "flex" : "hidden"
                        }`}
                      >
                        <button
                          onClick={handleDeleteCategory}
                          // value={articleById.category_id}
                          type="button"
                          className={`px-3 flex items-center gap-2 py-1 hover:bg-${articleById?.category_color}-200 bg-${articleById?.category_color}-300 text-white font-bold rounded-full`}
                        >
                          {articleById.category_name}
                          <img className=" w-6" src={Close} alt="" />
                        </button>
                        <button
                          onClick={handleDeleteCategory}
                          type="button"
                          className="px-3 py-1 flex items-center gap-2  bg-red-300 text-white font-bold rounded-full"
                        >
                          Education
                          <img className=" w-6" src={Close} alt="" />
                        </button>
                        <button
                          onClick={handleDeleteCategory}
                          type="button"
                          className="px-3 py-1 flex items-center gap-2 bg-red-300 text-white font-bold rounded-full"
                        >
                          Career
                          <img className=" w-6" src={Close} alt="" />
                        </button>
                      </div>
                      <div
                        className={`mt-2 gap-4 flex-wrap ${
                          !isDropdownOpen ? "hidden" : "flex"
                        }`}
                      >
                        <button
                          onClick={handleCategoryValue}
                          type="button"
                          className={`px-3 py-1 bg-${articleById.category_color}-300 hover:bg-${articleById.category_color}-200 text-white font-bold rounded-full`}
                        >
                          {articleById.category_name}
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1 bg-red-300 text-white font-bold rounded-full"
                        >
                          Education
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1 bg-red-300 text-white font-bold rounded-full"
                        >
                          Career
                        </button>
                      </div>
                      <div
                        className={`${
                          !isDropdownOpen
                            ? "opacity-0"
                            : "opacity-1 duration-1000"
                        } mt-8 justify-between flex`}
                      >
                        <button
                          type="button"
                          onClick={handleDropDownAddOpen}
                          className="flex px-2 py-1 rounded-full bg-neutral-white shadow shadow-slate-400 gap-1 items-center"
                        >
                          <img className="w-5" src={Plus} alt="" />
                          <p className="text-slate-700">Tambah Kategori</p>
                        </button>
                        <button
                          onClick={handleHideCategory}
                          type="button"
                          className="flex px-2 py-1 rounded-full bg-neutral-white shadow shadow-slate-400 gap-1 items-center"
                        >
                          <img className="w-5" src={Del} alt="" />
                          <p className="text-slate-700">Hapus Kategori</p>
                        </button>
                      </div>
                      {isDropdownAddOpen && (
                        <div className="mt-4 duration-1000 bg-background py-2 gap-3 flex px-3 rounded-2xl">
                          <div className="block w-2/4">
                            <label
                              className="block font-bold mb-1"
                              htmlFor="cta"
                            >
                              Kategori Baru{" "}
                              <span className="text-orange-400">*</span>
                            </label>
                            <input
                              placeholder="Masukkan nama kategori"
                              type="text"
                              className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                              required
                            />
                          </div>
                          <div className="block w-80">
                            <label
                              className="block font-bold mb-1"
                              htmlFor="cta"
                            >
                              Warna(Hex Code){" "}
                              <span className="text-orange-400">*</span>
                            </label>
                            <div className="w-full h-11 bg-neutral-white px-4 py-2 border-gray-300 border-2 rounded-lg outline-none flex gap-2">
                              <input
                                value={colorInputValet}
                                onChange={(e) =>
                                  setColorInputValet(e.target.value)
                                }
                                className="w-6 h-6 inline-block rounded-full p-0 cursor-pointer"
                                type="color"
                              />
                              <input
                                value={colorInputHexa}
                                onChange={(e) =>
                                  setColorInputHexa(e.target.value)
                                }
                                placeholder="#FFFFFF"
                                className=" outline-none"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className=" flex justify-center items-center w-10">
                            <div className="bg-primary-1 flex mt-7 items-center rounded-md px-2 py-2">
                              <Link
                                to=""
                                className="bg-primary-1 hover:bg-primary-2"
                              >
                                <img className=" w-6" src={Add} alt="" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className=" mt-4">
                      <label className="block font-bold mb-1" htmlFor="cta">
                        Berikan Isi <span className="text-orange-400">*</span>
                      </label>
                    </div>
                  </form>
                </div>

                <div>
                  <ReactQuill
                    style={{
                      border: "2px solid #e6e6e6",
                      borderRadius: "10px",
                    }}
                    defaultValue={articleById.content}
                    ref={quillRef}
                    value={value}
                    onChange={setValue}
                    modules={modules}
                    placeholder="Tulis Article di sini"
                  />
                </div>
                <div className=" mt-4">
                  <label className=" font-bold mb-1 flex gap-2" htmlFor="cta">
                    <img className=" w-6" src={Chain} alt="" />
                    Link <span className="text-orange-400">(Opsional) *</span>
                  </label>
                  <input
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://belajarmentorship.co.id/pembelajaran"
                    type="text"
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    defaultValue={articleById.link}
                  />
                </div>
                <div className="mt-4 flex gap-5 justify-end">
                  <div className="w-56 py-2 flex">
                    <button
                      onClick={handleCancel}
                      type="button"
                      className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-200 text-black font-bold"
                    >
                      Batal
                    </button>
                  </div>
                  <div className="w-56 py-2 flex">
                    <button
                      onClick={handleSave}
                      type="submit"
                      className="bg-primary-1 w-full py-2 rounded-md hover:bg-primary-2 text-white font-bold"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
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
              {deleteMessage}
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

      {isSaveModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-6 relative">
            <button onClick={closeSaveModal} className="absolute top-6 right-6">
              <img className="w-5" src={Xbutton} alt="" />
            </button>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot1} alt="" />
            </div>
            <div className="flex gap-1 mt-5 items-center">
              <img className="w-6 h-6" src={Ceklist} alt="" />
              <h3 className="headline-3 ">Saved Successfully</h3>
            </div>
          </div>
        </div>
      )}

      {isCancelModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-6 relative">
            <button
              onClick={closeCancelModal}
              className="absolute top-6 right-6"
            >
              <img className="w-5" src={Xbutton} alt="" />
            </button>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot2} alt="" />
            </div>
            <div className="flex gap-1 mt-5 items-center">
              <img className="w-6 h-6" src={Coution} alt="" />
              <h3 className="headline-3 ">Progress is not saved</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CmsArticleEditForm;
