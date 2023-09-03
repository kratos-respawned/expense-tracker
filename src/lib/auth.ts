import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {env} from "@/env.mjs";
import {PrismaAdapter} from "@auth/prisma-adapter";
import Email from "next-auth/providers/email";
import { db } from "@/lib/db";
import { sendWelcomeEmail } from "./link-generator";
const authOptions: NextAuthOptions = {
    adapter:PrismaAdapter(db),
    session:{
        strategy:"jwt"
    },
    pages:{
        signIn:"/login"
    },
    providers:[
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET
        }),
        Email({
            sendVerificationRequest:async ({identifier,url})=>{
                await sendWelcomeEmail(url,identifier,env.SMTP_FROM);
            }            
        }),
    ],
callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name 
        session.user.email = token.email
        session.user.image = token.picture
      }
      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name || dbUser.email?.split("@")[0],
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    async signIn({ user}) {
      if(user.name){
        return true;
      }
      return "/login";
    }
  },
}

export {authOptions}