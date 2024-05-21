import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProgram from "./pages/OurProgram";
import Skyshare from "./pages/Skyshare";
import Mentor from "./pages/Mentor";
import Parents from "./pages/Parents";
import Article from "./pages/Article";
import SkyshareActivity from "./pages/SkyshareActivity";
import ParentsActivity from "./pages/ParentsActivity";
import MentorActivity from "./pages/MentorActivity";
import ContactUs from "./pages/ContactUs";
import ArticleOpennedPage from "./pages/ArticleOpennedPage";
import CmsLogin from "./pages/CmsLogin";
import CmsKelolaAkun from "./pages/CmsKelolaAkun";
import CmsAddAdmin from "./pages/CmsAddAdmin";
import CmsEditAdmin from "./pages/CmsEditAdmin";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/cms/login";
  const hideNavbarAndFooter2 = location.pathname === "/cms/kelolaakun";
  const hideNavbarAndFooter3 = location.pathname === "/cms/add/admin";
  const hideNavbarAndFooter4 = location.pathname === "/cms/edit/admin";

  return (
    <>
      <Helmet>
        <title>MSIM</title>
      </Helmet>
      {!hideNavbarAndFooter &&
        !hideNavbarAndFooter2 &&
        !hideNavbarAndFooter3 &&
        !hideNavbarAndFooter4 && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourprogram" element={<OurProgram />} />
        <Route path="/ourprogram/talent" element={<Skyshare />} />
        <Route path="/ourprogram/mentor" element={<Mentor />} />
        <Route path="/ourprogram/parents" element={<Parents />} />
        <Route path="/article/:id" element={<ArticleOpennedPage />} />
        <Route
          path="/ourprogram/talent/activities"
          element={<SkyshareActivity />}
        />
        <Route
          path="/ourprogram/mentor/activities"
          element={<MentorActivity />}
        />
        <Route
          path="/ourprogram/parents/activities"
          element={<ParentsActivity />}
        />
        <Route path="/article" element={<Article />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cms/login" element={<CmsLogin />} />
        <Route path="/cms/kelolaakun" element={<CmsKelolaAkun />} />
        <Route path="cms/add/admin" element={<CmsAddAdmin />} />
        <Route path="cms/edit/admin" element={<CmsEditAdmin />} />
        {/* Tambahkan rute-rute tambahan di sini */}
      </Routes>
      {!hideNavbarAndFooter &&
        !hideNavbarAndFooter2 &&
        !hideNavbarAndFooter3 &&
        !hideNavbarAndFooter4 && <Footer />}
    </>
  );
}

export default App;
