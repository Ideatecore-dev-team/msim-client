import React, { useEffect, useState } from "react";
import skyshareApi from "../utilities/skyshareApi";
import { Link, useParams, useNavigate } from "react-router-dom";
import Caution from "../../public/images/mascot-icons/Info Square.png";
import CmsNavCard from "./CmsNavCard";
import Xbutton from "../../public/images/mascot-icons/Fill 300.png";
import Ceklist from "../../public/images/mascot-icons/Tick Square.png";
import Coution from "../../public/images/mascot-icons/Info Square.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
import Mascot2 from "../../public/images/mascot-icons/pose=1.png";

function CmsEditAdminForm() {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [adminById, setAdminById] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const handleData = function () {
    const inputEditAdmin = {
      name: name,
      email: email,
      password: password,
    };
    adminEditAkun(inputEditAdmin);
  };

  const adminEditAkun = async function (inputEditAdmin) {
    console.log(inputEditAdmin);
    try {
      const editDataFromServer = await skyshareApi.put(
        `/admin/admin/${id}`,
        inputEditAdmin
      );
      console.log(editDataFromServer.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getDataAdmin = async function () {
      try {
        const getDataAdminById = await skyshareApi.get(`/admin/admin/${id}`);
        setAdminById(getDataAdminById.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getDataAdmin();
  }, []);

  console.log(adminById);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaveModalOpen(true);
  };

  const handleCancel = () => {
    setIsCancelModalOpen(true);
  };

  const Navigate = useNavigate();
  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
    Navigate("/cms/kelolaakun");
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  return (
    <>
      <div className="bg-background flex flex-col pb-52 pt-12 items-center self-stretch h-auto">
        <div className="content flex gap-4">
          <div className="">
            <CmsNavCard />
          </div>
          <div className="w-full">
            <div className="">
              <h1 className="headline-1">Edit Admin</h1>
              <p className="paragraph">
                Masukkan data pada <span className="font-bold">Field</span> yang
                tertera
              </p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className="mt-10 ml-2">
                <form onSubmit={handleSave}>
                  <label htmlFor="username" className="font-bold block mb-2">
                    Name <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    placeholder="Masukkan Name"
                    defaultValue={adminById.name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                  />
                  <label
                    htmlFor="oldPassword"
                    className="font-bold block mb-2 mt-5"
                  >
                    Email <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    placeholder="Masukkan Email"
                    defaultValue={adminById.email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                  />
                  <label
                    htmlFor="newPassword"
                    className="font-bold block mb-2 mt-5"
                  >
                    Password <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    placeholder="Masukkan Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                  />
                  <div className="flex gap-1">
                    <img className="w-5" src={Caution} alt="" />
                    <p className="text-xs mt-1">Minimal 8 huruf atau angka</p>
                  </div>
                  <label htmlFor="role" className="font-bold block mb-2 mt-5">
                    Role <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <div className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none">
                    Admin
                  </div>
                  <div className="w-full mt-10 flex gap-5 justify-end">
                    <div className="w-56 py-2 flex">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-300 w-20 py-2 rounded-md hover:bg-gray-200 text-black font-bold"
                      >
                        Batal
                      </button>
                    </div>
                    <div className="w-56 py-2 flex">
                      <button
                        type="submit"
                        onClick={handleData}
                        className="bg-primary-1 w-20 py-2 rounded-md hover:bg-primary-2 text-white font-bold"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default CmsEditAdminForm;
