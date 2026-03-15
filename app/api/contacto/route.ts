import { Resend } from "resend";
import { NextResponse } from "next/server";

// --- Rate limiting (in-memory) ---
// Nota: se resetea en cold starts de Vercel, pero es suficiente para este volumen.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hora

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// Limpia entradas expiradas ocasionalmente para no acumular memoria
function pruneExpired() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore) {
    if (now > entry.resetAt) rateLimitStore.delete(ip);
  }
}

// --- Sanitización ---
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return escapeHtml(value.trim().slice(0, maxLength));
}

// --- Validación básica de email ---
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  // 1. Verificación de origen
  const origin = req.headers.get("origin") ?? "";
  const allowedOrigins = [
    "https://liviogistics.com",
    "https://www.liviogistics.com",
    ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
  ];
  if (!allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // 2. Rate limiting por IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (Math.random() < 0.1) pruneExpired(); // limpiar ~10% de las veces

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta en una hora." },
      { status: 429 }
    );
  }

  // 3. Parseo y validación del body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // Honeypot: si viene relleno, es un bot
  if (raw._hp) {
    return NextResponse.json({ ok: true }); // respuesta silenciosa
  }

  const empresa = sanitize(raw.empresa, 120);
  const email = sanitize(raw.email, 120);
  const telefono = sanitize(raw.telefono, 30);
  const operacion = sanitize(raw.operacion, 1000);

  if (!empresa || !email) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  // 4. Envío de email
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "LIVIO Contacto <contacto@liviogistics.com>",
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
        <p style="margin-top:24px;font-size:12px;color:#9CA3AF">Enviado desde liviogistics.com · IP: ${escapeHtml(ip)}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
