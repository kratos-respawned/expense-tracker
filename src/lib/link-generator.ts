import { Resend } from 'resend';

export async function sendWelcomeEmail(){
    const resp=await fetch("/api/mail");
    const data=await resp.json();
    console.log(data);
}
