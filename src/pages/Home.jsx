import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimoni from "../components/Testimoni";
import HomeArticle from "../components/HomeArticle";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Hero />
        <Testimoni />
        <HomeArticle />
      </div>
    </>
  );
}

export default Home;
