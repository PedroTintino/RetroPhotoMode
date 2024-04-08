import React, { useState } from "react";
import { storage } from "../config/firebase.config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import axios from 'axios';

function NewPost(){
    const parseJwt = (token) => {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        return JSON.parse(atob(base64));
    };

    const token = localStorage.getItem("token");
    const tokenDecoded = parseJwt(token);
    console.log('here is your decoded token: ',tokenDecoded);
    const authorId = tokenDecoded.id.id;
    console.log(authorId);

const baseUrl = 'http://localhost:3337'
const [postModal, setPostModal] = useState(false);
const handleModalOpen = () => {
    setPostModal(!postModal)

}

const handleSubmit = (event) => {
    event.preventDefault();
    uploadImage();
}

const handleDescriptionChange = (event) => {
    setImageDescription(event.target.value);
}

const [imageUpload, setImageUpload] = useState(null);
const [imageDescription, setImageDescription] = useState("");
const uploadImage = async () => {
    if(imageUpload == null){
        alert('select an image!');
        return;
    };
    const userName = tokenDecoded.id.name;
    const imageRef = ref(storage, `users/${userName}/${imageUpload.name + v4()}`);
    try{
        await uploadBytes(imageRef, imageUpload)
        alert("Image uploaded!");
        const imageUrl = await getDownloadURL(imageRef);
        console.log(imageUrl);
        const postData = {
            url: imageUrl,
            description:imageDescription,
            // alteração feita com sono de madrugada
            authorId: authorId
        }

        console.log(postData);

        const response = await axios.post(`${baseUrl}/post/create`, postData);
            if(response.status == 200){
                console.log('Data sent to database!')
            }
    }catch(error){
        console.error('Something went wrong!', error);
    }
}
    return(
        <div>
            <button onClick={handleModalOpen} className="text-slate-50 font-medium bg-green-600 rounded p-2">+ New Layout </button>
            {postModal && (
                  <div className="modal text-slate-50 w-[400px] h-[320px] rounded flex flex-col gap-5 fixed inset-1 items-center justify-center mx-[auto] my-[auto] bg-gray-700">
                  <div className="overlay w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed -z-10 bg-[rgba(49,49,49,0.8)]"></div>
                  <h2 className="text-3xl">Create a new design</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <label>Select your files: </label>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(event) => {setImageUpload(event.target.files[0])}} 
                        name="image"/>
                      
                      <input 
                        type="text" 
                        onChange={handleDescriptionChange}
                        name="description" 
                        className="p-4 text-black" 
                        placeholder="Set a description (optional)"/>
                      
                      <button className="bg-purple-600 transition-all ease-in hover:bg-purple-500">
                          Create
                      </button>
                      <button onClick={handleModalOpen} className="text-gray-500">Dismiss</button>
                  </form>
              </div>
            )}
          

        </div>
    )
}
export default NewPost;