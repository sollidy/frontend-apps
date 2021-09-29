import { useState } from "react";
import { AboutMe } from "../components/AboutMe";
import {InfoSection} from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <AboutMe />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </>
    );
};