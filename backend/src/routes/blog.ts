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


blogRouter.post('/', async (c) => {
    // console.log(c.get("userId"));
    const body = await c.req.json()
    const authorId = c.get("userId")
    const response = createblogSchema.safeParse(body)
    if (!response.success) {
        c.status(400)
        return c.json({error:"Invalid format"})
    }

    try {
        const prisma = c.get("prisma")
        const post = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: parseInt(authorId)
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
            // where: {
            //     authorId: id
            // }
        })
        return c.json({
            posts: posts
        })
    } catch (e) {
        c.status(500)
        return c.json({
            error:"Server error"
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
            }
        })
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
