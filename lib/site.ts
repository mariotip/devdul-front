export const siteConfig = {
  name: "DevDul",
  title: "DevDul | Desarrollo de ERP, CRM y apps con Inteligencia Artificial",
  description:
    "Desarrollamos ERP, CRM y aplicaciones web y móviles a la medida, potenciadas con Inteligencia Artificial. Automatiza tu operación y haz crecer tu empresa con DevDul.",
  shortDescription: "ERP, CRM y apps a la medida con Inteligencia Artificial.",
  // En producción define NEXT_PUBLIC_SITE_URL con el dominio real; el valor por defecto
  // evita que las URLs de SEO y Open Graph apunten a localhost si falta la variable.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://devdul.com").replace(/\/+$/, ""),
  locale: "es_MX",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contacto@devdul.com",
  keywords: [
    "desarrollo de software a la medida",
    "ERP a la medida",
    "CRM a la medida",
    "desarrollo de aplicaciones web",
    "desarrollo de apps móviles",
    "integración de inteligencia artificial",
    "IA para empresas",
    "automatización de procesos",
    "software para empresas",
    "DevDul",
  ],
  services: [
    { name: "Desarrollo de ERP a la medida", description: "Sistemas ERP que conectan inventario, ventas, compras y finanzas en un solo lugar." },
    { name: "Desarrollo de CRM a la medida", description: "CRM para dar seguimiento a clientes, oportunidades y ventas." },
    { name: "Aplicaciones web y móviles", description: "Apps rápidas, seguras y escalables hechas a la medida de tu negocio." },
    { name: "Integración de Inteligencia Artificial", description: "Copilotos, automatización y análisis con IA dentro de tus sistemas." },
  ],
  apiUrl: (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8787").replace(/\/$/, ""),
};
