import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { empresa, email, telefono, operacion } = await req.json();

  if (!empresa || !email) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "LIVIO Contacto <onboarding@resend.dev>",
    to: ["tescalante@liviogistics.com", "tfuentealba@liviogistics.com"],
    replyTo: email,
    subject: `Nueva empresa piloto: ${empresa}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
        <h2 style="color:#071A17;margin-bottom:8px">Nueva solicitud de piloto</h2>
        <p style="color:#6B7280;font-size:14px;margin-bottom:24px">Alguien completó el formulario de la landing.</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:10px 12px;background:#F3F4EF;font-weight:600;color:#1A1A1A;width:140px;border-radius:4px 0 0 4px">Empresa</td>
            <td style="padding:10px 12px;background:#FAFAF8;color:#374151">${empresa}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;background:#F3F4EF;font-weight:600;color:#1A1A1A">Email</td>
            <td style="padding:10px 12px;background:#FAFAF8;color:#374151"><a href="mailto:${email}" style="color:#22B07D">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 12px;background:#F3F4EF;font-weight:600;color:#1A1A1A">Teléfono</td>
            <td style="padding:10px 12px;background:#FAFAF8;color:#374151">${telefono || "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;background:#F3F4EF;font-weight:600;color:#1A1A1A;vertical-align:top">Operación</td>
            <td style="padding:10px 12px;background:#FAFAF8;color:#374151">${operacion || "—"}</td>
          </tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#9CA3AF">Enviado desde liviogistics.com</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
