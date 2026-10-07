import z from 'zod';

export const registrationSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'Name is required')
      .max(50, 'Full Name cannot exceed 50 characters'),
    email: z.email(),
    password: z.string().min(8, 'Password must contain at least 8 characters!'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords dont match',
    path: ['confirmPassword'],
  });

export type registrationSchemaType = z.infer<typeof registrationSchema>;
