import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from "hono/cors"
// cannot directly access prisma client without "c"

// to give type of2 env
// it tells what c.env will conatain 
const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET:string;
  }
  Variables:{
    userId:any
    prisma:any

  }
}>()
// const app=new Hono()
app.use("/*",cors());
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)









// type token ={
//   token:string
// }




export default app

