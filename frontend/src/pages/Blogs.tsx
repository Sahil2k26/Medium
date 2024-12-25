import { AppBar } from "../components/AppBar";
import { Blog } from "../components/Blog";
import Loader from "../components/Loader";
import { useBlogs } from "../hooks";


export default function Blogs (){
    const token=localStorage.getItem("token");
    if(!token){
        return <div className="w-[100vw] h-[100vh] flex justify-center items-center text-4xl font-semibold text-black ">
            Error 404 :(
            
        </div>
    }
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div className="w-[100vw] h-[100vh] flex justify-center items-center text-4xl font-semibold  flex-col">
            <Loader size={9} color="black"></Loader>
            <span>Loading...</span>
        </div>
    }
    return <div className="w-[100vw] h-[100vh] flex flex-col items-center relative overflow-x-hidden bg-gradient-to-r from-purple-400 to-blue-300">
        <AppBar></AppBar>
        <div className="w-[60%] flex flex-col items-start justify-center">
        {blogs.map((b)=>{
            return <Blog 
            id={b.id}
            authorName={b.author.name || "Anonymus"} 
            title={b.title} 
            content={b.content}
            publishedDate={b.createdAt.split('T')[0]}
            key={b.id}></Blog>

        })}
        {/* <Blog authorName="Sahil Kansal" 
        title="How an ugly single page website makes $5000 a month withoutt affiliate marketting"
        content="How an ugly single page website makes $5000 a month withoutt affiliate marketting How an ugly single page website makes $5000 a month withoutt affiliate marketting"
        publishedDate="13 Oct 2024"></Blog> */}

        </div>
    </div>
}