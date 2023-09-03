import { z } from 'zod';

export const ExpenseSchema = z.object({
    name: z.string().min(1).max(255),
    amount: z.number().min(0.01),
    date: z.date().refine((date) => date <= new Date(), {
        message: 'Date must be in the past'
    }),
});

export type Expense = z.infer<typeof ExpenseSchema>;