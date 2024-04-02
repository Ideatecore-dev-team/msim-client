import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <div className="home">
        <Navbar/>
        <Hero />
        <h1>this is homepage</h1>
      </div>
    </>
  );
}

export default Home;
