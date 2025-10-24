// src/pages/api/send-email.ts
import { Resend } from "resend";
import type { APIRoute } from "astro";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, message }: { name: string; message: string } = body;

    const { data, error } = await resend.emails.send({
      from: "GM Abogados <gm@correo.gm-abogados.com.mx>",
      to: "iang27191@gmail.com",
      subject: `Hola Lic. Tiene un nuevo mensaje de ${name}`,
      html: message,
    });

    if (error) {
      return new Response(
        JSON.stringify({ message: "Error al enviar el correo", error }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: "Error al procesar la solicitud",
        error: String(err),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
