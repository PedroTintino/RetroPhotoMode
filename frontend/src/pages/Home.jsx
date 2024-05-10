import Navbar from "../components/Navbar";
import DownArrow from "../assets/icons/down-arrow.svg" 
import React, {useState, useEffect, useRef} from 'react';
import NewPost from "../components/NewPost";
import axios from 'axios';
import Post from "../components/Post";
import DinamicGallery from "../components/Grid";



function Home(){
const baseUrl = "http://localhost:3337";
const [wallpaper, setWallpaper] = useState(null);
const [images, setImages] = useState([]);
const [loading, setLoading] = useState(true);
const [reload, setReload] = useState(false);


const fetchImages = async () => {
    try{
        const token = localStorage.getItem("token");
        const decodedToken = parseJwt(token);
        const userId = decodedToken.id.id;
        console.log(`o userId atual é: ${userId}`);
        const response = await axios.get(`${baseUrl}/post/list`,{
            params: {
                authorId: userId
            }
        });
        console.log(response.data);
        setImages(response.data);
        setLoading(false);
    }
    catch(error){
        console.error('Error while loading content: ', error);
        setLoading(false);
    }
};

useEffect(() => {
    fetchImages();
}, []);
// Um gatilho para recarregamento
useEffect(() =>{
    if(reload){
        fetchImages();
        setReload(false);
    }
}, [reload])
const handleNewUpload = () => {
    fetchImages();
}

const handleWallpaperSubmit = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    localStorage.setItem('wallpaper',imageUrl);
    setWallpaper(imageUrl);
}
// gatilho pro wallpaper
useEffect(() => {
    const savedWallpaper = localStorage.getItem('wallpaper');
    // if(savedWallpaper){
    //     setWallpaper(savedWallpaper);
    // }
    setWallpaper(savedWallpaper);
}, []);


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
            const decodedToken = parseJwt(token);
            const userName = decodedToken.id.name;
            setUserName(userName)
        }catch(error){
            console.log("Error finding user name!", error);
        }
    }
    fetchUserName();
}, []);
// SEARCH
const handleSearch = (query) => {
    // if(query.trim() ==='') setImages(images); Doesn't work
    const filteredPosts = images.filter((image) =>
      image.description.toLowerCase().includes(query.toLowerCase())
    );
    setImages(filteredPosts);
  };
// DELETE
const handleDelete = async (postId) => {
    try{
      await axios.delete(`${baseUrl}/post/delete/${postId}`);
  
      setImages((prevImages) => prevImages.filter((image) => image.id !== postId))
      alert('Post deleted!')
      setReload(true);
    }
    catch(error){
        console.log('Error while deleting: ', error);
    }
  }
  
    return(
    <div>
        {wallpaper ? (
            <div
            className="bg-cover bg-fixed bg-center w-full h-screen absolute top-0 right-0 bot -z-10"
            style={{ backgroundImage: `url(${wallpaper})` }}
        ></div>
       ) : (
          <div className="bg-gradient-to-r from-purple-900 to-fuchsia-700 w-full h-full absolute top-0 right-0 -z-20"></div>
       )}
        <div className="screen block z-50 h-full w-full top-0 left-0 fixed overflow-auto ">
      
           
            <Navbar  handleSearch={handleSearch}/>
            <NewPost newUploadMade={handleNewUpload}/>
            <div className="introText text-slate-50 p-6 text-center text-xl h-full flex gap-2 flex-col justify-center leading-9 items-center">
                <div className="flex items-center">
                    <h2 className="text-4xl font-semibold">RetroView: Photomode</h2>
                    <span className="text-4xl">📷</span>
                </div>
                <h4>Welcome to your gallery, <span className="font-semibold">{userName}!</span></h4>
                <p>Our purpose is giving to all of you the best and unique <br/> experience for your retro and favorite games.</p>
               
                <label onClick={handleLabelClick} className="underline text-gray-800 cursor-pointer">Click here to change your home wallpaper</label>
                <input type="file" className="hidden" accept="image/*" ref={fileInputRef} onChange={handleWallpaperSubmit} />
                <p className="w-10 h-8 "><img src={DownArrow} alt="" /></p>
            </div>
            {!loading && (     
                <DinamicGallery images={images} handleDelete={handleDelete} />
            )}
        </div>
        </div>
    )
}
export default Home;