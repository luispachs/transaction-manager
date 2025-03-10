import {z} from 'zod';


export const LoginFormSchema = z.object({
    email:z.string({required_error:"Email is required", invalid_type_error:"Email isn\'t valid"}).email().toLowerCase(),
    password:z.string({required_error:"Email is required"})
})