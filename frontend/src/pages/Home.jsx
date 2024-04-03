import Navbar from "../components/Navbar";
import DownArrow from "../assets/icons/down-arrow.svg" 
import React, {useState, useEffect} from 'react';


function Home(){
const baseUrl = "http://localhost:3337";
const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(atob(base64));
};
const [userName, setUserName] = useState(""); 
useEffect(() => {
    const fetchUserName = async () => {
        try{
            const token = localStorage.getItem("token");
            console.log(token)
            const decodedToken = parseJwt(token);
            console.log(decodedToken)
            const userName = decodedToken.id.name;
            setUserName(userName)
        }catch(error){
            console.log("Error finding user name!", error);
        }
    }
    fetchUserName();
}, []);
    return(
        <div className="bg-slate-950 h-screen ">
            <Navbar />
            <div className="introText text-slate-50 p-6 text-center text-xl h-full flex gap-2 flex-col justify-center leading-9 items-center">
                <div className="flex items-center">
                    <h2 className="text-4xl font-semibold">RetroView: Photomode</h2>
                    <span className="text-4xl">📷</span>
                </div>
                <h4>Welcome to your gallery, <span className="font-semibold">{userName}!</span></h4>
                <p>Our purpose is giving to all of you the best and unique <br/> experience for your retro and favorite games.</p>
                <p className="w-10 h-8"><img src={DownArrow} alt="" /></p>
            </div>
        </div>
    )
}
export default Home;