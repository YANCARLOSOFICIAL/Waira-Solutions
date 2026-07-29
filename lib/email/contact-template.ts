interface ContactData {
  name: string
  email: string
  company?: string
  projectType?: string
  budget?: string
  message: string
}

const projectTypeLabels: Record<string, string> = {
  software: 'Desarrollo de software',
  ai: 'Inteligencia Artificial',
  automation: 'Automatización',
  consulting: 'Consultoría tecnológica',
  product: 'Producto propio',
  other: 'Otro',
}

const budgetLabels: Record<string, string> = {
  lt5k: 'Menos de $5.000 USD',
  '5k-15k': '$5.000 - $15.000 USD',
  '15k-50k': '$15.000 - $50.000 USD',
  gt50k: 'Más de $50.000 USD',
}

export function buildContactHtml(data: ContactData): string {
  const items: string[] = [
    `<tr><td style="padding:8px 0;font-weight:600;color:#555">Nombre</td><td style="padding:8px 0">${data.name}</td></tr>`,
    `<tr><td style="padding:8px 0;font-weight:600;color:#555">Email</td><td style="padding:8px 0">${data.email}</td></tr>`,
  ]

  if (data.company) {
    items.push(`<tr><td style="padding:8px 0;font-weight:600;color:#555">Empresa</td><td style="padding:8px 0">${data.company}</td></tr>`)
  }

  if (data.projectType) {
    items.push(`<tr><td style="padding:8px 0;font-weight:600;color:#555">Tipo de proyecto</td><td style="padding:8px 0">${projectTypeLabels[data.projectType] ?? data.projectType}</td></tr>`)
  }

  if (data.budget) {
    items.push(`<tr><td style="padding:8px 0;font-weight:600;color:#555">Presupuesto</td><td style="padding:8px 0">${budgetLabels[data.budget] ?? data.budget}</td></tr>`)
  }

  items.push(`<tr><td style="padding:8px 0;font-weight:600;color:#555;vertical-align:top">Mensaje</td><td style="padding:8px 0">${data.message.replace(/\n/g, '<br>')}</td></tr>`)

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px">
    <table width="520" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06)">
      <tr><td style="padding:32px 32px 8px;background:#1a1a2e">
        <h1 style="margin:0;font-size:18px;color:#fff;font-weight:600">Nuevo contacto — Waira Solutions</h1>
      </td></tr>
      <tr><td style="padding:24px 32px">
        <table width="100%" cellpadding="0" cellspacing="0">${items.join('')}</table>
      </td></tr>
    </table>
  </td></tr></table>
</body>
</html>`
}
