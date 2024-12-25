import { useState } from "react"
import { Avatar } from "./Avatar"
import { useNavigate } from "react-router-dom";

export function AppBar() {
    const [search, setsearch] = useState("");
    const nav = useNavigate();
    const handleClick = () => {
        search

    }
    const handleInput = (e: any) => {
        setsearch(e.currentTarget.value)
    }
    return <div className="w-[100%] sticky top-0 px-12 py-4 flex justify-between bg-white border-2 border-gray-200 rounded-xl items-center">
        <span className="font-bold text-3xl font-mono">Medium</span>
        <div className="px-3 bg-gray-100  rounded-xl flex items-center justify-between">
            <input type="text" name="searchpost" id="searchposts" className="bg-transparent text-lg text-black px-3 rounded-xl py-2 focus:outline-none italic" placeholder="Search..." onInput={handleInput} />
            <button className="hover:bg-gray-200 p-1 flex justify-center items-center rounded-full" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>


        </div>
        <div className="flex w-[20%]  px-5 justify-evenly items-center">
            <button className="w-15 h-10  px-5 py-2 rounded-3xl text-black font-mono font-semibold text-md hover:font-bold hover:bg-gray-100  flex justify-center gap-2 items-center" onClick={() => {
                nav("/createPost")
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>

                <span>Write</span>
                


            </button>
            <Avatar size={10} c="S"></Avatar>
        </div>

    </div>
}