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

export const checkoutSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  postalCode: z.string().min(1, { message: "Postal Code is required" }),
});
export type CheckoutSchema = z.infer<typeof checkoutSchema>;
