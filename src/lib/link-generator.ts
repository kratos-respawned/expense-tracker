
import { WelcomeEmail } from '@/components/Email';
import { env } from '@/env.mjs';
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);
export async function sendWelcomeEmail(url:string,recipient:string,from:string){
  
    try {
        const data = await resend.emails.send({
          from: from,
          to: [recipient],
          subject: 'Signin Link',
          react:WelcomeEmail({ url:url})
        });
      } catch (error) {
        console.error(error);
      }
}

