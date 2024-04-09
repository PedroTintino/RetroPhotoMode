function Post({ imageUrl, description }){
    return(
        <div className="bg-slate-900 overflow-hidden shadow-md h-auto p-4 text-gray-400 font-medium text-lg">
            <img src={imageUrl} alt="A card component." className="w-full" />
            <span>{description}</span>
        </div>
    )
}
export default Post;