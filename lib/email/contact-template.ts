interface ContactTemplateProps {
  name: string
  email: string
  company?: string
  message: string
}

export function buildContactHtml({ name, email, company, message }: ContactTemplateProps): string {
  const companyRow = company
    ? `<tr>
        <td style="padding-bottom: 20px;">
          <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;">Empresa</span>
          <p style="margin:6px 0 0;font-size:16px;color:#18181b;font-weight:500;">${escapeHtml(company)}</p>
        </td>
      </tr>`
    : ''

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Nuevo contacto - Waira Solutions</title></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background-color:#f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:linear-gradient(135deg,#0a84ff,#00c6ff);padding:32px 36px;">
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;">Nuevo mensaje de contacto</h1>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.85);">Alguien ha solicitado informaci\u00f3n a trav\u00e9s del formulario</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:20px;">
                    <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;">Remitente</span>
                    <p style="margin:6px 0 0;font-size:16px;color:#18181b;font-weight:500;">${escapeHtml(name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px;">
                    <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;">Correo electr\u00f3nico</span>
                    <p style="margin:6px 0 0;font-size:16px;color:#0a84ff;"><a href="mailto:${escapeHtml(email)}" style="color:#0a84ff;text-decoration:none;">${escapeHtml(email)}</a></p>
                  </td>
                </tr>
                ${companyRow}
                <tr>
                  <td style="padding-bottom:12px;">
                    <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;">Mensaje</span>
                    <p style="margin:8px 0 0;font-size:15px;line-height:1.6;color:#3f3f46;white-space:pre-wrap;">${escapeHtml(message)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 36px;">
              <hr style="border:none;border-top:1px solid #e4e4e7;margin:0;" />
            </td>
          </tr>
          <tr>
            <td style="padding:16px 36px 24px;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.5;">Este mensaje fue enviado desde el formulario de contacto de Waira Solutions.<br />Responde directamente al correo del remitente para continuar la conversaci\u00f3n.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
