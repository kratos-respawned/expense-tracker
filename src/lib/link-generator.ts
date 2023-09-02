import { Resend } from 'resend';

const resend = new Resend("");
export async function sendWelcomeEmail(){
    const resp=await fetch("/api/mail");
    const data=await resp.json();
    console.log(data);
}
