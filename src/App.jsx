import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProgram from "./pages/OurProgram";
import Skyshare from "./pages/Skyshare";
import Mentor from "./pages/Mentor";
// import Parents from "./pages/Parents";
import Article from "./pages/Article";
import SkyshareActivity from "./pages/SkyshareActivity";
import MentorActivity from "./pages/MentorActivity";
import ContactUs from "./pages/ContactUs";
import ArticleOpennedPage from "./pages/ArticleOpennedPage";
import CmsLogin from "./pages/CmsLogin";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/cms/login";

  return (
    <>
      <Helmet>
        <title>MSIM</title>
      </Helmet>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourprogram" element={<OurProgram />} />
        <Route path="/ourprogram/skyshare" element={<Skyshare />} />
        <Route path="/ourprogram/mentor" element={<Mentor />} />
        {/* <Route path="/ourprogram/parents" element={<Parents />} /> */}
        <Route path="/article/openned" element={<ArticleOpennedPage />} />
        <Route
          path="/ourprogram/skyshare/activities"
          element={<SkyshareActivity />}
        />
        <Route
          path="/ourprogram/mentor/activities"
          element={<MentorActivity />}
        />
        <Route path="/article" element={<Article />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cms/login" element={<CmsLogin />} />
        {/* Tambahkan rute-rute tambahan di sini */}
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
