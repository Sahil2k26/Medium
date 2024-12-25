export function Avatar({c,size=6}:{c:string,size?:number} ){
    return <div className={`w-${size} h-${size} rounded-full bg-purple-300 text-black font-medium ${size>6?"text-lg":"text-xs"} flex justify-center items-center p-3`}>
        {c}
    </div>
}