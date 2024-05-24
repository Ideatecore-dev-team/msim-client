import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ParentsActivitiesCard.css"
import Slider from "react-slick";
import Mascot1 from "../../public/images/mascot-icons/Char.png";
import Mascot2 from "../../public/images/mascot-icons/Char-1.png";
import Mascot3 from "../../public/images/mascot-icons/Char-2.png";
import Mascot4 from "../../public/images/mascot-icons/Char-3.png";
import Mascot5 from "../../public/images/mascot-icons/Char-4.png";

function ParentsActivitiesCard() {
    return (
        <div className="activities-section bg-background bg-cover border-y-2 border-black flex flex-col py-24 justify-center items-center gap-2">
            <div className="card-area-container flex flex-col gap-10 items-center">
                <div className="carousel flex items-start gap-6">
                    <div className="benefit-card flex flex-col items-center px-6 pb-6 gap-4">
                        <div className="main-card flex flex-col self-stretch items-start">
                            <h4 className="headline-4 self-stretch">1. Seminar</h4>
                        </div>
                        <div className="circle "></div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParentsActivitiesCard;
