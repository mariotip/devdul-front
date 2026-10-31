# devdul-front

Sitio web de **DevDul**: ERP, CRM, aplicaciones a la medida e integración de Inteligencia Artificial.

Hecho con [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript y Tailwind CSS 4.

## Requisitos

- Node.js 20.9 o superior (recomendado 22, ver `.nvmrc`)
- npm

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # ajusta los valores
npm run dev                  # http://localhost:3000
```

Otros comandos:

| Comando         | Qué hace                         |
| --------------- | -------------------------------- |
| `npm run build` | Compila para producción          |
| `npm run start` | Sirve la versión compilada       |
| `npm run lint`  | Revisa el código con ESLint      |

## Variables de entorno

| Variable                    | Uso                                                   |
| --------------------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | URL pública del sitio (SEO, Open Graph, sitemap)      |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Correo del botón de contacto                          |
| `NEXT_PUBLIC_API_URL`       | URL del backend (`devdul-back`), para uso futuro      |

Todas tienen un valor por defecto, así que el sitio compila aunque no las definas.

## Desplegar en Vercel

1. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio `mariotip/devdul-front`.
2. Vercel detecta Next.js solo. Deja los valores por defecto:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: (vacío, por defecto)
3. En **Environment Variables** agrega las variables de la tabla de arriba
   (por ejemplo `NEXT_PUBLIC_SITE_URL=https://tu-dominio.com`).
4. Pulsa **Deploy**. Cada push a `main` desplegará producción y cada PR tendrá su URL de vista previa.
5. (Opcional) En **Settings > Domains** conecta tu dominio, por ejemplo `devdul.com`.

> El proyecto no usa funciones exclusivas de Vercel, por lo que también puede desplegarse en otros
> proveedores compatibles con Next.js (por ejemplo Cloudflare con OpenNext) si se decide más adelante.

## Estructura

```
app/            Rutas (página principal, 404, robots, sitemap, icono)
components/     Header, Hero, secciones de la landing y UI compartida
lib/site.ts     Configuración del sitio (nombre, URL, correo)
```

La landing incluye hero con mockup de producto, logos de confianza, servicios,
stack tecnológico, proyectos, proceso de trabajo, testimonios y CTA de contacto.
Todo el arte visual (mockups, tarjetas, iconos) está hecho con CSS y SVG: no hay
imágenes externas ni dependencias de UI adicionales.
