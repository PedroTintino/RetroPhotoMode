import DemoNavbar from "../components/DemoNavbar";
import DownArrow from "../assets/icons/down-arrow.svg" 
import React, {useState, useEffect} from 'react';


function Home(){
const baseUrl = "http://localhost:3337";
    return(
        <div className="bg-slate-950 h-screen ">
            <DemoNavbar />
            <div className="introText text-slate-50 p-6 text-center text-xl h-full flex gap-2 flex-col justify-center leading-9 items-center">
                <div className="flex items-center">
                    <h2 className="text-4xl font-semibold">RetroView: Photomode</h2>
                    <span className="text-4xl">📷</span>
                </div>
                <h4>Welcome to your gallery, <span className="font-semibold">Heather!</span></h4>
                <p>Our purpose is giving to all of you the best and unique <br/> experience for your retro and favorite games.</p>
                <p className="w-10 h-8"><img src={DownArrow} alt="" /></p>
            </div>
        </div>
    )
}
export default Home;