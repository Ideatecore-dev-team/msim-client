import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Hero.css";
import skyshareApi from "../utilities/skyshareApi";
import CmsNavCard from "./CmsNavCard";
import Arrow from "../../public/images/mascot-icons/Arrow - Down 3.png";
import File from "../../public/images/mascot-icons/Fill 337.png";
import Book from "../../public/images/mascot-icons/Document.png";
import Work from "../../public/images/mascot-icons/Work.png";
import Time from "../../public/images/mascot-icons/Time Circle.png";
import Edit1 from "../../public/images/mascot-icons/Edit Square.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Location from "../../public/images/mascot-icons/Location.png";
import Show from "../../public/images/mascot-icons/Show.png";
import Close from "../../public/images/mascot-icons/Close Square.png";
import Ceklist from "../../public/images/mascot-icons/Tick Square.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import Chain from "../../public/images/mascot-icons/Link.png";
import Xbutton from "../../public/images/mascot-icons/Fill 300.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
import Mascot2 from "../../public/images/mascot-icons/pose=1.png";
import Coution from "../../public/images/mascot-icons/Info Square.png";
import Mascot from "../../public/images/mascot-icons/pose=2.png";

function CmsTalentForm() {
  const [talentForm, setTalentForm] = useState({ school_ids: [] });
  const [schools, setSchools] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [deleteSchoolById, setDeleteSchoolById] = useState(null);
  console.log(talentForm, "==> form");

  const handleAddTalentAcademy = async function () {
    const formData = new FormData();
    formData.append("file_booklet", talentForm.file_booklet);
    formData.append("gambar_alur_acara", talentForm.gambar_alur_acara);
    formData.append("gambar_timeline", talentForm.gambar_timeline);
    formData.append("link_cta", talentForm.link_cta);
    formData.append("school_id", JSON.stringify(talentForm.school_ids));
    formData.append("link_join_program", talentForm.link_join_program);
    try {
      const responseFromServer = await skyshareApi({
        url: "/talent/add",
        method: "post",
        data: formData,
      });
      console.log(responseFromServer.data.data, "===>");
    } catch (error) {
      console.log(error);
    }
    console.log(formData, "data");
  };

  useEffect(() => {
    const getSchool = async function () {
      try {
        const response = await skyshareApi.get("/school");
        setSchools(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSchool();
  }, []);
  console.log(schools, "==> school");

  const handleCheckboxChange = (id) => {
    setTalentForm((prevForm) => {
      const newSchoolIds = prevForm.school_ids.includes(id)
        ? prevForm.school_ids.filter((schoolId) => schoolId !== id)
        : [...prevForm.school_ids, id];
      return {
        ...prevForm,
        school_ids: newSchoolIds,
      };
    });
  };

  const Navigate = useNavigate();
  function handleNavigate() {
    Navigate("/cms/talent/editschool");
  }

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaveModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsCancelModalOpen(true);
  };

  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  const handleDeleteSchoolById = async function () {
    try {
      const response = await skyshareApi.delete(`/school/${deleteSchoolById}`);
    } catch (error) {
      console.log(error);
    }
  };

  async function confirmDelete() {
    if (!deleteSchoolById) return;
    try {
      await skyshareApi.delete(`/school/${deleteSchoolById}`);
      setSchools(schools.filter((school) => school.id !== deleteSchoolById));
    } catch (error) {
      console.log(error);
    }
    setIsModalOpen(false);
  }

  useEffect(() => {
    const getSchool = async function () {
      try {
        const response = await skyshareApi.get("/school");
        setSchools(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSchool();
  }, []);
  console.log(schools, "==> school");

  const handleDeleteSchool = () => {
    setIsModalOpen(true);
    setDeleteMessage("Yakin untuk menghapus sekolah?");
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
              <h1 className="headline-1">Talent Academy</h1>
              <p className="paragraph">
                Kelola secara dinamis page Talent Academy disini.
              </p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className=" booklet mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Book} alt="" />
                  <h4 className="headline-4">Booklet</h4>
                </div>
                <div className="bg-neutral-white gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        <img className="w-6" src={Chain} alt="" />
                        Link Booklet<span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="https://"
                      type="text"
                      onChange={(e) =>
                        setTalentForm({
                          ...talentForm,
                          file_booklet: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                  </form>
                </div>
                {/* <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 border-dashed flex justify-center items-center border-gray-400 rounded-xl h-60">
                    <div className="">
                      <div className="flex justify-center">
                        <img className=" w-7 mb-4" src={File} alt="" />
                      </div>
                      <p className="paragraph text-center">Drag & Drop here</p>
                      <p className="paragraph text-center">or</p>
                      <div className="flex relative justify-center">
                        <h4 className=" font-bold text-orange-400 text-base absolute">
                          Browse
                        </h4>
                        <input
                          className="ml-80 opacity-0 absolute"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-4 bg-primary-1 hover:bg-primary-2 flex justify-center rounded-xl">
                    <button className="bg-primary-1 hover:bg-primary-2 flex justify-center gap-2 py-4">
                      <p className=" text-white font-bold">Upload File</p>
                      <img className=" w-6 -rotate-90" src={Arrow} alt="" />
                    </button>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className=" text-base">(File PDF)</h4>
                  </div>
                </div> */}
              </div>

              <div className=" alur-acara mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Work} alt="" />
                  <h4 className="headline-4">Alur Acara</h4>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className=" font-bold text-base">
                    Upload gambar “Alur Acara”{" "}
                    <span className=" text-base font-bold text-orange-300">
                      *
                    </span>
                  </h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 border-dashed flex justify-center items-center border-gray-400 rounded-xl h-60">
                    <div className="">
                      <div className="flex justify-center">
                        <img className=" w-7 mb-4" src={File} alt="" />
                      </div>
                      <p className="paragraph text-center">Drag & Drop here</p>
                      <p className="paragraph text-center">or</p>
                      <div className="flex relative justify-center">
                        <h4 className=" font-bold text-orange-400 text-base absolute">
                          Browse
                        </h4>
                        <input
                          className="ml-80 opacity-0 absolute"
                          id="image_heading"
                          accept="image/*"
                          onChange={(e) =>
                            setTalentForm({
                              ...talentForm,
                              gambar_alur_acara: e.target.files[0],
                            })
                          }
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-4 bg-primary-1 hover:bg-primary-2 flex justify-center rounded-xl">
                    <button className="bg-primary-1 hover:bg-primary-2 flex justify-center gap-2 py-4">
                      <p className=" text-white font-bold">Upload File</p>
                      <img className=" w-6 -rotate-90" src={Arrow} alt="" />
                    </button>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className=" text-base">
                      Minimal Ukuran{" "}
                      <span className=" font-bold">(956 x 350px)</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className=" timeline mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Time} alt="" />
                  <h4 className="headline-4">Timeline</h4>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className=" font-bold text-base">
                    Upload gambar “Timeline”{" "}
                    <span className=" text-base font-bold text-orange-300">
                      *
                    </span>
                  </h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 border-dashed flex justify-center items-center border-gray-400 rounded-xl h-60">
                    <div className="">
                      <div className="flex justify-center">
                        <img className=" w-7 mb-4" src={File} alt="" />
                      </div>
                      <p className="paragraph text-center">Drag & Drop here</p>
                      <p className="paragraph text-center">or</p>
                      <div className="flex relative justify-center">
                        <h4 className=" font-bold cursor-pointer text-orange-400 text-base absolute">
                          Browse
                        </h4>
                        <input
                          className="ml-80 cursor-pointer opacity-0 absolute"
                          id="image_heading"
                          accept="image/*"
                          onChange={(e) =>
                            setTalentForm({
                              ...talentForm,
                              gambar_timeline: e.target.files[0],
                            })
                          }
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-4 bg-primary-1 hover:bg-primary-2 flex justify-center rounded-xl">
                    <button className="bg-primary-1 hover:bg-primary-2 flex justify-center gap-2 py-4">
                      <p className=" text-white font-bold">Upload File</p>
                      <img className=" w-6 -rotate-90" src={Arrow} alt="" />
                    </button>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className=" text-base">
                      Minimal Ukuran{" "}
                      <span className=" font-bold">(956 x 350px)</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="daftar-sekolah mt-6">
                <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                  <div className="flex items-center gap-5 ">
                    <img className=" w-6" src={Work} alt="" />
                    <h4 className="headline-4">Daftar Sekolah</h4>
                  </div>
                  <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                    <Link to="" className="bg-primary-1 hover:bg-primary-2">
                      <img className=" w-6" src={Add} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <table>
                    <thead>
                      <tr>
                        <th className=" pr-8 pl-2 py-3"></th>
                        <th className=" pr-8 pl-2 py-3">No.</th>
                        <th className="pr-16 w-48 py-3">Nama Sekolah</th>
                        <th className="pr-20 py-3">Alamat</th>
                        <th className="px-16 py-3">Grup</th>
                        <th className="pl-10 py-3">Manage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((school, index) => {
                        return (
                          <tr key={school.id}>
                            <td className="mt-3">
                              <input
                                value={school.id}
                                checked={talentForm.school_ids.includes(
                                  school.id
                                )}
                                onChange={() => handleCheckboxChange(school.id)}
                                type="checkbox"
                              />
                            </td>
                            <td className="pl-3 py-4 text-left font-semibold text-sm">
                              {index + 1}
                            </td>
                            <td className="pl-1 py-4 text-left text-sm">
                              {school.nama_sekolah}
                            </td>
                            <td className="pl-6 py-4 text-left flex items-center text-sm gap-1">
                              <img className=" w-6 h-6" src={Location} alt="" />
                              {school.embed_map.substring(0, 20)}
                            </td>
                            <td className=" w-8 py-4">
                              <button
                                onClick={(e) =>
                                  setTalentForm({
                                    ...talentForm,
                                    school_id: school.id,
                                  })
                                }
                                className="border-2 border-gray-300 ml-4 rounded-full px-2  flex py-1.5 gap-2 items-center justify-center "
                              >
                                <img className=" w-6 h-6" src={Show} alt="" />
                                <p className="paragraph text-sm">Lihat Group</p>
                              </button>
                            </td>
                            <td className="pl-10 py-4 text-left flex gap-4">
                              <div className="w-10 flex items-center justify-center rounded-md py-2">
                                <button
                                  onClick={handleNavigate}
                                  className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center"
                                >
                                  <img className="w-5" src={Edit1} alt="" />
                                </button>
                              </div>
                              <div className="w-10 flex items-center justify-center rounded-md py-2">
                                <button
                                  onClick={() => {
                                    handleDeleteSchool();
                                    setDeleteSchoolById(school.id);
                                  }}
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

              <div className=" join-button mt-6">
                <div className="bg-background py-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Chain} alt="" />
                  <h4 className="headline-4">Join Button</h4>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mb-1" htmlFor="cta">
                      Call To Action <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Example: Join Talent Academy Season 6"
                      onChange={(e) =>
                        setTalentForm({
                          ...talentForm,
                          link_cta: e.target.value,
                        })
                      }
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        <img className="w-6" src={Chain} alt="" />
                        Link Join Program{" "}
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="https://"
                      type="text"
                      onChange={(e) =>
                        setTalentForm({
                          ...talentForm,
                          link_join_program: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                  </form>
                </div>
                <div className=" mt-4 flex gap-5 justify-end">
                  <div className=" w-56 py-2 flex">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-200 text-black font-bold"
                    >
                      Batal
                    </button>
                  </div>
                  <div className=" w-56 py-2 flex">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent the default form submission
                        handleSave(e);
                        handleAddTalentAcademy();
                      }}
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
        <div className="fixed inset-0 bg-gray-600 z-10 bg-opacity-50 flex justify-center items-center">
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
        <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 flex justify-center items-center">
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

export default CmsTalentForm;
