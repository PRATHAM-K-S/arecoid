import * as z from "zod";

export const contactFormSchema = z.object({
  full_name: z
    .string()
    .min(3, "Full name must be at least 3 characters long")
    .max(50, "Full name must be at most 50 characters long"),
  company: z
    .string()
    .min(3, "Company name must be at least 3 characters long")
    .max(50, "Company name must be at most 50 characters long"),
  country: z
    .string()
    .min(3, "Country must be at least 2 characters long")
    .max(100, "Country must be at most 100 characters long"),
  email: z.email("Please Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 characters long")
    .optional(),
  message: z
    .string()
    .max(1000, "Message must be at most 1000 characters long")
    .optional(),
  fax_number: z.string().optional(),
});
