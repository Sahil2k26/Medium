import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const pris=async (c:any,next:any)=>{

    const prisma=new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    c.set("prisma",prisma)
    await next()
    // if(!prisma){
    //   return ;
    // }
}