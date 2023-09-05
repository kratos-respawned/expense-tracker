import { PrismaClient } from '@prisma/client'

declare global {
    var cachedClient: PrismaClient
}
let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
    console.log('Creating new Prisma Client in production mode');
    prisma = new PrismaClient();
}
else {
    if (!global.cachedClient) {
        console.log('Creating new Prisma Client');
        global.cachedClient = new PrismaClient();
    }
    console.log('Using cached Prisma Client');
    prisma = global.cachedClient;
}
export const db = prisma;