import z from 'zod';

export const registrationSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'Name is required')
      .max(50, 'Full Name cannot exceed 50 characters'),
    email: z.string().min(1, 'Email is required').pipe(z.email('Enter a valid email address')),
    password: z.string().min(8, 'Password must contain at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords dont match',
    path: ['confirmPassword'],
  });

export type registrationSchemaType = z.infer<typeof registrationSchema>;

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').pipe(z.email('Enter a valid email address')),
  password: z.string().min(8, 'Password must contain at least 8 characters'),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
