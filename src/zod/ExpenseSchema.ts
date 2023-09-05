import { z } from 'zod';

enum Category {
    Travel = "TRAVEL",
    Food = "FOOD",
    Entertainment = "ENTERTAINMENT",
    Shopping= "SHOPPING"
}
export const ExpenseSchema = z.object({
    name: z.string().min(1).max(255),
    amount: z.string().min(1).max(255),
    date: z.string(),
    category: z.nativeEnum(Category)
});

export type Expense = z.infer<typeof ExpenseSchema>;