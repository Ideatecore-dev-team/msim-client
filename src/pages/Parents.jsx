import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ParentsCta from "../components/ParentsCta";
import ParentsAbout from "../components/ParentsAbout";
import BenefitParents from "../components/BenefitParents";
import AlurAcara from "../components/AlurAcara";
import TimelineSkyshare from "../components/TimelineSkyshare";
import CurrentGroupParents from "../components/CurrentGroupParents";
import AllActivitiesParents from "../components/AllActivitiesParents";

function Parents() {
    const [skyshare, setSkyshare] = useState([]);
    useEffect(() => {
        const getDataSkyshare = async function () {
        try {
            const response = await axios.get("https://api.skyshareacademy.com/skyshare");
            setSkyshare(response.data.data);
        } catch (error) {}
        console.log(error);
        };
        getDataSkyshare();
    }, []);
    return (
        <>
        <div className="home">
            <ParentsCta skyshare={skyshare} />
            <ParentsAbout />
            <BenefitParents/>
            <AlurAcara skyshare={skyshare} />
            <TimelineSkyshare skyshare={skyshare} />
            <CurrentGroupParents />
            <AllActivitiesParents />
        </div>
        </>
    );
}

export default Parents;
