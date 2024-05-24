import React from "react";
import SsaCarouselParents from "./SSACarouselParents";
import ParentsActivitiesCard from "./ParentsActivitiesCard"
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";
import Mascot1 from "../../public/images/mascot-icons/Char.png";
import Mascot2 from "../../public/images/mascot-icons/Char-1.png";
import Mascot3 from "../../public/images/mascot-icons/Char-2.png";
import { Link } from "react-router-dom";
import "./ParentsActivitiesCard.css"

function ParentsActivitiesCarousel() {
    return (
        <>
        {/* <div className="testimoni bg-background bg-cover border-y-2 border-black flex justify-center">
            <div className="flex -mt-20 max-w-full"> */}
            {/* <SsaCarouselParents /> */}
            {/* <ParentsActivitiesCard /> */}
            {/* </div>
        </div> */}
        <div className="activities-section bg-background bg-cover border-y-2 border-black flex flex-col py-24 justify-center items-center gap-2">
            <div className="card-area-container flex flex-col gap-10 items-center">
                <div className="carousel flex items-start gap-6">
                    {/* <div className="benefit-card flex flex-col items-center px-6 pb-6 gap-4">
                        <div className="main-card flex flex-col self-stretch items-start">
                            <h4 className="headline-4 self-stretch text-center">1. Seminar</h4>
                        </div>
                        <div className="circle flex justify-center items-center">
                            <svg className=" size-6 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24"
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none">
                            <path 
                            d="M23 12C23 5.92487 18.0751 1 12 1M23 12C23 18.0751 18.0751 23 12 23M23 12C23 14.2091 18.0751 16 12 16C5.92487 16 1 14.2091 1 12M12 1C5.92487 1 1 5.92487 1 12M12 1C14.7614 1 17 5.92487 17 12C17 18.0751 14.7614 23 12 23M12 1C9.23858 1 7 5.92487 7 12C7 18.0751 9.23858 23 12 23M12 23C5.92487 23 1 18.0751 1 12" 
                            stroke="white" 
                            stroke-width="1.5"/>
                            </svg>
                        </div>
                        <svg className="vector h-1 flex-shrink-0 self-stretch"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="246" 
                        height="2" 
                        viewBox="0 0 246 2" 
                        fill="none">
                        <path 
                        d="M0 1H246" 
                        stroke="#001125"/>
                        </svg>
                        <p className="paragraph self-stretch">Lorem impum dolor sit ammet, consectetur edipisching elit</p>
                    </div> */}
                <div className="benefit-card m-auto">
                    <div className="bg-white rounded-xl card-size border-gray-900 border-2 ">
                    <div className="rounded-full w-16 h-16 -mt-9 ml-28">
                    <img
                        className="w-16 h-16 border-2 border-black rounded-full"
                        src={Mascot1}
                        alt=""
                    />
                    </div>
                    <div className="">
                    <h4 className="headline-4 text-center mt-3">
                        1. Seminar
                        </h4>
                    <div className="flex justify-center mt-4 w-full">
                        <div className="border-t-2 border-black w-2/3 "></div>
                    </div>
                    <p className="paragraph mt-5 mx-5 text-center">
                        Lorem Ipsum Dolor sit Ammet, consectetur adipiscing elit
                    </p>
                    </div>
                </div>
                </div>
                <div className="benefit-card m-auto ">
                    <div className="bg-white rounded-xl card-size border-gray-900 border-2 ">
                    <div className="rounded-full w-16 h-16 -mt-9 ml-28">
                    <img
                        className="w-16 h-16 border-2 border-black rounded-full"
                        src={Mascot2}
                        alt=""
                    />
                    </div>
                    <div className="">
                    <h4 className="headline-4 text-center mt-3">
                        2. Training
                        </h4>
                    <div className="flex justify-center mt-4 w-full">
                        <div className="border-t-2 border-black w-2/3 "></div>
                    </div>
                    <p className="paragraph mt-5 mx-5 text-center">
                        Lorem Ipsum Dolor sit Ammet, consectetur adipiscing elit
                    </p>
                    </div>
                </div>
                </div>
                <div className="benefit-card m-auto ">
                    <div className="bg-white rounded-xl card-size border-gray-900 border-2 ">
                    <div className="rounded-full w-16 h-16 -mt-9 ml-28">
                    <img
                        className="w-16 h-16 border-2 border-black rounded-full"
                        src={Mascot3}
                        alt=""
                    />
                    </div>
                    <div className="">
                    <h4 className="headline-4 text-center mt-3">
                        3. Parents Talk
                        </h4>
                    <div className="flex justify-center mt-4 w-full">
                        <div className="border-t-2 border-black w-2/3 "></div>
                    </div>
                    <p className="paragraph mt-5 mx-5 text-center">
                        Lorem Ipsum Dolor sit Ammet, consectetur adipiscing elit
                    </p>
                    </div>
                </div>
                </div>
                </div>
                <div className="menu-item flex justify-center py-4 px-5 items-center gap-2">
                    <Link
                    className=" flex items-center gap-2 px-4 py-3 bg-primary-1 rounded-xl shadow-lg hover:bg-primary-2 "
                    to="/ourprogram/parents"
                    >
                    <p className="text-white text-lg">Go to Parents Academy</p>
                    <img className="w-7 -rotate-90" src={ArrowLeft} alt="" />
                    </Link>
                </div>
                </div>
            </div>
        </>
    );
}

export default ParentsActivitiesCarousel;
