
import TailwindProvider from '@/components/tailwind-provider';
import { env } from '@/env.mjs';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'noreply@example@mail.com',
      to: ['example@mail.com'],
      subject: 'Signin Link',
      text: 'Signin Link 😘😘😘'
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
