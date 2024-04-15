function Post({ imageUrl, description }){
    return(
        <article className="bg-slate-900 rounded-sm overflow-hidden h-auto w-auto shadow-md p-6 text-gray-400 font-normal text-lg">
            <img src={imageUrl} alt="A card component." className="w-full h-full object-fill"  />
            <span className="p-2">{description}</span>
        </article>
    )
}
export default Post;
