import LogoutIcon from "../assets/icons/Logout.svg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ExitModal() {
  const [exitModal, setExitModal] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => {
    setExitModal(!exitModal);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    console.log(token);
    navigate("/");
  }
  return (
    <div onClick={toggleModal} className="exitModalBtn ">
      <div className="flex  items-center cursor-pointer">
        <img src={LogoutIcon} alt="Um ícone de saída" className="w-6 h-6" />
        <span className="text-slate-900 font-medium">Log out</span>
      </div>
 {exitModal && (
     <div className="modal w-[400px] h-[200px] rounded flex fixed inset-1 items-center justify-center mx-[auto] my-[auto] bg-gray-700">
     <div className="overlay w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed -z-10 bg-[rgba(49,49,49,0.8)]"></div>
     <div className="modalContent text-slate-50 flex flex-col justify-between h-full">
       <div className="modalHeader border-b-2 shadow border-gray-500 p-2 uppercase">Are you leaving?</div>
       <div className="modalBody p-2">
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
             laudantium delectus neque eligendi? Hic, quaerat.
         </p>
       </div>
       <div className="modalBottom flex flex-col gap-2 p-2">
         <button className="closeModal bg-purple-600 font-medium transition-all ease-in cursor-pointer rounded text-slate-50 hover:bg-purple-500" onClick={toggleModal}>No, stay here</button>
         <button className="text-purple-700" onClick={logOut}>Log out</button>
       </div>
     </div>
   </div>
 )}
      </div>
  );
}
export default ExitModal;
