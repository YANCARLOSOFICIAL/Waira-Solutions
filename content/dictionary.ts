import type { Locale } from '@/lib/i18n/config'

export const dictionary = {
  es: {
    nav: {
      links: [
        { label: 'Servicios', href: '#servicios' },
        { label: 'Productos', href: '#productos' },
        { label: 'Proyectos', href: '#casos' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Hablemos',
    },
    hero: {
      eyebrow: '',
      titleLine1: 'Construimos la tecnología que',
      titleHighlight: 'resuelve',
      titleLine2: 'problemas reales',
      subtitle:
        'Empresa colombiana de ingeniería de software e inteligencia artificial. Creamos productos, plataformas y soluciones automatizadas que transforman la manera en que las organizaciones operan y entregan valor.',
      ctaPrimary: 'Iniciar proyecto',
      ctaSecondary: 'Ver servicios',
      availability: 'Disponibles para nuevos proyectos',
      trustedBy: 'Tecnologías con las que trabajamos',
      trustBadges: ['Ingeniería real', 'Código propio', 'Sin intermediarios'],
      metrics: [
        { value: '+30', label: 'Proyectos entregados', suffix: '' },
        { value: '98', label: 'Satisfacción de clientes', suffix: '%' },
        { value: '24/7', label: 'Soporte y monitoreo', suffix: '' },
        { value: '+8', label: 'Países alcanzados', suffix: '' },
      ],
      visualTitle: 'Sistemas inteligentes conectados',
      visualSub: 'APIs, agentes de IA y flujos automatizados trabajando como un solo ecosistema.',
      visualTags: ['Arquitectura', 'IA', 'Automatización', 'APIs'],
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Ingeniería con identidad',
      description:
        'Waira significa "viento" en quechua: movimiento, flujo, evolución constante. Aplicamos ese principio a la tecnología: combinamos ingeniería de software, inteligencia artificial y visión de producto para construir soluciones que realmente funcionan, escalan y transforman.',
      mission: {
        title: 'Enfoque',
        text: 'Resolver problemas complejos con tecnología bien construida, sin atajos, sin promesas vacías.',
      },
      vision: {
        title: 'Dirección',
        text: 'Ser un referente latinoamericano en ingeniería de software, inteligencia artificial y productos tecnológicos con impacto real.',
      },
      values: [
        { title: 'Ingeniería', text: 'Código limpio, arquitecturas sólidas, decisiones técnicas con fundamento.' },
        { title: 'Confianza', text: 'Transparencia total en procesos, costos y resultados.' },
        { title: 'Excelencia', text: 'Cuidamos cada detalle, de la lógica del backend al pixel del frontend.' },
        { title: 'Visión', text: 'No solo ejecutamos. Pensamos en producto, escala y evolución.' },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Capacidades técnicas para construir lo que imaginas',
      subtitle: 'Equipos especializados que cubren el ciclo completo de producto digital.',
      items: [
        {
          icon: 'Code2',
          title: 'Desarrollo de software',
          text: 'Aplicaciones web y móviles a la medida. Robusta, segura, lista para escalar desde el día uno.',
          benefits: ['Arquitectura escalable', 'Código mantenible', 'Entregas continuas'],
        },
        {
          icon: 'BrainCircuit',
          title: 'Inteligencia Artificial',
          text: 'Modelos de IA, asistentes conversacionales y automatización inteligente integrados a tu operación.',
          benefits: ['Chatbots y agentes', 'Sistemas RAG', 'IA generativa'],
        },
        {
          icon: 'Workflow',
          title: 'Automatización inteligente',
          text: 'Eliminamos procesos manuales y conectamos tus sistemas de extremo a extremo con flujos automatizados.',
          benefits: ['Workflows sin fricción', 'APIs y webhooks', 'Ahorro operativo real'],
        },
        {
          icon: 'Cloud',
          title: 'Cloud & DevOps',
          text: 'Infraestructura confiable, observabilidad total y despliegues automatizados en cualquier nube.',
          benefits: ['Alta disponibilidad', 'CI/CD', 'Optimización de costos'],
        },
        {
          icon: 'LineChart',
          title: 'Datos & Analítica',
          text: 'Pipeline de datos, dashboards inteligentes y métricas en vivo para decisiones informadas.',
          benefits: ['Dashboards en tiempo real', 'ETL/ELT', 'Business intelligence'],
        },
        {
          icon: 'Compass',
          title: 'Consultoría tecnológica',
          text: 'Estrategia de arquitectura, roadmaps de producto y acompañamiento técnico para tu equipo.',
          benefits: ['Roadmaps técnicos', 'Auditorías de código', 'Mentoría'],
        },
      ],
      cta: 'Conversemos sobre tu proyecto',
    },
    products: {
      eyebrow: 'Productos',
      title: 'Tecnología que construimos',
      subtitle: 'En Waira no solo desarrollamos software para terceros. Creamos productos tecnológicos propios que resuelven problemas reales.',
      badges: { ready: 'Disponible', coming: 'En desarrollo' },
      categoryAvailable: 'Disponibles',
      categoryComing: 'En desarrollo',
      learnMore: 'Explorar solución',
      items: [
        {
          icon: 'ChatCircle',
          title: 'Guaca: Asistente educativo con IA',
          text: 'Chatbot inteligente basado en RAG para instituciones educativas. Responde sobre programas, admisiones y servicios usando documentos institucionales. Soporta texto y voz.',
          tags: ['RAG', 'LLM', 'Educación', 'Voz'],
          badge: 'ready',
        },
        {
          icon: 'Flask',
          title: 'Plataforma educativa con IA',
          text: 'Generación automatizada de exámenes, resúmenes, rúbricas y material pedagógico. Soporta múltiples proveedores de IA con créditos por institución.',
          tags: ['Next.js', 'FastAPI', 'OpenAI', 'Educación'],
          badge: 'ready',
        },
        {
          icon: 'Gear',
          title: 'API de extracción de datos con IA',
          text: 'API que procesa documentos no estructurados (facturas, contratos, formularios) y devuelve datos limpios y estructurados listos para integrar.',
          tags: ['FastAPI', 'GPT-4o', 'Python', 'Documentos'],
          badge: 'ready',
        },
        {
          icon: 'CreditCard',
          title: 'Infraestructura de pagos',
          text: 'Explorando el desarrollo de infraestructura financiera modular para plataformas digitales, utilizando proveedores tecnológicos especializados y respetando el marco regulatorio colombiano.',
          tags: ['Fintech', 'Pagos', 'API', 'Regulación'],
          badge: 'coming',
        },
        {
          icon: 'Brain',
          title: 'Agentes de IA autónomos',
          text: 'Investigación y prototipado de agentes de IA capaces de ejecutar tareas complejas de forma autónoma: análisis, decisión y acción sin supervisión constante.',
          tags: ['IA', 'Agentes', 'Automatización', 'I+D'],
          badge: 'coming',
        },
      ],
      cta: 'Háblanos de tu proyecto',
    },
    cases: {
      eyebrow: 'Proyectos',
      title: 'Construido para resolver',
      subtitle: 'Cada proyecto tiene un problema real detrás. Así los resolvimos.',
      items: [
        {
          tag: 'Automatización Financiera',
          problem: 'Una empresa necesitaba procesar cientos de facturas en PDF cada semana. El proceso manual tomaba horas y generaba errores.',
          solution: 'Construimos una API que lee facturas en cualquier formato, extrae los datos estructurados con IA y los entrega como JSON listo para integrar.',
          tech: ['FastAPI', 'GPT-4o', 'Python', 'Docker'],
          repo: 'YANCARLOSOFICIAL/api-facturas-2',
          result: 'Reducción del tiempo de procesamiento de horas a segundos. Datos precisos, sin intervención manual.',
        },
        {
          tag: 'Educación Digital',
          problem: 'Docentes invertían horas creando exámenes, resúmenes y material educativo manualmente, sin herramientas de apoyo.',
          solution: 'Desarrollamos una plataforma que genera automáticamente exámenes, rúbricas, resúmenes y juegos educativos usando IA, con un sistema de créditos por institución.',
          tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI'],
          repo: 'YANCARLOSOFICIAL/plataforma-educativa-con-IA',
          result: 'Docentes crean material educativo en minutos en lugar de horas. Plataforma usada por múltiples instituciones.',
        },
        {
          tag: 'Atención al Usuario con IA',
          problem: 'Una universidad recibía cientos de consultas diarias sobre programas, admisiones y sedes. El equipo de atención no daba abasto.',
          solution: 'Implementamos Guaca, un chatbot con sistema RAG que consulta documentos institucionales oficiales y responde con precisión por texto y voz.',
          tech: ['Next.js', 'FastAPI', 'pgvector', 'Redis'],
          repo: 'YANCARLOSOFICIAL/chatbot-uniputumayo',
          result: 'Atención 24/7 automatizada. Consultas resueltas al instante sin esperar a un agente.',
        },
      ],
      cta: 'Ver en GitHub',
    },
    whyWaira: {
      eyebrow: 'Por qué Waira',
      title: 'No construimos como una agencia. Construimos como equipo de producto.',
      subtitle: 'No externalizamos, no ponemos intermediarios. Ingeniería directa, decisiones técnicas reales.',
      items: [
        {
          icon: 'Code',
          title: 'Ingeniería de verdad',
          text: 'Escribimos código que escala. Arquitecturas modernas, buenas prácticas, pruebas automatizadas y entregas frecuentes.',
        },
        {
          icon: 'BrainCircuit',
          title: 'IA aplicada, no decorativa',
          text: 'No ponemos "IA" en todo. La usamos donde realmente resuelve problemas: RAG, agentes, automatización inteligente.',
        },
        {
          icon: 'Rocket',
          title: 'Visión de producto',
          text: 'No solo ejecutamos tareas. Pensamos en el producto final, en cómo crece, cómo se mantiene, cómo genera valor.',
        },
        {
          icon: 'Users',
          title: 'Trato directo',
          text: 'Hablas con las personas que diseñan y construyen. Sin cuentas de ventas, sin gerentes de cuenta, sin capas innecesarias.',
        },
      ],
    },
    tech: {
      eyebrow: '',
      title: 'Tecnología con la que trabajamos',
      subtitle: 'Herramientas modernas que usan los mejores equipos de ingeniería del mundo.',
      groups: [
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
        { name: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL'] },
        { name: 'Cloud & DevOps', items: ['Vercel', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
        { name: 'IA & Datos', items: ['OpenAI', 'LangChain', 'TensorFlow', 'Pandas', 'Vector DBs'] },
      ],
    },
    process: {
      eyebrow: '',
      title: 'Cómo trabajamos',
      subtitle: 'Un proceso claro y colaborativo que minimiza riesgos y acelera resultados.',
      steps: [
        { title: 'Descubrimiento', text: 'Entendemos tu negocio, objetivos y desafíos.' },
        { title: 'Planeación', text: 'Definimos alcance, roadmap y métricas de éxito.' },
        { title: 'Arquitectura', text: 'Diseñamos la solución técnica más adecuada.' },
        { title: 'Desarrollo', text: 'Construimos en ciclos cortos con entregas frecuentes.' },
        { title: 'Calidad', text: 'Probamos a fondo para asegurar funcionamiento y seguridad.' },
        { title: 'Despliegue', text: 'Lanzamos con confianza y monitoreo en tiempo real.' },
        { title: 'Evolución', text: 'Soportamos, optimizamos y escalamos tu producto.' },
      ],
    },
    faq: {
      eyebrow: '',
      title: 'Resolvemos tus dudas',
      items: [
        {
          q: '¿Qué tipo de proyectos desarrollan?',
          a: 'Desarrollamos software web y móvil, soluciones de IA (chatbots, RAG, agentes), automatización de procesos, integraciones API y proyectos cloud.',
        },
        {
          q: '¿Cómo es su proceso de trabajo?',
          a: 'Trabajamos en ciclos cortos con entregas frecuentes: descubrimiento, planeación, diseño, desarrollo, pruebas, despliegue y soporte continuo.',
        },
        {
          q: '¿Trabajan con empresas fuera de Colombia?',
          a: 'Sí. Atendemos clientes remotos en varios países de habla hispana e inglesa.',
        },
        {
          q: '¿Ofrecen soporte después del lanzamiento?',
          a: 'Sí. Ofrecemos planes de soporte, mantenimiento y evolución continua del producto.',
        },
        {
          q: '¿Cómo solicito una cotización?',
          a: 'Escríbenos por el formulario de contacto o WhatsApp y te responderemos en menos de 24 horas.',
        },
      ],
    },
    ctaFinal: {
      title: '¿Tienes un problema que la tecnología puede resolver?',
      subtitle: 'Cuéntanos qué necesitas construir y diseñaremos la mejor solución técnica para tu negocio.',
      primary: 'Cuéntanos tu idea',
      secondary: 'Escribenos por WhatsApp',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu proyecto',
      subtitle: 'Completa el formulario y te contactaremos en menos de 24 horas.',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        company: 'Empresa',
        message: 'Cuéntanos sobre tu proyecto',
        submit: 'Enviar mensaje',
        submitting: 'Enviando...',
        success: '¡Gracias! Te contactaremos pronto.',
        errors: {
          name: 'Ingresa tu nombre',
          email: 'Ingresa un correo válido',
          message: 'Cuéntanos un poco más (mínimo 10 caracteres)',
        },
      },
      info: {
        emailLabel: 'Correo',
        email: 'infitechcol308@gmail.com',
        locationLabel: 'Ubicación',
        location: 'Popayán, Cauca · Mocoa, Putumayo · Colombia',
        whatsappLabel: 'WhatsApp',
        whatsapp: 'Escríbenos',
        hoursLabel: 'Horario',
        hours: 'Lun a Vie, 8:00 - 18:00',
      },
    },
    footer: {
      tagline: 'Ingeniería de software, inteligencia artificial y productos tecnológicos.',
      columns: [
        {
          title: 'Servicios',
          links: [
            { label: 'Desarrollo de software', href: '#servicios' },
            { label: 'Inteligencia Artificial', href: '#servicios' },
            { label: 'Automatización', href: '#servicios' },
            { label: 'Cloud & DevOps', href: '#servicios' },
          ],
        },
        {
          title: 'Waira',
          links: [
            { label: 'Productos', href: '#productos' },
            { label: 'Proyectos', href: '#casos' },
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Contacto', href: '#contacto' },
          ],
        },
      ],
      rights: 'Todos los derechos reservados.',
      madeIn: 'Hecho en Colombia',
    },
    theme: { light: 'Modo claro', dark: 'Modo oscuro', toggle: 'Cambiar tema' },
  },

  en: {
    nav: {
      links: [
        { label: 'Services', href: '#servicios' },
        { label: 'Products', href: '#productos' },
        { label: 'Projects', href: '#casos' },
        { label: 'About', href: '#nosotros' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: "Let's talk",
    },
    hero: {
      eyebrow: '',
      titleLine1: 'We build technology that',
      titleHighlight: 'solves',
      titleLine2: 'real problems',
      subtitle:
        'A Colombian software engineering and AI company. We create products, platforms and automated solutions that transform how organizations operate and deliver value.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'View services',
      availability: 'Available for new projects',
      trustedBy: 'Technologies we work with',
      trustBadges: ['Real engineering', 'Own codebase', 'No middlemen'],
      metrics: [
        { value: '+30', label: 'Projects delivered', suffix: '' },
        { value: '98', label: 'Client satisfaction', suffix: '%' },
        { value: '24/7', label: 'Support & monitoring', suffix: '' },
        { value: '+8', label: 'Countries reached', suffix: '' },
      ],
      visualTitle: 'Intelligent connected systems',
      visualSub: 'APIs, AI agents and automated workflows working as a single ecosystem.',
      visualTags: ['Architecture', 'AI', 'Automation', 'APIs'],
    },
    about: {
      eyebrow: 'About',
      title: 'Engineering with identity',
      description:
        'Waira means "wind" in Quechua: movement, flow, constant evolution. We apply that principle to technology: combining software engineering, artificial intelligence and product vision to build solutions that actually work, scale and transform.',
      mission: {
        title: 'Focus',
        text: 'Solve complex problems with well-built technology. No shortcuts, no empty promises.',
      },
      vision: {
        title: 'Direction',
        text: 'To be a Latin American reference in software engineering, artificial intelligence and technology products with real impact.',
      },
      values: [
        { title: 'Engineering', text: 'Clean code, solid architectures, technically sound decisions.' },
        { title: 'Trust', text: 'Complete transparency in processes, costs and results.' },
        { title: 'Excellence', text: 'We care about every detail, from backend logic to frontend pixels.' },
        { title: 'Vision', text: 'We don\'t just execute. We think in product, scale and evolution.' },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Technical capabilities to build what you envision',
      subtitle: 'Specialized teams covering the complete digital product cycle.',
      items: [
        {
          icon: 'Code2',
          title: 'Software development',
          text: 'Custom web and mobile applications. Robust, secure, ready to scale from day one.',
          benefits: ['Scalable architecture', 'Maintainable code', 'Continuous delivery'],
        },
        {
          icon: 'BrainCircuit',
          title: 'Artificial Intelligence',
          text: 'AI models, conversational assistants and smart automation integrated into your operation.',
          benefits: ['Chatbots & agents', 'RAG systems', 'Generative AI'],
        },
        {
          icon: 'Workflow',
          title: 'Intelligent automation',
          text: 'We remove manual processes and connect your systems end to end with automated workflows.',
          benefits: ['Frictionless workflows', 'APIs & webhooks', 'Real operational savings'],
        },
        {
          icon: 'Cloud',
          title: 'Cloud & DevOps',
          text: 'Reliable infrastructure, total observability and automated deployments on any cloud.',
          benefits: ['High availability', 'CI/CD', 'Cost optimization'],
        },
        {
          icon: 'LineChart',
          title: 'Data & Analytics',
          text: 'Data pipelines, intelligent dashboards and live metrics for informed decisions.',
          benefits: ['Real-time dashboards', 'ETL/ELT', 'Business intelligence'],
        },
        {
          icon: 'Compass',
          title: 'Tech consulting',
          text: 'Architecture strategy, product roadmaps and technical guidance for your team.',
          benefits: ['Tech roadmaps', 'Code audits', 'Mentoring'],
        },
      ],
      cta: "Let's talk about your project",
    },
    products: {
      eyebrow: 'Products',
      title: 'Technology we build',
      subtitle: 'At Waira we don\'t just build software for others. We create our own technology products that solve real problems.',
      badges: { ready: 'Available', coming: 'In development' },
      categoryAvailable: 'Available',
      categoryComing: 'In development',
      learnMore: 'Explore solution',
      items: [
        {
          icon: 'ChatCircle',
          title: 'Guaca: AI Educational Assistant',
          text: 'A RAG-powered smart chatbot for educational institutions. Answers questions about programs, admissions and services using official documents. Supports text and voice.',
          tags: ['RAG', 'LLM', 'Education', 'Voice'],
          badge: 'ready',
        },
        {
          icon: 'Flask',
          title: 'AI-powered Education Platform',
          text: 'Automated generation of exams, summaries, rubrics and educational materials. Supports multiple AI providers with per-institution credits.',
          tags: ['Next.js', 'FastAPI', 'OpenAI', 'Education'],
          badge: 'ready',
        },
        {
          icon: 'Gear',
          title: 'AI Data Extraction API',
          text: 'An API that processes unstructured documents (invoices, contracts, forms) and returns clean structured data ready to integrate.',
          tags: ['FastAPI', 'GPT-4o', 'Python', 'Documents'],
          badge: 'ready',
        },
        {
          icon: 'CreditCard',
          title: 'Payments Infrastructure',
          text: 'Exploring modular financial infrastructure for digital platforms, using specialized technology providers and respecting Colombian regulatory frameworks.',
          tags: ['Fintech', 'Payments', 'API', 'Regulation'],
          badge: 'coming',
        },
        {
          icon: 'Brain',
          title: 'Autonomous AI Agents',
          text: 'Research and prototyping of AI agents capable of executing complex tasks autonomously: analysis, decision and action without constant supervision.',
          tags: ['AI', 'Agents', 'Automation', 'R&D'],
          badge: 'coming',
        },
      ],
      cta: 'Tell us about your project',
    },
    cases: {
      eyebrow: 'Projects',
      title: 'Built to solve',
      subtitle: 'Every project has a real problem behind it. Here is how we solved them.',
      items: [
        {
          tag: 'Financial Automation',
          problem: 'A company needed to process hundreds of PDF invoices every week. Manual processing took hours and caused errors.',
          solution: 'We built an API that reads invoices in any format, extracts structured data with AI and delivers clean JSON ready to integrate.',
          tech: ['FastAPI', 'GPT-4o', 'Python', 'Docker'],
          repo: 'YANCARLOSOFICIAL/api-facturas-2',
          result: 'Processing time reduced from hours to seconds. Accurate data, no manual intervention.',
        },
        {
          tag: 'Digital Education',
          problem: 'Teachers spent hours creating exams, summaries and educational materials manually without support tools.',
          solution: 'We developed a platform that automatically generates exams, rubrics, summaries and educational games using AI, with a per-institution credit system.',
          tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI'],
          repo: 'YANCARLOSOFICIAL/plataforma-educativa-con-IA',
          result: 'Teachers create educational material in minutes instead of hours. Platform used by multiple institutions.',
        },
        {
          tag: 'AI User Support',
          problem: 'A university received hundreds of daily inquiries about programs, admissions and campuses. The support team was overwhelmed.',
          solution: 'We implemented Guaca, a RAG-powered chatbot that queries official institutional documents and responds accurately by text and voice.',
          tech: ['Next.js', 'FastAPI', 'pgvector', 'Redis'],
          repo: 'YANCARLOSOFICIAL/chatbot-uniputumayo',
          result: '24/7 automated support. Inquiries resolved instantly without waiting for an agent.',
        },
      ],
      cta: 'View on GitHub',
    },
    whyWaira: {
      eyebrow: 'Why Waira',
      title: 'We don\'t build like an agency. We build like a product team.',
      subtitle: 'No outsourcing, no middlemen. Direct engineering, real technical decisions.',
      items: [
        {
          icon: 'Code',
          title: 'Real engineering',
          text: 'We write code that scales. Modern architectures, best practices, automated tests and frequent deliveries.',
        },
        {
          icon: 'BrainCircuit',
          title: 'Applied AI, not decorative',
          text: 'We don\'t put "AI" on everything. We use it where it truly solves problems: RAG, agents, intelligent automation.',
        },
        {
          icon: 'Rocket',
          title: 'Product vision',
          text: 'We don\'t just execute tasks. We think about the final product, how it grows, how it\'s maintained, how it generates value.',
        },
        {
          icon: 'Users',
          title: 'Direct communication',
          text: 'You talk to the people designing and building. No sales accounts, no account managers, no unnecessary layers.',
        },
      ],
    },
    tech: {
      eyebrow: '',
      title: 'Technology we work with',
      subtitle: 'Modern tools used by the best engineering teams in the world.',
      groups: [
        { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
        { name: 'Backend', items: ['Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL'] },
        { name: 'Cloud & DevOps', items: ['Vercel', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
        { name: 'AI & Data', items: ['OpenAI', 'LangChain', 'TensorFlow', 'Pandas', 'Vector DBs'] },
      ],
    },
    process: {
      eyebrow: '',
      title: 'How we work',
      subtitle: 'A clear, collaborative process that minimizes risk and accelerates results.',
      steps: [
        { title: 'Discovery', text: 'We understand your business, goals and challenges.' },
        { title: 'Planning', text: 'We define scope, roadmap and success metrics.' },
        { title: 'Architecture', text: 'We design the most suitable technical solution.' },
        { title: 'Development', text: 'We build in short cycles with frequent releases.' },
        { title: 'Quality', text: 'We test thoroughly to ensure performance and security.' },
        { title: 'Deployment', text: 'We launch with confidence and real-time monitoring.' },
        { title: 'Evolution', text: 'We support, optimize and scale your product.' },
      ],
    },
    faq: {
      eyebrow: '',
      title: 'We answer your questions',
      items: [
        {
          q: 'What kind of projects do you build?',
          a: 'We build web and mobile software, AI solutions (chatbots, RAG, agents), process automation, API integrations and cloud projects.',
        },
        {
          q: 'What is your work process?',
          a: 'We work in short cycles with frequent releases: discovery, planning, design, development, testing, deployment and ongoing support.',
        },
        {
          q: 'Do you work with companies outside Colombia?',
          a: 'Yes. We serve remote clients across several Spanish- and English-speaking countries.',
        },
        {
          q: 'Do you offer support after launch?',
          a: 'Yes. We offer support, maintenance and continuous product evolution plans.',
        },
        {
          q: 'How do I request a quote?',
          a: 'Reach out through the contact form or WhatsApp and we will get back to you in under 24 hours.',
        },
      ],
    },
    ctaFinal: {
      title: 'Do you have a problem that technology can solve?',
      subtitle: 'Tell us what you need to build and we will design the best technical solution for your business.',
      primary: 'Tell us your idea',
      secondary: 'Message us on WhatsApp',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your project",
      subtitle: 'Fill out the form and we will contact you in under 24 hours.',
      form: {
        name: 'Full name',
        email: 'Email address',
        company: 'Company',
        message: 'Tell us about your project',
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Thank you! We will contact you soon.',
        errors: {
          name: 'Enter your name',
          email: 'Enter a valid email',
          message: 'Tell us a bit more (minimum 10 characters)',
        },
      },
      info: {
        emailLabel: 'Email',
        email: 'infitechcol308@gmail.com',
        locationLabel: 'Location',
        location: 'Popayán, Cauca · Mocoa, Putumayo · Colombia',
        whatsappLabel: 'WhatsApp',
        whatsapp: 'Message us',
        hoursLabel: 'Hours',
        hours: 'Mon to Fri, 8:00 - 18:00',
      },
    },
    footer: {
      tagline: 'Software engineering, artificial intelligence and technology products.',
      columns: [
        {
          title: 'Services',
          links: [
            { label: 'Software development', href: '#servicios' },
            { label: 'Artificial Intelligence', href: '#servicios' },
            { label: 'Automation', href: '#servicios' },
            { label: 'Cloud & DevOps', href: '#servicios' },
          ],
        },
        {
          title: 'Waira',
          links: [
            { label: 'Products', href: '#productos' },
            { label: 'Projects', href: '#casos' },
            { label: 'About', href: '#nosotros' },
            { label: 'Contact', href: '#contacto' },
          ],
        },
      ],
      rights: 'All rights reserved.',
      madeIn: 'Made in Colombia',
    },
    theme: { light: 'Light mode', dark: 'Dark mode', toggle: 'Toggle theme' },
  },
} as const

export type Dictionary = (typeof dictionary)['es']

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale] as Dictionary
}
