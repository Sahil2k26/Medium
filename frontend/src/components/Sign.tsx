import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { loginSchema, signupSchema } from "@sk_2024/medium-common/dist/zod"
import { BACKEND_URL } from "../config";
import Loader from "./Loader";
type input={
    type:Number
}
export const Sign = ({type}:input) => {
    const nav = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setError] = useState("");
    const [errToggle, setToggle] = useState(false)
    const [load, setLoad] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isInput, setInput] = useState(false);

    const handleClick = async () => {
        setLoad(true)
        if ( (type==0?(name==""):(0)) || email == "" || password == "") {
            setError("All feilds are Required!")
            setToggle(true);
            setLoad(false)
            return;
        }
        setToggle(false)
        const data: signupSchema = {
            email: email,
            password: password,
            name: name
        }
        const data2: loginSchema ={
            email:email,
            password:password
        }
        try {
            const d = await axios.post(`${BACKEND_URL}/api/v1/user/${ (type==0)?"signup":"login"}`,
                (type==0)?data:data2
            )
            if (d.status == 200) {
                localStorage.setItem("token", d.data.token)
                alert("Logged in Successfully");
                nav("/blogs")
            }

        }
        catch (e: any) {
            console.log(e);
            // alert(e);
            setToggle(true)
            setError(e.response.data.error)

        }
        setLoad(false)

    }

    return <div className="w-[100%]  lg:w-[50%]  h-full flex justify-center items-center bg-white">
        <div className="w-[60%]  lg:w-[50%] h-[75%] p-2 flex flex-col justify-evenly items-center ">
            <div className=" flex flex-col text-center">
                <span className="text-4xl font-bold text-black  ">{type==0?"Create an account":"Login to your account"}</span>
                <div className="flex p-1 items-center justify-center">
                    <span className="text-gray-600 text-base">{type==0?"Already have an account ?":"Don't have an account ?"}</span>
                    <button className=" border-none bg-transparent p-1 text-blue-500 text-base underline" 
                    onClick={() => {

                        type==0?nav("/login"):nav("/signup")
                    }}>{type==0?"Login":"Signup"}</button>
                </div>

            </div>

            <div className="w-[80%] p-1 flex flex-col gap-2">
                <span className={`${errToggle == true ? "block h-5" : "hidden h-0"} text-lg text-rose-500 font-medium `}>{errMsg}</span>
                <div className={`${type==0?"block":"hidden h-0 w-0"}  flex flex-col gap-2 items-start`}>
                    <span className="text-sm font-bold text-black ">Username</span>
                    <input className={`m-auto w-[90%] px-3 py-2 rounded-md border-2 border-black  ${name != "" ? "text-black" : "text-gray-400"} `} type="text" name="username" id="username" placeholder="Enter your Username"
                        onInput={(e) => { setName(e.currentTarget.value) }}
                    />
                </div>
                <div className="flex flex-col gap-2 items-start ">
                    <span className="text-sm font-bold text-black ">Email</span>
                    <input className={`m-auto w-[90%] px-3 py-2 rounded-md border-2 border-black  ${email != "" ? "text-black" : "text-gray-400"} `}
                        type="text" name="email" id="email" placeholder="m@example.com"
                        onInput={(e) => { setEmail(e.currentTarget.value) }} />
                </div>
                <div className="flex flex-col gap-2 items-start ">
                    <span className="text-sm font-bold text-black ">Password</span>
                    {/* <input className="m-auto w-[90%] px-3 py-2 rounded-md border-2 border-black text-black " type="password" name="password" id="password" placeholder=""  
                        onInput={(e)=>{
                            setPassword(e.currentTarget.value)
                        }} /> */}


                    <div className="m-auto w-[90%] border-2 border-black rounded-lg flex items-center">
                        <input
                            className="focus:outline-none w-full px-3 py-2 border-1 border-black rounded-lg text-lg"
                            type={visible ? "text" : "password"}
                            name="password"
                            id="password"
                            onInput={(e) => {
                                e.currentTarget.value != "" ? setInput(true) : setInput(false);
                                setPassword(e.currentTarget.value);
                            }}
                        />
                        {isInput && (
                            <button
                                className="flex justify-center items-center relative right-[3px] w-10 h-9 bg-transparent rounded-full hover:bg-gray-200"
                                onClick={() => setVisible((v) => !v)}
                            >
                                {visible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>
                </div>


            </div>
            <button className="w-[80%] bg-black px-4 py-3 text-white text-center font-semibold text-lg rounded-xl flex justify-center items-center hover:bg-slate-800"
             onClick={handleClick} >{load == true ? <Loader color="white"></Loader> : type==0?"Sign Up":"Login"}</button>

        </div>
    </div>
}