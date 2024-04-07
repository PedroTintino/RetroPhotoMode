import React, { useState } from "react";
import { storage } from "../config/firebase.config";
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { url } from "inspector";

function NewPost(){
const [postModal, setPostModal] = useState(false);
const handleModalOpen = () => {
    setPostModal(!postModal)
    console.log("Opened")
}

const handleSubmit = (event) => {
    event.preventDefault();
    uploadImage();
}

const [imageUpload, setImageUpload] = useState(null);
const uploadImage = async (event) => {
    if(imageUpload == null){
        alert('select an image!');
        return;
    };
    const imageRef = ref(storage, `users/${imageUpload.name + v4()}`);
    const uploadedImage = await uploadBytes(imageRef, imageUpload).then(() => {
        alert("Image uploaded!");
    });

    const imageUrl = await getDownloadURL(uploadedImage);

    const postData = {
        url: imageUrl,
        description:event.target.description.value
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