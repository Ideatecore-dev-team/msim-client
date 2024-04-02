import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimoni from "../components/Testimoni";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Hero />
        <Testimoni />
      </div>
    </>
  );
}

export default Home;
