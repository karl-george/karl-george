import Email from '@/components/Email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL!;

export async function POST(req: any) {
  const { name, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: 'Thanks for the email!',
      react: Email({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
