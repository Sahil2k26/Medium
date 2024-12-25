interface input{
    quote:string,
    company:string,
    writer:string
}

export const Qoute=({quote,company,writer}:input)=>{
    return <div className="invisible lg:visible w-[0%] lg:w-[50%] h-full bg-slate-200 flex justify-center items-center text-black text-2xl font-bold gap-4 ">
        <div className=" w-[65%] p-4 flex flex-col items-start  gap-4">
            <p>
                "{quote}"
            </p>
            <div className="flex flex-col items-start">
            <span className=" text-base"> {writer} </span>
            <span className="text-sm text-gray-400">{company}</span>
            </div>
            
        </div>

    </div>
}