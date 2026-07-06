import { z } from 'zod';

export const questionSchema = z.object({
  question: z
    .string()
    .trim()
    .min(10, 'Question must contain at least 10 characters!')
    .max(500, 'Question cannot exceed 500 characters!'),
});

export type QuestionFormData = z.infer<typeof questionSchema>;
