import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY || 're_8uTCYsTh_5myth71C9c9isv2U1fb8zWL4';
    const resend = new Resend(apiKey);

    const body = await req.json().catch(() => null);

    if (!body || !body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['tahirycontact@gmail.com'],
      replyTo: email,
      subject: `Nouveau message de ${name} via le Portfolio`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2>Nouveau message reçu depuis votre portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p style="background: #f4f4f5; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}