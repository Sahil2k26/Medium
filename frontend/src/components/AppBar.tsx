import { useState } from "react"
import { Avatar } from "./Avatar"
import { useNavigate } from "react-router-dom";

export function AppBar() {
    const [search, setsearch] = useState("");
    const [optionToggle,setoptionToggle]=useState(false);
    const nav = useNavigate();
    const handleClick = () => {
        search

    }
    const handleInput = (e: any) => {
        setsearch(e.currentTarget.value)
    }
    return <div className="w-[100%] sticky top-0 px-12 py-4 flex justify-between bg-white border-2 border-gray-200 rounded-xl items-center ">
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
            <div className="flex flex-col gap-4 static">
                <button onClick={()=>setoptionToggle((t)=>(!t))}>
                    <Avatar size={10} c="S"></Avatar>
                </button>
                {optionToggle && 
                    <div className="px-5 py-7 bg-white border-2 rounded-lg flex flex-col shadow-sm absolute  z-10  top-16  right-5">
                        <button className="py-2 border-y-2 border-gray-200 px-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <span>settings</span></button>
                        <button className="bg-black px-3 py-2 text-base text-white font-semibold rounded-xl mt-5" onClick={()=>{
                            localStorage.removeItem("token");
                            nav("/")
                            alert("Logged Out Successfully!")
                            
                        }}>Logout</button>
                    </div>
                }
            </div>
           
            
        </div>

    </div>
}