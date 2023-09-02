
import TailwindProvider from '@/components/tailwind-provider';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'Signin Mail <onboarding@resend.dev>',
      to: ['sbhandari1907@protonmail.com'],
      subject: 'Hello world',
      react:TailwindProvider(1)
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
