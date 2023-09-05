import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().url(),
        RESEND_API_KEY: z.string().min(1),
        GITHUB_ID: z.string().min(1),
        GITHUB_SECRET: z.string().min(1),
        GOOGLE_ID: z.string().min(1),
        GOOGLE_SECRET: z.string().min(1),
        NEXTAUTH_SECRET: z.string().min(1),
        NEXTAUTH_URL: z.string().url(),
        SMTP_FROM: z.string().email(),
    },

    client: {
        NEXT_PUBLIC_HOMEPAGE_URL: z.string().url(),
    },
    runtimeEnv: {
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        GOOGLE_ID: process.env.GOOGLE_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        DATABASE_URL: process.env.DATABASE_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        SMTP_FROM: process.env.SMTP_FROM,
        NEXT_PUBLIC_HOMEPAGE_URL: process.env.NEXT_PUBLIC_HOMEPAGE_URL,
    }
});