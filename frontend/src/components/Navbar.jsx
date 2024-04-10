import ExitModal from "../components/ExitModal.jsx";
import NewPost from "./NewPost.jsx";

function Navbar(){
    return(
        <nav className="w-100 flex justify-between p-2 items-center">
            <div className="ghostDiv">
            <NewPost />
            </div>
            <input type="text" className="rounded-xl p-2 border-[1px] w-[40%] bg-transparent border-gray-200 text-slate-50" placeholder="search bar coming soon" />
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
