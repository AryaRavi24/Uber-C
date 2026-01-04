import {object, z} from "zod";
import {zodResolver} from '@hookform/resolvers/zod'

export const loginSchema = z.object({
    email : z.string()
    .regex(/\S+@\S+\.\S+/,"Invalid email address!"),
    password : z.string()
    .min(8, "Password must contain at least 8 characters!")
})