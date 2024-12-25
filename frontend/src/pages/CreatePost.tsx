
import { Avatar } from "../components/Avatar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { blogshema } from "@sk_2024/medium-common/dist/zod"
import Loader from "../components/Loader";


export function CreatePost() {
    const [value, setValue] = useState('');
    const [Title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    const [errMsg, setErrMsg] = useState("");
    const [drafting,setDraft]=useState(false);
    const [publishing,setPublish]=useState(false);
    const nav = useNavigate()
    const handlePublish = async (publish:boolean) => {
    
        

        console.log("called ");

        console.log(token);


        if (!token) {
            nav("/login")
            return;
        }
        if (Title == "" || value == "") {
            setErrMsg("Both title and content are required")
            return;
        }
        if(publish==false) setDraft(true);
        else setPublish(true);
        setLoading(true)
        const data: blogshema = {
            title: Title,
            content: value,
            published:publish
        }
        console.log(data);

        try {
            axios.post(`${BACKEND_URL}/api/v1/blog/createBlog`, data,
                {
                    headers: {
                        Authorization: "Bearer" + " " + token
                    }

                }).then((res) => {
                    setDraft(false)
                    setPublish(false)
                    setLoading(false)
                    if (res.status == 200) {
                        alert("Published Sucessfully!")
                        setTitle("")
                        setValue("")

                    }
                    else {
                        setErrMsg(res.data.error)
                    }

                })
        }
        catch (e:any) {
            setErrMsg(e)
        }


    }
    return <div className="w-[100vw] h-[100vh] flex flex-col items-center overflow-x-hidden">
        <div className="w-[70%] px-10 py-3 flex items-center justify-between ">
            <div className="flex px-6 py-2 w-[35%] gap-3 items-end ">
                <span className="text-4xl font-mono font-bold text-black "> Medium </span>
                <span className="text-lg text-gray-600  font-serif ">Draft in</span>
                <span className="text-lg text-gray-600 font-serif ">{"kansalsahil"}</span>
            </div>

            <div className="flex gap-4 px-6 py-2 items-center">
                <button className="px-2 py-1 rounded-full border-2 border-black hover:bg-gray-100 flex" disabled={drafting}  onClick={async ()=>{  
                    await handlePublish(false);
                }
                } >
                    {loading?<><span>{"Drafting..."}</span>
                    <Loader color="black" size={5}></Loader></>:"Save as Draft"}
                </button>
                 
                <button className="px-3 py-1 rounded-xl bg-gradient-to-r from-purple-400 to-blue-300 text-white  font-semibold hover:font-bold flex " disabled={publishing} onClick={async()=>{
                
                    await handlePublish(true)
        
                    }}>{loading==true ?<><span>{"Publishing..."}</span>
                    <Loader color="white" size={5}></Loader></>:"Publish"}

                    </button>
            
                <Avatar c="S" size={10}></Avatar>
            </div>


        </div>
        <div className={`${errMsg == "" ? "hidden" : "block"} w-[60%] relative px-3 py-1 flex justify-between bg-rose-100 rounded-lg`}>
            <span className={` text-red-500 text-start text-base `}>{errMsg}</span>
            <button className="align-top hover:bg-rose-200 rounded-full p-1" onClick={()=>{setErrMsg("")}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            
        </div>

        <main className="w-[60%] p-5 flex flex-col items-start border-l-2 border-gray-400 rounded-2xl">
            {/* <div className="text-5xl font-serif font-bold text-black border-l-2 border-gray-400 ">
                <input type="text" placeholder="Title" className="focus:outline-none p-4" />
            </div>
            <div className="w-full text-3xl font-serif font-medium text-black black border-l-2 border-gray-400">
            
                <input type="text" placeholder="Tell your story.." className="h-[50vh] w-full focus:outline-none px-4 py-7 overflow-y-scroll" />
            </div> */}
            <div className="text-5xl font-serif font-bold text-black ">
                <input value={Title} type="text" placeholder="Title" className="focus:outline-none p-4" onInput={(e) => setTitle(e.currentTarget.value)} />
            </div>
            <ReactQuill theme="snow" value={value} onChange={setValue} className="w-full p-5 text-3xl h-[65vh] font-serif font-medium text-black rounded-xl" placeholder="Tell your story..." />

        </main>

    </div>
}

