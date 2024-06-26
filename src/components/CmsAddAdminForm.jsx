import React, { useState } from "react";
import skyshareApi from "../utilities/skyshareApi";
import { useNavigate } from "react-router-dom";
import Caution from "../../public/images/mascot-icons/Info Square.png";
import CmsNavCard from "./CmsNavCard";
import Xbutton from "../../public/images/mascot-icons/Fill 300.png";
import Ceklist from "../../public/images/mascot-icons/Tick Square.png";
import Danger from "../../public/images/mascot-icons/Danger Triangle.png";
import Mascot1 from "../../public/images/mascot-icons/pose=9.png";
import Mascot2 from "../../public/images/mascot-icons/pose=8.png";

function CmsAddAdminForm() {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageIcon, setImageIcon] = useState("");
  const [imageMascot, setImageMascot] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleData = async function () {
    const inputAdmin = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const adminRegistToServer = await skyshareApi({
        method: "post",
        url: "/admin/register",
        data: inputAdmin,
      });
      console.log(inputAdmin);
      console.log(adminRegistToServer.data);
      setErrorMessage("Saved Successfully");
      setImageIcon(Ceklist);
      setImageMascot(Mascot2);
      setIsSaveModalOpen(true);
    } catch (error) {
      console.log(error);
      setErrorMessage("Error Empty Field");
      setImageIcon(Danger);
      setImageMascot(Mascot1);
      setIsSaveModalOpen(true);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let fieldErrors = {};

    if (!name) fieldErrors.name = "Name is required";
    if (!email) fieldErrors.email = "Email is required";
    if (!password) fieldErrors.password = "Password is required";
    else if (password.length < 8)
      fieldErrors.password = "Password must be at least 8 characters long";

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setErrorMessage("Error Empty Field");
      setImageIcon(Danger);
      setImageMascot(Mascot1);
      setIsSaveModalOpen(true);
    } else {
      handleData();
    }
  };

  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
    if (errorMessage === "Saved Successfully") {
      navigate("/cms/kelolaakun");
    }
  };

  return (
    <>
      <div className="bg-background flex flex-col pb-44 pt-12 items-center self-stretch h-auto">
        <div className="content flex gap-4">
          <CmsNavCard />
          <div className="w-full">
            <div>
              <h1 className="headline-1">Add Admin</h1>
              <p className="paragraph">
                Masukkan data pada <span className="font-bold">Field</span> yang
                tertera
              </p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className="mt-10 ml-2">
                <form onSubmit={handleSave}>
                  <label htmlFor="name" className="font-bold block mb-2">
                    Name <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    name="name"
                    placeholder="Masukkan Name"
                    type="text"
                    className={`w-full  px-4 py-2 border-2 rounded-lg outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 mb-6 text-sm">{errors.name}</p>
                  )}
                  <label htmlFor="username" className="font-bold block mb-2">
                    Email <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    name="username"
                    placeholder="Masukkan Email"
                    type="text"
                    className={`w-full px-4 py-2 border-2 rounded-lg outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                  <label
                    htmlFor="password"
                    className="font-bold block mb-2 mt-5"
                  >
                    Password <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    name="password"
                    placeholder="Masukkan Password"
                    type="password"
                    className={`w-full px-4 py-2 border-2 rounded-lg outline-none ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                  <div className="flex gap-1">
                    <img className="w-5" src={Caution} alt="Caution" />
                    <p className="text-xs mt-1">Minimal 8 huruf atau angka</p>
                  </div>
                  <label htmlFor="role" className="font-bold block mb-2 mt-5">
                    Role <span className="text-primary-1 font-bold">*</span>
                  </label>
                  <div className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none">
                    Admin
                  </div>
                  <div className="w-full mt-10 flex justify-end">
                    <div className="w-56 py-2 flex">
                      <button
                        type="submit"
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
              <img className="w-5" src={Xbutton} alt="Close" />
            </button>
            <div className="flex justify-center">
              <img className="w-40" src={imageMascot} alt="Mascot" />
            </div>
            <div className="flex gap-1 mt-5 items-center">
              <img className="w-6 h-6" src={imageIcon} alt="Icon" />
              <h3 className="headline-3">{errorMessage}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CmsAddAdminForm;
