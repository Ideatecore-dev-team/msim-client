import React, { useEffect, useState } from "react";
import skyshareApi from "../utilities/skyshareApi";
import { Link, useNavigate } from "react-router-dom";
import Character from "../../public/images/mascot-icons/Char.png";
import Edit1 from "../../public/images/mascot-icons/Edit Square.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import CmsNavCard from "./CmsNavCard";
import Mascot from "../../public/images/mascot-icons/pose=2.png";

function CmsDashboardAkun() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dataAdmins, setDataAdmins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDataAdmin = async function () {
      try {
        const dataAdminFromServer = await skyshareApi.get("/admin/admins");
        setDataAdmins(dataAdminFromServer.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataAdmin();
  }, []);
  console.log(dataAdmins);

  function handleDelete(user) {
    setSelectedUser(user);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedUser(null);
  }

  async function confirmDelete() {
    if (!selectedUser) return;
    try {
      await skyshareApi.delete(`/admin/admin/${selectedUser.id}`);
      setDataAdmins(dataAdmins.filter((admin) => admin.id !== selectedUser.id));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-background flex flex-col pb-44 pt-12 items-center self-stretch h-auto">
        <div className="content flex gap-4 ">
          <div className="">
            <CmsNavCard />
          </div>
          <div className=" w-full">
            <div className=" ">
              <h1 className="headline-1">Kelola akun</h1>
              <p className="paragraph">
                Kelola akun admin kamu disini (hanya berlaku untuk role{" "}
                <span className=" font-bold">“Super Admin”</span>).
              </p>
            </div>
            <div className=" shadow-md mt-10 border-2 border-black rounded-xl pb-44 px-3 bg-neutral-white w-full">
              <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                <div className="flex items-center gap-5 ">
                  <img className=" w-10" src={Character} alt="" />
                  <h4 className="headline-4">Akun Admin</h4>
                </div>
                <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                  <Link
                    to="/cms/add/admin"
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
                      <th className="pr-16 py-3">Name</th>
                      <th className="px-16 py-3">Email</th>
                      <th className="px-16 py-3">Role</th>
                      <th className="px-16 py-3">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataAdmins.map((admin, index) => {
                      return (
                        <tr key={admin.id}>
                          <td className="pl-3 py-4 text-left font-semibold">
                            {index + 1}
                          </td>
                          <td className="pl-1 py-4 text-left">{admin.name}</td>
                          <td className="px-16 py-4 text-left">
                            {admin.email}
                          </td>
                          <td className="px-16 py-4 text-left">{admin.role}</td>
                          <td className="px-16 py-4 text-left flex gap-4">
                            <div className="w-10 flex items-center justify-center rounded-md py-2">
                              <Link
                                to={`/cms/edit/admin/${admin.id}`}
                                className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center"
                              >
                                <img className="w-5" src={Edit1} alt="" />
                              </Link>
                            </div>
                            <div className="w-10 flex items-center justify-center rounded-md py-2">
                              <button
                                onClick={() => handleDelete(admin)}
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

export default CmsDashboardAkun;
