import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface Blog{
    content:string,
    title:string,
    id:number,
    createdAt:string,
    author:{
        name:string
    }
}
export const useBlogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogs,setblogs]=useState<Blog[]>([]);
    const token=localStorage.getItem("token");

    useEffect(()=>{
        try{
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,
                { headers:{
                      Authorization:"Bearer"+" "+token          
                    }
            
                }
            )
            .then(res=>{
                console.log(res);
                
                setblogs(res.data.posts);
                setLoading(false)
            })

        }catch(e:any){
            console.log(e);
            
        }
        
    },[])
    return {
        loading,blogs
    }
}
export const useBlog=(id:any)=>{
    
    const [loading,setLoading]=useState(true);
    const [blog,setBlog]=useState<Blog>({
        author:{name:"Anonymus"},
        content:"",
        title:"",
        createdAt:'2024-12-24',
        id:0
    });
    const [errMsg,seterrMsg]=useState("");
    const token=localStorage.getItem("token");
    console.log(id);
    
    if(typeof(id)!="string"){
        seterrMsg("Invalid")
        return {
            blog,loading,errMsg
        }
    }

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/`+id,
            { headers:{
                Authorization:"Bearer"+" "+token          
              }

            }
        ).then(res=>{
            if(res.data.blog){
                setBlog(res.data.blog)
            }
            else{
                seterrMsg(res.data.error)
            }
            setLoading(false)
        })
    },[])
    return {
        blog,loading,errMsg
    }
}