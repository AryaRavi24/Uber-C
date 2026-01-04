import {object, z} from "zod";
import {zodResolver} from '@hookform/resolvers/zod'

export const registerSchema = z.object({
    name : z.string()
    .min(3,"Name field required!"),
    phoneNo : z.string()
    .min(1,"Phone Number required!")
    .regex(/^[6-9]\d{9}$/, "Invalid Phone Number!"),
    email : z.string()
    .email("Email required")
    .regex(/\S+@\S+\.\S+/, "Invalid email address!"),
    password : z.string()
    .min(8,"Password must be at least 8 charcaters"),
    confirmPass : z.string(),
}).refine((datas) => datas.password === datas.confirmPass,{
    message :"Password do not match",
    path :['confirmPass'],
})