import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <>
      <div className="hero bg-hero-bg w-full h-screen bg-cover bg-center">
        <div className="content text-white">
          <h1 className=" text-white font-bold text-5xl">
            Build up your mentoring with us.
          </h1>
          <p className="text-white text-xs font-thin mt-3 mb-3">
            Katanya mau berkembang? daripada berkembang seorang diri, Yukk
            maksimalkan potensi kamu dengan adanya mentorship!
          </p>
          <Button onClick={() => console.log("Button clicked")} className="">
            Check Our Programs ---
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
