import { verify } from "hono/jwt";


export const auth=async (c:any, next:any) => {
    const t = c.req.header("Authorization")
    const ar = t?.split(" ")
    if (ar?.length != 2) {
        console.log("error in auth");
        console.log(t);
        
        c.status(400);
        return c.json({
            error:"Invalid format"
        })
    }
    const token = ar[1];
    try {
        const { id } = await verify(token, c.env.JWT_SECRET) || 0
        // console.log(user);

        c.set("userId", id)
        await next()
    } catch (e) {
        c.status(403)
        return c.json({ error: "unauthorized" })
    }



}