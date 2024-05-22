import React from "react";
import { Link } from "react-router-dom";
import SkyshareLogo from "../../public/images/Talent-logo.png";
import "./OurProgramHero.css";

function OurProgramHero() {
    return (
        <>
            <div className="hero flex flex-col item-center gap-44">
                <div className="headline-1 flex flex-col items-center gap-2">
                    <h1>Explore Our Programs</h1>
                    <div className="paragraph inline-flex flex-col items-center text-center">
                        <p>Pelajari Lebih lanjut Program di Skyshare Academy</p>
                    </div>
                    {/* <div className="flex justify-center">
                    <img className="w-56" src={SkyshareLogo} alt="" />
                    </div>
                    <div className="container">
                        <h1 className="headline-1 text-center mb-4">
                        Skyshare Academy
                        </h1>
                        <p className="paragraph text-center mb-3">
                        Skyshare Academy merupakan program ekskul kelas karakter minat dan
                        bakat
                        </p>
                    </div> */}
                </div>
            </div>

        </>
    );
}
export default OurProgramHero;
