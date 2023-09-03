"use server"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db";
import { getServerSession } from "next-auth"
import { date, z } from 'zod';
enum Category {
    Travel = "TRAVEL",
    Food = "FOOD",
    Entertainment = "ENTERTAINMENT",
    Shopping= "SHOPPING"
}
const ExpenseSchema = z.object({
    name: z.string().min(1).max(255),
    amount: z.string().min(1).max(255),
    date: z.string(),
    category: z.nativeEnum(Category)
});

export type Expense = z.infer<typeof ExpenseSchema>;
export const addExpense = async (data: FormData) => {
    const form = Object.fromEntries(data.entries());
    try {
        const parsedData = ExpenseSchema.parse(form);
        // const session = await getServerSession(authOptions);
        // // const session=undefined;
        // if (!session) {
        //     throw new Error("Not authenticated");
        // }
        console.log(parsedData);
        // const { user } = session;
        // const expense = await db.expense.create({
        //     data: {
        //         amount: parseInt(parsedData.amount),
        //         name: parsedData.name,
        //         date: new Date(parsedData.date),
        //         user: {
        //             connect: {
        //                 id: user.id
        //             }
        //         },
        //         category: parsedData.category
        //     }
        // }).catch((e) => {
        //     console.log(e);
        //     return null;
        // });
        // console.log(expense);


    } catch (e) {
        if (e instanceof z.ZodError) {
            console.log(e.issues);
            return "Validation error"
        } else {
            console.log(e);
        }
    }
}