import { Hono } from "hono";
import { pris } from "../middleware/db";
import { auth } from "../middleware/auth";
import { createblogSchema } from "@sk_2024/medium-common/dist/zod"
import { updateblogSchema } from "@sk_2024/medium-common/dist/zod";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
    Variables: {
        userId: any
        prisma: any

    }
}>()



blogRouter.use("/*", pris);
blogRouter.use("/*", auth);


blogRouter.post('/createBlog', async (c) => {
    // console.log(c.get("userId"));
    const body = await c.req.json()
    const authorId = c.get("userId")
    const response = createblogSchema.safeParse(body)
    if (!response.success) {
        console.log(body);
    
        c.status(400)
        return c.json({error:"Invalid format"})
    }

    try {
        const prisma = c.get("prisma")
        const post = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: parseInt(authorId),
                published:body.published

            }
        })
        return c.json({
            id: post.id
        })

    } catch (e) {
        console.log(e);
        c.status(500)
        return c.json({
            error:"Server error"
        })

    }




})
blogRouter.put("/", async (c) => {
    const body = await c.req.json()
    const response = updateblogSchema.safeParse(body)
    if (!response.success || !body.id) {
        c.status(400)
        return c.json({error:"Invalid format"})
    }

    try {
        const prisma = c.get("prisma")
        const post = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })
        return c.json({
            id: post.id
        })

    } catch (e) {
        console.log(e);
        c.status(404)
        return c.json({
            error:"post doesnt exists"
        })

    }


})
blogRouter.get("/bulk", async (c) => {
    // const id = c.get("userId")
    // console.log(id);

    try {
        const prisma = c.get("prisma")
        const posts = await prisma.blog.findMany({
            select:{
                title:true,
                content:true,
                id:true,
                createdAt:true,
                author:{
                    select:{
                        name:true
                    }
                },
               
            },
            where: {
                published:true
            }
        })
        return c.json({
            posts: posts
        })
    } catch (e) {
        console.log(e);
        
        c.status(500)
        return c.json({
            error:"Server error"
        })
    }

})
blogRouter.get("/myposts",async (c)=>{
    const prisma=c.get("prisma");
    const id=c.get("userId");
    console.log(id);
    
    try{
        const p=await prisma.blog.findMany({
            where:{
                authorId:id
            },
            select:{
            
                title:true,
                content:true,
                id:true,
                createdAt:true,
                author:{
                    select:{
                        name:true
                    }
                },
                published:true

                
                
    
            }
    
    
        })
        return c.json({
            posts:p
        })

    }catch(e){
        console.log(e);
        c.status(500);
        return c.json({
            error:"server Error"
        })
        
    }
    
})
blogRouter.get("/:id", async (c) => {
    const id = c.req.param('id')
    try {
        const prisma = c.get("prisma")
        const blog = await prisma.blog.findUnique({
            where: {
                id: parseInt(id)
            },
            select:{
                title:true,
                content:true,
                id:true,
                createdAt:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }

        })
        if(!blog) return c.json({
            error:"Blog Does not Exists"
        },404)
        return c.json({
            blog: blog
        })
    } catch (e) {
        console.log(e);

        c.status(500)
        return c.json({
            error:"Server error"
        })
    }

})

blogRouter.delete("/deleteAll",async (c)=>{
    const prisma=c.get("prisma")
    await prisma.blog.deleteMany();
    return c.json({
        msg:"Done"
    })
})
