import Navbar from "../components/Navbar";
import DownArrow from "../assets/icons/down-arrow.svg" 
import React, {useState, useEffect, useRef} from 'react';
import NewPost from "../components/NewPost";

function Home(){
const baseUrl = "http://localhost:3337";
const [wallpaper, setWallpaper] = useState(null);
const handleWallpaperSubmit = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setWallpaper(imageUrl);
}

const fileInputRef = useRef(null);
const handleLabelClick = () => {
    fileInputRef.current.click();
}

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
        <div className=" h-screen">
             {wallpaper ? (
                  <div
                  className="bg-cover bg- bg-center w-full h-full absolute top-0 right-0 -z-20"
                  style={{ backgroundImage: `url(${wallpaper})` }}
              ></div>
             ) : (
                <div className="bg-gradient-to-r from-purple-900 to-fuchsia-700 w-full h-full absolute top-0 right-0 -z-20"></div>
             )}
           
            <Navbar />
            <div className="introText text-slate-50 p-6 text-center text-xl h-full flex gap-2 flex-col justify-center leading-9 items-center">
                <div className="flex items-center">
                    <h2 className="text-4xl font-semibold">RetroView: Photomode</h2>
                    <span className="text-4xl">📷</span>
                </div>
                <h4>Welcome to your gallery, <span className="font-semibold">{userName}!</span></h4>
                <p>Our purpose is giving to all of you the best and unique <br/> experience for your retro and favorite games.</p>
                <div className="searchAndcreate flex h-12">
                <input type="text" className="rounded p-2 text-black" placeholder="searchbar coming soon" />
                <NewPost />
                </div>
                <label onClick={handleLabelClick} className="underline text-gray-800 cursor-pointer">Click here to change your home wallpaper</label>

                <input type="file" className="hidden" accept="image/*" ref={fileInputRef} onChange={handleWallpaperSubmit} />
                <p className="w-10 h-8 "><img src={DownArrow} alt="" /></p>
            </div>
        </div>
    )
}
export default Home;