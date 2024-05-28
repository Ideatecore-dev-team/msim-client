import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProgram from "./pages/OurProgram";
import Skyshare from "./pages/Talent";
import Mentor from "./pages/Mentor";
import Parents from "./pages/Parents";
import Article from "./pages/Article";
import TalentActivity from "./pages/TalentActivity";
import ParentsActivity from "./pages/ParentsActivity";
import MentorActivity from "./pages/MentorActivity";
import ContactUs from "./pages/ContactUs";
import ArticleOpennedPage from "./pages/ArticleOpennedPage";
import CmsLogin from "./pages/CmsLogin";
import CmsKelolaAkun from "./pages/CmsKelolaAkun";
import CmsAddAdmin from "./pages/CmsAddAdmin";
import CmsEditAdmin from "./pages/CmsEditAdmin";
import CmsTalentAcademy from "./pages/CmsTalentAcademy";
import CmsMentorAcademy from "./pages/CmsMentorAcademy";
import CmsParentsAcademy from "./pages/CmsParentsAcademy";
import CmsTalentEditSchool from "./pages/CmsTalentEditSchool";
import CmsTalentEditGroup from "./pages/CmsTalentEditGroup";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  const hideNavbarAndFooterPaths = [
    "/cms",
    "/cms/kelolaakun",
    "/cms/add/admin",
    "/cms/edit/admin",
    "/cms/talentacademy",
    "/cms/mentoracademy",
    "/cms/parentsacademy",
    "/cms/talent/editschool",
    "/cms/talent/editgroup",
  ];

  const shouldHideNavbarAndFooter = hideNavbarAndFooterPaths.includes(
    location.pathname
  );

  return (
    <>
      <Helmet>
        <title>MSIM</title>
      </Helmet>
      {!shouldHideNavbarAndFooter && <Navbar />}
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
          element={<TalentActivity />}
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
        <Route path="/cms" element={<CmsLogin />} />
        <Route path="/cms/kelolaakun" element={<CmsKelolaAkun />} />
        <Route path="/cms/add/admin" element={<CmsAddAdmin />} />
        <Route path="/cms/edit/admin" element={<CmsEditAdmin />} />
        <Route path="/cms/talentacademy" element={<CmsTalentAcademy />} />
        <Route path="/cms/mentoracademy" element={<CmsMentorAcademy />} />
        <Route path="/cms/parentsacademy" element={<CmsParentsAcademy />} />
        <Route
          path="/cms/talent/editschool"
          element={<CmsTalentEditSchool />}
        />
        <Route path="/cms/talent/editgroup" element={<CmsTalentEditGroup />} />
        {/* Tambahkan rute-rute tambahan di sini */}
      </Routes>
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
