import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"
import parse from "html-react-parser"
import { useState } from "react";

interface input{
    type:boolean
    authorName:string,
    publishedDate:string,
    title:string,
    content:any,
    id:number,
    published?:boolean
}
const getFirstTag = (htmlString: string): string | string => {
    // Create a DOM parser
    const parser = new DOMParser();
    
    // Parse the HTML string into a document
    const doc = parser.parseFromString(htmlString, "text/html");
  
    // Get the first element
    const firstElement = doc.body.firstElementChild;
  
    // Return the outer HTML of the first element (or null if not found)
    return firstElement ? firstElement.outerHTML : htmlString;
  };
export function Blog({type,authorName,publishedDate,title,content,id,published}:input){
    const [likeToggle,setLikeToggle]=useState(false);
    const [optionToggle,setoptionToggle]=useState(false);
    const handleClick=()=>{
        setLikeToggle((t)=>!t);
    }
    
    return <div className="flex flex-col px-5 py-4 items-start justify-evenly border-b-2 border-gray-300 rounded-md max-w-xl lg:w-screen lg:max-w-screen-sm bg-white">
        <div className="flex items-center gap-2 mb-3">
            <Avatar size={5} c={authorName[0]}></Avatar>
            <span className="text-black font-normal text-sm">{authorName}</span>
            <div className="w-1 h-1 rounded-full bg-slate-600"></div>
            <span className="text-gray-500 text-sm font-normal  ">{publishedDate}</span>
            {type && <div className={`${published?"text-green-500 border-green-500":"text-yellow-500 border-yellow-500"} border-2 px-2 py-1 text-sm rounded-lg` }>
                {published?"Public":"Draft"}
                </div>}
        </div>
        <Link to={`/blog/${id}`}>
            <span className="text-2xl font-bold text-black">"{title}"</span>
            <span className="">{parse(getFirstTag(content))}...</span>
        </Link>
        <div className="flex items-center justify-between px-3 py-1 gap-4 w-full border-t-2 border-gray-100    "> 
                    <div className="flex items-center gap-4">
                    <button onClick={handleClick} className="flex items-center gap-2 italic hover:bg-gray-100 rounded-full p-2" >
                        {likeToggle?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                        </svg>
                      :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        }{"22k"}
                    </button>
                    <button className="flex items-center gap-2 italic hover:bg-gray-100 rounded-full p-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>{"500"}
                    </button>
                    </div>
                    {type && 
                    <button className="flex justify-center items-center self-end hover:bg-gray-100 rounded-full p-2" onClick={()=>setoptionToggle((t)=>!t)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>}

                    
   
        </div>


    </div>
   
}
