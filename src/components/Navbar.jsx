import React from "react";
import Button from "./Button";

function Navbar(){
    return (
        <>
        <div className="flex justify-center">
        <div className=" bg-gray-300 w-10/12 h-24 rounded-full absolute mt-10 flex items-center justify-around">
        <div className=" flex gap-4 items-center">
            <div className="bg-gray-400 rounded-full w-16 h-16 -ml-16">
            <img src="" alt="logo" />
            </div>
            <div className="">
            <h1 className=" uppercase font-bold">mentoring</h1>
            <h1 className=" uppercase font-bold">consulting</h1>
            </div>
        </div>
        <div className="flex gap-10 -mr-40">
            <a href="#">About us</a>
            <a href="#">Our Program</a>
            <a href="#">Article</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="bg-gray-400 ml-5  -mr-16">
        <Button onClick={() => console.log("JOIN #SEASON6 clicked")}>
            <p className="text-black">JOIN #SEASON6</p>
            </Button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Navbar