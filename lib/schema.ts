import * as z from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  name: z.string().min(1, { message: "Name is required" }),
});
export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = registerSchema.pick({ email: true, password: true });
export type LoginSchema = z.infer<typeof loginSchema>;
