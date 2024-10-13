import {z} from "zod"

export const createblogSchema = z.object({
    title: z.string(),
    content: z.string(),

})
export const updateblogSchema = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()

})
export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string().optional()
})
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})
export type updateblogSchema=z.infer<typeof updateblogSchema>
export type blogshema=z.infer<typeof createblogSchema>
export type signupSchema=z.infer<typeof signupSchema>
export type loginSchema=z.infer<typeof loginSchema>