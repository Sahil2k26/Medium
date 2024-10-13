import { Hono } from "hono";
import { sign } from "hono/jwt";
import { pris } from "../middleware/db";
import { signupSchema } from "@sk_2024/medium-common/dist/zod";
import { loginSchema } from "@sk_2024/medium-common/dist/zod";
import  bcrypt  from "bcryptjs"

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
    Variables: {
        prisma: any

    }
}>();



userRouter.use("/*",pris);

userRouter.post('/signup', async (c) => {
    // using extends with accelerate we can go to connection pool


    const body = await c.req.json()
    const res = signupSchema.safeParse(body);
    if (!res.success) {
        c.status(400);
        return c.json({
            error:"Invalid format"
        })
    }
    try {
        const hashedpass=await bcrypt.hash(body.password,10);
        const prisma = c.get('prisma')
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: hashedpass,
                name: body.name
            }
        }
        )
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({ token: token })
        // return c.json({
        //   users:user
        // })

    } catch (e) {
        console.log(e);

        c.status(403)
        return c.json({
            error:"User already exists"
        })
    }



    // return c.text('Hello Hono!')
})
userRouter.post('/login', async (c) => {
    const body = await c.req.json()
    const res = loginSchema.safeParse(body)
    if (!res.success) {
        c.status(400);
        return c.json({
            error:"Invalid format"
        })
    }


    try {
        const prisma = c.get('prisma')
        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
        if (!user) {
            c.status(404)
            return c.json({error:"user not found"})
        }
        // const match=user.password==body.password;
        const match=await bcrypt.compare(body.password,user.password)
        if(!match){
            c.status(403)
            return c.json({
                error:"Incorrect Password!"
            })
        }
        
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({ token: token })
    } catch (e) {
        console.log(e);
        c.status(403)
        return c.json({
            error:"Invalid request"
        })

    }


})
