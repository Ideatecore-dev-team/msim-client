import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CmsLoginRoute = () => {
  const token = localStorage.getItem("authorization");
  return token ? <Navigate to="/cms/kelolaakun" /> : <Outlet />;
};

export default CmsLoginRoute;
