import type { Locale } from '@/lib/i18n/config'

/**
 * Bilingual content dictionary for Waira Solutions.
 *
 * NOTE: Items marked with `[PLACEHOLDER]` use temporary content because no
 * verified public information was found. Replace these with real company data.
 */
export const dictionary = {
  es: {
    nav: {
      links: [
        { label: 'Servicios', href: '#servicios' },
        { label: 'Soluciones', href: '#soluciones' },
        { label: 'Proceso', href: '#proceso' },
        { label: 'Casos', href: '#casos' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Hablemos',
    },
    hero: {
      badge: 'Tecnología que mueve tu negocio',
      titleLead: 'Impulsamos tu',
      titleHighlight: 'transformación digital',
      titleTail: 'con software e inteligencia artificial',
      subtitle:
        'Somos una empresa colombiana de tecnología. Diseñamos, construimos y escalamos software, IA y automatización para hacer crecer tu negocio.',
      ctaPrimary: 'Iniciar proyecto',
      ctaSecondary: 'Ver servicios',
      trustedBy: 'Tecnologías y aliados que dominamos',
      metrics: [
        { value: '+30', label: 'Proyectos entregados', suffix: '' },
        { value: '98', label: 'Satisfacción de clientes', suffix: '%' },
        { value: '24/7', label: 'Soporte y monitoreo', suffix: '' },
        { value: '+8', label: 'Países alcanzados', suffix: '' },
      ],
    },
    about: {
      eyebrow: 'Sobre nosotros',
      title: 'Aire fresco para la tecnología de tu empresa',
      description:
        'Waira significa "viento" en quechua: movimiento, ligereza y cambio. Llevamos ese espíritu a cada proyecto, combinando ingeniería de primer nivel con un diseño impecable para crear productos digitales que escalan.',
      mission: {
        title: 'Misión',
        text: 'Brindar soluciones tecnológicas innovadoras que impulsen el crecimiento de las empresas, con calidad, cercanía y resultados medibles.',
      },
      vision: {
        title: 'Visión',
        text: 'Ser un referente latinoamericano en desarrollo de software e inteligencia artificial, reconocido por la excelencia técnica y el impacto en nuestros clientes.',
      },
      values: [
        { title: 'Innovación', text: 'Adoptamos lo último en tecnología con criterio y propósito.' },
        { title: 'Confianza', text: 'Relaciones transparentes y compromisos que cumplimos.' },
        { title: 'Excelencia', text: 'Cuidamos cada detalle, del código al pixel.' },
        { title: 'Cercanía', text: 'Acompañamos a nuestros clientes en cada etapa.' },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Todo lo que tu producto digital necesita',
      subtitle: 'Equipos especializados que cubren el ciclo completo, desde la idea hasta la operación.',
      items: [
        {
          icon: 'Code2',
          title: 'Desarrollo de software',
          text: 'Aplicaciones web y móviles a la medida, robustas, seguras y escalables.',
          benefits: ['Arquitectura escalable', 'Código mantenible', 'Entregas continuas'],
        },
        {
          icon: 'BrainCircuit',
          title: 'Inteligencia Artificial',
          text: 'Modelos, asistentes y automatización inteligente integrados a tu operación.',
          benefits: ['Chatbots y agentes', 'Visión y NLP', 'IA generativa'],
        },
        {
          icon: 'Workflow',
          title: 'Automatización',
          text: 'Eliminamos tareas repetitivas y conectamos tus sistemas de extremo a extremo.',
          benefits: ['Flujos sin código', 'Integraciones API', 'Ahorro de horas'],
        },
        {
          icon: 'Cloud',
          title: 'Cloud & DevOps',
          text: 'Infraestructura confiable, observabilidad y despliegues automatizados.',
          benefits: ['Alta disponibilidad', 'CI/CD', 'Optimización de costos'],
        },
        {
          icon: 'LineChart',
          title: 'Datos & Analítica',
          text: 'Convertimos tus datos en decisiones con dashboards y pipelines.',
          benefits: ['Dashboards', 'ETL/ELT', 'Métricas en vivo'],
        },
        {
          icon: 'Compass',
          title: 'Consultoría tecnológica',
          text: 'Estrategia, arquitectura y acompañamiento para tu transformación digital.',
          benefits: ['Roadmaps', 'Auditorías', 'Mentoría técnica'],
        },
      ],
      cta: 'Conversemos sobre tu proyecto',
    },
    solutions: {
      eyebrow: 'Soluciones',
      title: 'Plataformas listas para escalar',
      subtitle: 'Combinamos nuestras capacidades en soluciones de alto impacto para tu industria.',
      items: [
        { title: 'Asistentes con IA', text: 'Agentes conversacionales que atienden, venden y resuelven 24/7.' },
        { title: 'Plataformas a medida', text: 'ERPs, CRMs y portales construidos alrededor de tu operación.' },
        { title: 'Apps móviles', text: 'Experiencias nativas y multiplataforma de alto rendimiento.' },
        { title: 'Integraciones', text: 'Conectamos tus herramientas para que trabajen como una sola.' },
        { title: 'Migración a la nube', text: 'Modernizamos sistemas legados con cero fricción.' },
        { title: 'Automatización de procesos', text: 'Workflows que ahorran tiempo y reducen errores.' },
      ],
    },
    tech: {
      eyebrow: 'Tecnologías',
      title: 'Un stack moderno y probado',
      subtitle: 'Trabajamos con las herramientas que usan los mejores equipos del mundo.',
      groups: [
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'] },
        { name: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL'] },
        { name: 'Cloud & DevOps', items: ['Vercel', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
        { name: 'IA & Datos', items: ['OpenAI', 'LangChain', 'TensorFlow', 'Pandas', 'Vector DBs'] },
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'Cómo trabajamos contigo',
      subtitle: 'Un método claro y colaborativo que reduce riesgos y acelera resultados.',
      steps: [
        { title: 'Descubrimiento', text: 'Entendemos tu negocio, objetivos y retos.' },
        { title: 'Planeación', text: 'Definimos alcance, roadmap y métricas de éxito.' },
        { title: 'Diseño', text: 'Prototipamos experiencias centradas en el usuario.' },
        { title: 'Desarrollo', text: 'Construimos en ciclos cortos con entregas frecuentes.' },
        { title: 'QA', text: 'Probamos a fondo para asegurar calidad y seguridad.' },
        { title: 'Despliegue', text: 'Lanzamos con confianza y monitoreo en tiempo real.' },
        { title: 'Soporte', text: 'Evolucionamos el producto y te acompañamos.' },
      ],
    },
    cases: {
      eyebrow: 'Casos de éxito',
      title: 'Resultados que hablan por sí solos',
      subtitle: 'Proyectos que demuestran el impacto real de nuestra tecnología en diferentes industrias.',
      items: [
        {
          tag: 'Retail',
          title: 'Plataforma de e-commerce con IA',
          text: 'Recomendaciones inteligentes y checkout optimizado para una cadena regional.',
          kpis: [
            { value: '+42%', label: 'Conversión' },
            { value: '-30%', label: 'Tiempo de carga' },
          ],
          tech: ['Next.js', 'OpenAI', 'AWS'],
        },
        {
          tag: 'Logística',
          title: 'Automatización de operaciones',
          text: 'Orquestación de flujos que eliminó tareas manuales en bodega.',
          kpis: [
            { value: '+1.200h', label: 'Ahorradas / año' },
            { value: '99.9%', label: 'Uptime' },
          ],
          tech: ['Python', 'Docker', 'PostgreSQL'],
        },
        {
          tag: 'Salud',
          title: 'Asistente virtual para citas',
          text: 'Agente conversacional que gestiona agendamiento y recordatorios.',
          kpis: [
            { value: '24/7', label: 'Atención' },
            { value: '+65%', label: 'Autogestión' },
          ],
          tech: ['LangChain', 'React', 'Vercel'],
        },
      ],
    },
    clients: {
      title: 'Empresas que confían en la tecnología',
      note: '[PLACEHOLDER] Logos ilustrativos.',
    },
    testimonials: {
      eyebrow: 'Testimonios',
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Líderes y equipos que han vivido la diferencia de trabajar con Waira Solutions.',
      items: [
        {
          quote: 'Waira transformó nuestra operación. El equipo es técnico, cercano y entrega a tiempo.',
          name: 'Cliente Ejemplo',
          role: 'CEO',
          company: 'Empresa Demo',
        },
        {
          quote: 'La solución de IA superó nuestras expectativas y se integró sin fricción.',
          name: 'Cliente Ejemplo',
          role: 'Directora de Tecnología',
          company: 'Empresa Demo',
        },
        {
          quote: 'Profesionalismo y calidad de principio a fin. Los recomiendo totalmente.',
          name: 'Cliente Ejemplo',
          role: 'Gerente de Producto',
          company: 'Empresa Demo',
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Resolvemos tus dudas',
      items: [
        {
          q: '¿Qué tipo de proyectos desarrollan?',
          a: 'Desarrollamos software web y móvil, soluciones de IA, automatización, integraciones y proyectos cloud, a la medida de cada cliente.',
        },
        {
          q: '¿Cómo es el proceso de trabajo?',
          a: 'Trabajamos en ciclos cortos con entregas frecuentes: descubrimiento, planeación, diseño, desarrollo, QA, despliegue y soporte.',
        },
        {
          q: '¿Trabajan con empresas fuera de Colombia?',
          a: 'Sí. Atendemos clientes de forma remota en distintos países de habla hispana e inglesa.',
        },
        {
          q: '¿Ofrecen soporte después del lanzamiento?',
          a: 'Sí, ofrecemos planes de soporte, mantenimiento y evolución continua del producto.',
        },
        {
          q: '¿Cómo solicito una cotización?',
          a: 'Escríbenos a través del formulario de contacto o por WhatsApp y te responderemos a la brevedad.',
        },
      ],
    },
    ctaFinal: {
      title: 'Llevemos tu idea al siguiente nivel',
      subtitle: 'Cuéntanos qué quieres construir y diseñaremos la mejor solución para tu negocio.',
      primary: 'Iniciar proyecto',
      secondary: 'Agendar una llamada',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu proyecto',
      subtitle: 'Completa el formulario y nuestro equipo te contactará en menos de 24 horas.',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        company: 'Empresa',
        message: 'Cuéntanos sobre tu proyecto',
        submit: 'Enviar mensaje',
        submitting: 'Enviando...',
        success: '¡Gracias! Tu mensaje fue enviado. Te contactaremos pronto.',
        errors: {
          name: 'Ingresa tu nombre',
          email: 'Ingresa un correo válido',
          message: 'Cuéntanos un poco más (mínimo 10 caracteres)',
        },
      },
      info: {
        emailLabel: 'Correo',
        email: 'contactanos@infinitechcol.com',
        locationLabel: 'Ubicación',
        location: 'Popayán, Cauca, Colombia',
        whatsappLabel: 'WhatsApp',
        whatsapp: 'Escríbenos',
        hoursLabel: 'Horario',
        hours: 'Lun a Vie, 8:00 - 18:00',
      },
    },
    footer: {
      tagline: 'Soluciones tecnológicas innovadoras para hacer crecer tu negocio.',
      columns: [
        {
          title: 'Servicios',
          links: ['Desarrollo de software', 'Inteligencia Artificial', 'Automatización', 'Cloud & DevOps'],
        },
        {
          title: 'Empresa',
          links: ['Sobre nosotros', 'Proceso', 'Casos de éxito', 'Contacto'],
        },
        {
          title: 'Recursos',
          links: ['Blog', 'Soporte', 'Privacidad', 'Términos'],
        },
      ],
      rights: 'Todos los derechos reservados.',
      madeIn: 'Hecho con pasión en Colombia',
    },
    theme: { light: 'Modo claro', dark: 'Modo oscuro', toggle: 'Cambiar tema' },
  },

  en: {
    nav: {
      links: [
        { label: 'Services', href: '#servicios' },
        { label: 'Solutions', href: '#soluciones' },
        { label: 'Process', href: '#proceso' },
        { label: 'Cases', href: '#casos' },
        { label: 'About', href: '#nosotros' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: "Let's talk",
    },
    hero: {
      badge: 'Technology that moves your business',
      titleLead: 'We power your',
      titleHighlight: 'digital transformation',
      titleTail: 'with software and artificial intelligence',
      subtitle:
        'We are a Colombian technology company. We design, build and scale software, AI and automation to grow your business.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'View services',
      trustedBy: 'Technologies and partners we master',
      metrics: [
        { value: '+30', label: 'Projects delivered', suffix: '' },
        { value: '98', label: 'Client satisfaction', suffix: '%' },
        { value: '24/7', label: 'Support & monitoring', suffix: '' },
        { value: '+8', label: 'Countries reached', suffix: '' },
      ],
    },
    about: {
      eyebrow: 'About us',
      title: 'A breath of fresh air for your tech',
      description:
        'Waira means "wind" in Quechua: movement, lightness and change. We bring that spirit to every project, combining world-class engineering with impeccable design to build digital products that scale.',
      mission: {
        title: 'Mission',
        text: 'To deliver innovative technology solutions that drive business growth, with quality, closeness and measurable results.',
      },
      vision: {
        title: 'Vision',
        text: 'To be a Latin American reference in software development and artificial intelligence, recognized for technical excellence and client impact.',
      },
      values: [
        { title: 'Innovation', text: 'We adopt the latest technology with purpose and judgement.' },
        { title: 'Trust', text: 'Transparent relationships and commitments we keep.' },
        { title: 'Excellence', text: 'We care about every detail, from code to pixel.' },
        { title: 'Closeness', text: 'We accompany our clients at every stage.' },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Everything your digital product needs',
      subtitle: 'Specialized teams covering the full cycle, from idea to operation.',
      items: [
        {
          icon: 'Code2',
          title: 'Software development',
          text: 'Custom web and mobile applications: robust, secure and scalable.',
          benefits: ['Scalable architecture', 'Maintainable code', 'Continuous delivery'],
        },
        {
          icon: 'BrainCircuit',
          title: 'Artificial Intelligence',
          text: 'Models, assistants and smart automation integrated into your operation.',
          benefits: ['Chatbots & agents', 'Vision & NLP', 'Generative AI'],
        },
        {
          icon: 'Workflow',
          title: 'Automation',
          text: 'We remove repetitive tasks and connect your systems end to end.',
          benefits: ['No-code flows', 'API integrations', 'Hours saved'],
        },
        {
          icon: 'Cloud',
          title: 'Cloud & DevOps',
          text: 'Reliable infrastructure, observability and automated deployments.',
          benefits: ['High availability', 'CI/CD', 'Cost optimization'],
        },
        {
          icon: 'LineChart',
          title: 'Data & Analytics',
          text: 'We turn your data into decisions with dashboards and pipelines.',
          benefits: ['Dashboards', 'ETL/ELT', 'Live metrics'],
        },
        {
          icon: 'Compass',
          title: 'Tech consulting',
          text: 'Strategy, architecture and guidance for your digital transformation.',
          benefits: ['Roadmaps', 'Audits', 'Technical mentoring'],
        },
      ],
      cta: "Let's talk about your project",
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Platforms ready to scale',
      subtitle: 'We combine our capabilities into high-impact solutions for your industry.',
      items: [
        { title: 'AI assistants', text: 'Conversational agents that serve, sell and solve 24/7.' },
        { title: 'Custom platforms', text: 'ERPs, CRMs and portals built around your operation.' },
        { title: 'Mobile apps', text: 'High-performance native and cross-platform experiences.' },
        { title: 'Integrations', text: 'We connect your tools so they work as one.' },
        { title: 'Cloud migration', text: 'We modernize legacy systems with zero friction.' },
        { title: 'Process automation', text: 'Workflows that save time and reduce errors.' },
      ],
    },
    tech: {
      eyebrow: 'Technologies',
      title: 'A modern, battle-tested stack',
      subtitle: 'We work with the tools used by the best teams in the world.',
      groups: [
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'] },
        { name: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL'] },
        { name: 'Cloud & DevOps', items: ['Vercel', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
        { name: 'AI & Data', items: ['OpenAI', 'LangChain', 'TensorFlow', 'Pandas', 'Vector DBs'] },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'How we work with you',
      subtitle: 'A clear, collaborative method that reduces risk and accelerates results.',
      steps: [
        { title: 'Discovery', text: 'We understand your business, goals and challenges.' },
        { title: 'Planning', text: 'We define scope, roadmap and success metrics.' },
        { title: 'Design', text: 'We prototype user-centered experiences.' },
        { title: 'Development', text: 'We build in short cycles with frequent releases.' },
        { title: 'QA', text: 'We test thoroughly to ensure quality and security.' },
        { title: 'Deployment', text: 'We launch with confidence and real-time monitoring.' },
        { title: 'Support', text: 'We evolve the product and stay by your side.' },
      ],
    },
    cases: {
      eyebrow: 'Case studies',
      title: 'Results that speak for themselves',
      subtitle: 'Projects that demonstrate the real impact of our technology across different industries.',
      items: [
        {
          tag: 'Retail',
          title: 'AI-powered e-commerce platform',
          text: 'Smart recommendations and optimized checkout for a regional chain.',
          kpis: [
            { value: '+42%', label: 'Conversion' },
            { value: '-30%', label: 'Load time' },
          ],
          tech: ['Next.js', 'OpenAI', 'AWS'],
        },
        {
          tag: 'Logistics',
          title: 'Operations automation',
          text: 'Workflow orchestration that removed manual warehouse tasks.',
          kpis: [
            { value: '+1,200h', label: 'Saved / year' },
            { value: '99.9%', label: 'Uptime' },
          ],
          tech: ['Python', 'Docker', 'PostgreSQL'],
        },
        {
          tag: 'Health',
          title: 'Virtual appointment assistant',
          text: 'Conversational agent that manages scheduling and reminders.',
          kpis: [
            { value: '24/7', label: 'Availability' },
            { value: '+65%', label: 'Self-service' },
          ],
          tech: ['LangChain', 'React', 'Vercel'],
        },
      ],
    },
    clients: {
      title: 'Companies that trust in technology',
      note: '[PLACEHOLDER] Illustrative logos.',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What our clients say',
      subtitle: 'Leaders and teams who have experienced the difference of working with Waira Solutions.',
      items: [
        {
          quote: 'Waira transformed our operation. The team is technical, close and delivers on time.',
          name: 'Sample Client',
          role: 'CEO',
          company: 'Demo Company',
        },
        {
          quote: 'The AI solution exceeded our expectations and integrated with zero friction.',
          name: 'Sample Client',
          role: 'CTO',
          company: 'Demo Company',
        },
        {
          quote: 'Professionalism and quality from start to finish. Highly recommended.',
          name: 'Sample Client',
          role: 'Product Manager',
          company: 'Demo Company',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'We answer your questions',
      items: [
        {
          q: 'What kind of projects do you build?',
          a: 'We build web and mobile software, AI solutions, automation, integrations and cloud projects, tailored to each client.',
        },
        {
          q: 'What is your work process like?',
          a: 'We work in short cycles with frequent releases: discovery, planning, design, development, QA, deployment and support.',
        },
        {
          q: 'Do you work with companies outside Colombia?',
          a: 'Yes. We serve clients remotely across several Spanish- and English-speaking countries.',
        },
        {
          q: 'Do you offer support after launch?',
          a: 'Yes, we offer support, maintenance and continuous product evolution plans.',
        },
        {
          q: 'How do I request a quote?',
          a: 'Reach out through the contact form or WhatsApp and we will get back to you shortly.',
        },
      ],
    },
    ctaFinal: {
      title: "Let's take your idea to the next level",
      subtitle: 'Tell us what you want to build and we will design the best solution for your business.',
      primary: 'Start a project',
      secondary: 'Book a call',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your project",
      subtitle: 'Fill out the form and our team will contact you in under 24 hours.',
      form: {
        name: 'Full name',
        email: 'Email address',
        company: 'Company',
        message: 'Tell us about your project',
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Thank you! Your message was sent. We will contact you soon.',
        errors: {
          name: 'Enter your name',
          email: 'Enter a valid email',
          message: 'Tell us a bit more (minimum 10 characters)',
        },
      },
      info: {
        emailLabel: 'Email',
        email: 'contactanos@infinitechcol.com',
        locationLabel: 'Location',
        location: 'Popayán, Cauca, Colombia',
        whatsappLabel: 'WhatsApp',
        whatsapp: 'Message us',
        hoursLabel: 'Hours',
        hours: 'Mon to Fri, 8:00 - 18:00',
      },
    },
    footer: {
      tagline: 'Innovative technology solutions to grow your business.',
      columns: [
        {
          title: 'Services',
          links: ['Software development', 'Artificial Intelligence', 'Automation', 'Cloud & DevOps'],
        },
        {
          title: 'Company',
          links: ['About us', 'Process', 'Case studies', 'Contact'],
        },
        {
          title: 'Resources',
          links: ['Blog', 'Support', 'Privacy', 'Terms'],
        },
      ],
      rights: 'All rights reserved.',
      madeIn: 'Made with passion in Colombia',
    },
    theme: { light: 'Light mode', dark: 'Dark mode', toggle: 'Toggle theme' },
  },
} as const

export type Dictionary = (typeof dictionary)['es']

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale] as Dictionary
}
