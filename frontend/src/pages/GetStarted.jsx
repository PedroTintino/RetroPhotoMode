function GetStarted(){
    return(
        <div className="mainContainer min-h-screen w-full flex items-center justify-center bg-[url('https://im4.ezgif.com/tmp/ezgif-4-3d2ccd01b2.gif')] bg-cover bg-center">            
            <div className="textContainer text-white text-center z-10 leading-8">
                <h1 className="text-4xl">RetroView: Reborn</h1>
                <p className="text-xl">A place to place your mind.</p>
                <p>Create your own dinamic gallery design for your favorite games.</p>
                <button className="bg-blue-900 rounded p-1 border-2 border-blue-900 mr-4 mt-2 hover:bg-transparent">Get Started</button>
                <button className="bg-transparent p-1 border-blue-900 border-2 rounded">Demo</button>
            </div>
        </div>
    )
}

export default GetStarted