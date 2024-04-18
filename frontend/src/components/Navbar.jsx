import React, { useState } from 'react';
import ExitModal from "../components/ExitModal.jsx";


function Navbar({ handleSearch }){
    const [searchedString, setSearchedString] = useState('')
    const [openDrop, setOpenDrop] = useState(false);

    const handleOpenDrop = () => {
        setOpenDrop(!openDrop);
    }

    const handleInputChange = (event) => {
        const searchedString = event.target.value;
        setSearchedString(searchedString);
        handleSearch(searchedString);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        alert('sent')
        handleSearch(searchedString);
    }
    return(
        <nav className="w-full fixed flex justify-between px-6 py-2 items-center z-30">
            <div className="ghostDiv">
            </div>
            <form className=" w-[500px]"  onSubmit={handleSearchSubmit}>
            <input
                value={searchedString}
                onChange={handleInputChange}
                type="text" 
                className="rounded-xl w-[100%] p-2 border-[1px] bg-gray-50 border-gray-200 text-black" 
                placeholder="search...(feature may have some bugs)" 
                />
                </form>
            <div className="profile flex gap-5 items-center">
                <div className="profilePicture  bg-white w-10 h-10 rounded-full cursor-pointer" onClick={handleOpenDrop}>
                    <img 
                    src="https://goodnessbea.files.wordpress.com/2020/11/heather-silent-hill.jpg?w=630" 
                    alt="a profile image example" 
                    className="w-10 h-10 rounded-full"
                    />
                </div>
                {openDrop && (
                      <div className="dropdown bg-slate-50 px-6 py-2 rounded-sm absolute top-14 right-10 ">
                      <ul>
                          <li> <ExitModal /></li>
                      </ul>
                  </div>
                )}
           </div>
        </nav>
    )
}

export default Navbar;
