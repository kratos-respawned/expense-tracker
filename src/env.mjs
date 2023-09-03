import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().url(),
        RESEND_API_KEY: z.string().min(1),
        GITHUB_ID: z.string().min(1),
        GITHUB_SECRET: z.string().min(1),
        NEXTAUTH_SECRET: z.string().min(1),
        SMTP_FROM: z.string().email(),
    },

    client: {

    },
    runtimeEnv: {
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        DATABASE_URL: process.env.DATABASE_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        SMTP_FROM: process.env.SMTP_FROM,
    }
});