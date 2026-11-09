import { siteConfig } from "@/lib/site";

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/brand/devdul-logo.svg`,
      image: `${siteConfig.url}/opengraph-image.png`,
      email: siteConfig.contactEmail,
      description: siteConfig.description,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contactEmail,
        availableLanguage: ["Spanish"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/opengraph-image.png`,
      description: siteConfig.description,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: "MX",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo de software",
        itemListElement: siteConfig.services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", ...service },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.shortDescription,
      inLanguage: "es-MX",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON generado en el build a partir de datos propios, sin entrada de usuarios.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
