/**
 * Centralized configuration for Waira Solutions.
 * Edit this file to update all business information across the site.
 */

export const WAIRA = {
  name: 'Waira Solutions',
  domain: 'wairasolutions.com',
  url: 'https://wairasolutions.com',
  tagline: 'Ingeniería de software, inteligencia artificial y productos tecnológicos.',
  taglineEn: 'Software engineering, artificial intelligence and technology products.',

  location: {
    city: 'Popayán',
    region: 'Cauca',
    country: 'CO',
    full: 'Popayán, Cauca, Colombia',
  },

  contact: {
    /** Primary email — update when corporate email is active */
    email: 'infitechcol308@gmail.com',
    /** Suggested corporate email when available */
    emailCorporate: 'contacto@wairasolutions.com',
    whatsapp: '573229369995',
    whatsappMessage: '¡Hola! Me gustaría recibir más información sobre sus servicios.',
    hours: 'Lun a Vie, 8:00 - 18:00',
    hoursEn: 'Mon to Fri, 8:00 - 18:00',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/waira-solutions/',
    facebook: 'https://www.facebook.com/WairaSolutions',
  },

  /** WhatsApp URL builder */
  get whatsappUrl() {
    return `https://wa.me/${this.contact.whatsapp}?text=${encodeURIComponent(this.contact.whatsappMessage)}`
  },

  /** Mailto link */
  get mailtoUrl() {
    return `mailto:${this.contact.email}`
  },
} as const

export function getWhatsAppUrl(message?: string): string {
  const msg = message ?? WAIRA.contact.whatsappMessage
  return `https://wa.me/${WAIRA.contact.whatsapp}?text=${encodeURIComponent(msg)}`
}
