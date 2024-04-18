function Post({ imageUrl, description }){
    return(
        <article className="bg-slate-900 rounded-sm overflow-hidden h-auto w-auto shadow-md p-6 text-gray-400 font-normal text-lg">
            <span className="text-red-600">here</span>
            <img src={imageUrl} alt="A card component." className="w-full h-full object-fill"  />
           
        </article>
    )
}
export default Post;
