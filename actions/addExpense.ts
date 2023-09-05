"use server"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db";
import { ExpenseSchema } from "@/zod/ExpenseSchema";
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache";
import {  z } from 'zod';

export const addExpense = async (data: FormData) => {
    const form = Object.fromEntries(data.entries());
    try {
        
        const parsedData = ExpenseSchema.parse(form);
        const session = await getServerSession(authOptions);
        
        if (!session) {
            return {
                error: "You are not logged in"
            }
        }
        
        const { user } = session;
        const expense = await db.expense.create({
            data: {
                amount: parseInt(parsedData.amount),
                name: parsedData.name,
                date: new Date(parsedData.date),
                user: {
                    connect: {
                        id: user.id
                    }
                },
                category: parsedData.category
            }
        }).catch((e) => {
            return {
                error: "Something went wrong"
            }
        });

        revalidatePath("/");


    } catch (e) {
        if (e instanceof z.ZodError) {
            return {
                error: "Validation error"
            }
        } else {
            console.log(e);
        }
    }
}