
import { useBlogs } from '../hooks';
import Loader from './Loader';
import { Blog } from './Blog';

export const MyPosts=()=>{
    const {loading,blogs}=useBlogs(true);
        
        return <div className="w-[60%]  ">
            <div className='bg-white w-[70%] flex flex-col justify-center items-center '>
            {loading?<>
            <Loader  color="black"></Loader>
            <span>Loading...</span>
            </>
        
        : <>{

            blogs.map((b)=>{
            return <Blog 
            type={true}
            id={b.id}
            authorName={b.author.name || "Anonymus"} 
            title={b.title} 
            content={b.content}
            publishedDate={b.createdAt.split('T')[0]}
            key={b.id}
            published={b.published}
            >
            
            </Blog>
            

        })}
        </>}

            </div>
            
        {/* <Blog authorName="Sahil Kansal" 
        title="How an ugly single page website makes $5000 a month withoutt affiliate marketting"
        content="How an ugly single page website makes $5000 a month withoutt affiliate marketting How an ugly single page website makes $5000 a month withoutt affiliate marketting"
        publishedDate="13 Oct 2024"></Blog> */}

        </div>
}