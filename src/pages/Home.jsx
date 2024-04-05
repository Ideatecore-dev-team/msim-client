import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimoni from "../components/Testimoni";
import HomeArticle from "../components/HomeArticle";
import Partner from "../components/Partner";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Hero />
        <Testimoni />
        <HomeArticle />
        <Partner />
      </div>
    </>
  );
}

export default Home;
