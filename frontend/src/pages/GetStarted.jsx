import { Link } from "react-router-dom"
import LoginModal from "../components/LoginModal"
import { useState } from "react"

function GetStarted(){
const [showModal, setShowModal] = useState(false);
    return(
        <div className="mainContainer min-h-screen w-full flex items-center justify-center bg-[url('src/assets/tlou-loading-screen.gif')] bg-cover bg-center">            
            <div className="textContainer text-white text-center z-10 leading-8">
                <h1 className="text-4xl"><span className="text-purple-800 text-5xl font-semibold">RetroView:</span> Reborn</h1>
                <p className="text-xl">A place to place your mind.</p>
                <p>Create your own dinamic gallery design for your favorite <s>retro</s> games.</p>
                <button onClick={() => setShowModal(true)} className="bg-purple-900 rounded p-1 border-2 border-purple-900 mr-4 mt-2 hover:bg-transparent">Get Started</button>
                <button className="bg-transparent p-1 border-purple-900 border-2 rounded">Demo</button>
            </div>
            {showModal ? (
            <LoginModal />
        ) : null}
        </div>
    )
}

export default GetStarted