import { useState } from "react";
import { AppBar } from "../components/AppBar";
import { Fyp } from "../components/Fyp";
import { MyPosts } from "../components/MyPosts";



export default function Blogs (){

    const token=localStorage.getItem("token");
    if(!token){
        return <div className="w-[100vw] h-[100vh] flex justify-center items-center text-4xl font-semibold text-black ">
            Error 404 :(
            
        </div>
    }
    const [toggle,setToggle]=useState(false);
    return <div className="w-[100vw] h-[100vh] flex flex-col items-center relative overflow-x-hidden bg-gradient-to-r from-purple-400 to-blue-300">
        <AppBar></AppBar>
        
        <div className="flex w-[60%] ">
            <button className={`${toggle?"bg-gray-100 brightness-[0.8]":"bg-white font-bold "}  px-5 py-3 text-lg font-mono hover:bg-black hover:text-white hover:font-semibold  rounded-xl rounded-b-none`} onClick={()=>{
                if(!toggle) return;
                setToggle((t)=>!t);
            }}>For you</button>
            <button className={`${!toggle?"bg-gray-100 brightness-[0.8]":"bg-white font-bold "}  px-5 py-3 text-lg font-mono hover:bg-black hover:text-white hover:font-semibold  rounded-xl rounded-b-none`} onClick={()=>{
                if(toggle) return;
                setToggle((t)=>!t);
            }}>My Posts</button>

        
        </div>
        {toggle?<MyPosts></MyPosts>:<Fyp></Fyp>}
    </div>
}