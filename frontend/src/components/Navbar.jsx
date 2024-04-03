import ExitModal from "../components/ExitModal.jsx";

function Navbar(){
    return(
        <nav className="w-100 flex justify-between p-2 items-center">
           <button className="text-slate-50 font-medium bg-green-600 rounded p-2">+ New Layout </button>
            <div className="profile flex gap-5 items-center">
                <div className="profilePicture  bg-white w-10 h-10 rounded-full">
                    <img 
                    src="https://goodnessbea.files.wordpress.com/2020/11/heather-silent-hill.jpg?w=630" 
                    alt="a profile image example" 
                    className="w-10 h-10 rounded-full"
                    />
                </div>
                <ExitModal />
           </div>
        </nav>
    )
}

export default Navbar;
