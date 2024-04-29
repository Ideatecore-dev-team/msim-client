import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProgram from "./pages/OurProgram";
import Skyshare from "./pages/Skyshare";
import Mentor from "./pages/Mentor";
import Article from "./pages/Article";
import SkyshareActivity from "./pages/SkyshareActivity";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>MSIM</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourprogram" element={<OurProgram />} />
        <Route path="/ourprogram/skyshare" element={<Skyshare />} />
        <Route path="/ourprogram/mentor" element={<Mentor />} />
        <Route path="/ourprogram/activities" element={<SkyshareActivity />} />
        <Route path="/article" element={<Article />} />
        {/* Tambahkan rute-rute tambahan di sini */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
