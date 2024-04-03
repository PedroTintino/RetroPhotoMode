import Navbar from "../components/Navbar";

function Demo(){
    return(
        <div className="bg-slate-950 h-screen ">
            <Navbar />
            <div className="introText text-slate-50 p-6 text-center text-xl h-full flex gap-2 flex-col justify-center leading-9 items-center">
                <h2 className="text-4xl font-semibold">RetroView: Photomode</h2>
                <h4>Welcome to your gallery, <span>Heather!</span></h4>
                <p>Our purpose is giving to all of you the best unique <br/> experiene for your retro and favorite games.</p>
            </div>
        </div>
    )
}
export default Demo;