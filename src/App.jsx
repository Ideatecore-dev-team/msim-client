import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
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
        {/* Tambahkan rute-rute tambahan di sini */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
