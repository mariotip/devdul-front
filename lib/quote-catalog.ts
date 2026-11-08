// Copia del catálogo de devdul-back (src/quote/catalog.ts). Se usa mientras carga
// GET /quote/catalog o si la API no responde; el backend siempre recalcula el total.
// Si cambias horas o módulos, actualízalo en el backend y copia el archivo aquí.

/**
 * Catálogo del cotizador. Es la fuente de verdad de horas por módulo:
 * el front lo pide en GET /quote/catalog y el total de POST /quotes siempre
 * se recalcula aquí, nunca se confía en lo que manda el navegador.
 *
 * Las horas son estimaciones de desarrollo (análisis, código, pruebas y despliegue)
 * para un alcance estándar. Cada categoría tiene un módulo "núcleo" que se incluye
 * solo cuando el cliente elige al menos un módulo de esa categoría.
 */

export type QuoteModule = {
  id: string
  name: string
  description: string
  hours: number
  /** Núcleo de la categoría: se agrega automáticamente. */
  required?: boolean
}

export type QuoteCategory = {
  id: 'crm' | 'saas' | 'erp'
  name: string
  description: string
  modules: QuoteModule[]
}

export const catalog: QuoteCategory[] = [
  {
    id: 'crm',
    name: 'CRM',
    description: 'Gestiona clientes, oportunidades y seguimiento comercial en un solo lugar.',
    modules: [
      { id: 'crm-core', name: 'Núcleo del sistema', description: 'Login, usuarios, roles y permisos, panel principal y despliegue en la nube.', hours: 40, required: true },
      { id: 'crm-contacts', name: 'Contactos y empresas', description: 'Fichas de clientes, empresas, etiquetas, búsqueda y filtros.', hours: 24 },
      { id: 'crm-pipeline', name: 'Embudo de ventas', description: 'Oportunidades en tablero kanban por etapas, montos y probabilidad de cierre.', hours: 32 },
      { id: 'crm-activities', name: 'Actividades y recordatorios', description: 'Tareas, llamadas, reuniones, agenda y avisos de seguimiento.', hours: 20 },
      { id: 'crm-quotes', name: 'Cotizaciones en PDF', description: 'Catálogo de productos, cotizaciones con plantilla de tu marca y envío por correo.', hours: 28 },
      { id: 'crm-email', name: 'Correo integrado', description: 'Envío de correos desde el CRM con plantillas e historial por cliente.', hours: 24 },
      { id: 'crm-whatsapp', name: 'WhatsApp Business', description: 'Conversaciones de WhatsApp ligadas a cada cliente y mensajes con plantilla.', hours: 32 },
      { id: 'crm-campaigns', name: 'Campañas de email marketing', description: 'Segmentos, envíos masivos y métricas de apertura y clics.', hours: 36 },
      { id: 'crm-tickets', name: 'Soporte y tickets', description: 'Mesa de ayuda con estados, prioridades, asignación y tiempos de respuesta.', hours: 32 },
      { id: 'crm-reports', name: 'Reportes y dashboard', description: 'Ventas por vendedor, conversión del embudo y metas en tiempo real.', hours: 28 },
      { id: 'crm-import', name: 'Importar y exportar Excel', description: 'Carga masiva de clientes y exportación de datos a Excel o CSV.', hours: 12 },
      { id: 'crm-mobile', name: 'App móvil para vendedores', description: 'Versión instalable en el celular (PWA) para trabajar en campo.', hours: 48 },
      { id: 'crm-ai-scoring', name: 'IA: calificación de prospectos', description: 'La IA prioriza prospectos y resume el historial de cada cliente.', hours: 40 },
      { id: 'crm-ai-chatbot', name: 'IA: chatbot de atención', description: 'Asistente que responde a clientes 24/7 y registra prospectos en el CRM.', hours: 48 },
    ],
  },
  {
    id: 'saas',
    name: 'SaaS',
    description: 'Tu producto en línea con varias empresas cliente, planes y cobro por suscripción.',
    modules: [
      { id: 'saas-core', name: 'Núcleo multiempresa', description: 'Arquitectura multi-tenant, login, roles, aislamiento de datos y despliegue.', hours: 56, required: true },
      { id: 'saas-onboarding', name: 'Registro y onboarding', description: 'Alta de nuevas empresas, verificación de correo e invitación de usuarios.', hours: 20 },
      { id: 'saas-billing', name: 'Suscripciones y cobros', description: 'Cobro recurrente con Stripe o Mercado Pago, recibos y cambios de plan.', hours: 40 },
      { id: 'saas-plans', name: 'Planes, límites y prueba gratis', description: 'Planes con límites de uso, periodo de prueba y bloqueo por falta de pago.', hours: 24 },
      { id: 'saas-superadmin', name: 'Panel de super administrador', description: 'Vista global de clientes, planes, pagos y soporte.', hours: 32 },
      { id: 'saas-cfdi', name: 'Facturación electrónica CFDI 4.0', description: 'Timbrado de facturas ante el SAT mediante un PAC.', hours: 40 },
      { id: 'saas-notifications', name: 'Notificaciones', description: 'Avisos por correo y dentro de la aplicación.', hours: 20 },
      { id: 'saas-api', name: 'API pública y webhooks', description: 'API documentada con llaves por cliente y eventos webhook.', hours: 36 },
      { id: 'saas-landing', name: 'Sitio de marketing', description: 'Landing page con planes y precios conectada al registro.', hours: 24 },
      { id: 'saas-metrics', name: 'Métricas del negocio', description: 'MRR, cancelaciones, uso por cliente y crecimiento.', hours: 28 },
      { id: 'saas-i18n', name: 'Varios idiomas', description: 'Interfaz en español e inglés (o los idiomas que necesites).', hours: 16 },
      { id: 'saas-auth', name: 'Acceso con Google y 2FA', description: 'Inicio de sesión con Google y verificación en dos pasos.', hours: 16 },
      { id: 'saas-ai-assistant', name: 'IA: asistente integrado', description: 'Asistente que responde preguntas sobre los datos de cada cliente.', hours: 48 },
    ],
  },
  {
    id: 'erp',
    name: 'ERP',
    description: 'Controla inventario, compras, ventas y finanzas de toda tu operación.',
    modules: [
      { id: 'erp-core', name: 'Núcleo del sistema', description: 'Login, usuarios, roles, sucursales, bitácora de cambios y despliegue.', hours: 48, required: true },
      { id: 'erp-inventory', name: 'Inventarios y almacenes', description: 'Existencias por almacén, entradas, salidas, traspasos y lotes.', hours: 48 },
      { id: 'erp-purchases', name: 'Compras y proveedores', description: 'Órdenes de compra, recepción de mercancía y catálogo de proveedores.', hours: 36 },
      { id: 'erp-sales', name: 'Ventas y punto de venta', description: 'Pedidos, remisiones y caja para venta en mostrador.', hours: 48 },
      { id: 'erp-cfdi', name: 'Facturación electrónica CFDI 4.0', description: 'Facturas, notas de crédito y complementos de pago timbrados ante el SAT.', hours: 40 },
      { id: 'erp-receivables', name: 'Cuentas por cobrar y pagar', description: 'Saldos de clientes y proveedores, abonos y antigüedad de saldos.', hours: 36 },
      { id: 'erp-accounting', name: 'Contabilidad', description: 'Catálogo de cuentas SAT, pólizas automáticas y estados financieros.', hours: 64 },
      { id: 'erp-payroll', name: 'Nómina', description: 'Cálculo de nómina, IMSS e ISR y timbrado de recibos.', hours: 72 },
      { id: 'erp-hr', name: 'Recursos humanos', description: 'Expedientes de empleados, vacaciones, incidencias y asistencia.', hours: 32 },
      { id: 'erp-production', name: 'Producción', description: 'Recetas o listas de materiales, órdenes de producción y costos.', hours: 56 },
      { id: 'erp-logistics', name: 'Logística y envíos', description: 'Rutas, entregas, guías y seguimiento de pedidos.', hours: 36 },
      { id: 'erp-reports', name: 'Reportes y BI', description: 'Tableros de ventas, márgenes, inventario y flujo de efectivo.', hours: 32 },
      { id: 'erp-ai-forecast', name: 'IA: pronóstico de demanda', description: 'Predice ventas y sugiere cuándo y cuánto comprar.', hours: 48 },
      { id: 'erp-ai-documents', name: 'IA: lectura de documentos', description: 'Captura automática de facturas y documentos de proveedores.', hours: 40 },
    ],
  },
]

export const DEFAULT_HOURLY_RATE_MXN = 800
/** IVA en México. */
export const DEFAULT_IVA_RATE = 0.16

const modulesById = new Map(
  catalog.flatMap((category) => category.modules.map((m) => [m.id, { ...m, category: category.id }] as const)),
)

export type QuoteLine = { id: string; category: QuoteCategory['id']; name: string; hours: number; amountMxn: number }

export type QuoteResult = {
  items: QuoteLine[]
  totalHours: number
  hourlyRate: number
  /** Horas × tarifa, sin IVA. */
  subtotalMxn: number
  ivaRate: number
  ivaMxn: number
  /** Subtotal + IVA. */
  totalMxn: number
}

export class UnknownModuleError extends Error {
  constructor(public ids: string[]) {
    super(`Módulos desconocidos: ${ids.join(', ')}`)
  }
}

export function parseHourlyRate(value: string | undefined): number {
  const rate = Math.round(Number(value))
  return Number.isFinite(rate) && rate > 0 ? rate : DEFAULT_HOURLY_RATE_MXN
}

/** Tasa de IVA como fracción (0.16). Acepta 0 para no cobrar IVA. */
export function parseIvaRate(value: string | undefined): number {
  if (value === undefined || value.trim() === '') return DEFAULT_IVA_RATE
  const rate = Number(value)
  return Number.isFinite(rate) && rate >= 0 && rate < 1 ? rate : DEFAULT_IVA_RATE
}

/**
 * Calcula la cotización para los módulos elegidos. Agrega el núcleo de cada
 * categoría con al menos un módulo y descarta ids repetidos. Los montos por
 * módulo y el subtotal van sin IVA; totalMxn ya lo incluye.
 */
export function computeQuote(moduleIds: string[], hourlyRate: number, ivaRate = DEFAULT_IVA_RATE): QuoteResult {
  const unknown = moduleIds.filter((id) => !modulesById.has(id))
  if (unknown.length) throw new UnknownModuleError([...new Set(unknown)])

  const chosen = new Set(moduleIds)
  const categories = new Set(moduleIds.map((id) => modulesById.get(id)!.category))

  const items: QuoteLine[] = []
  for (const category of catalog) {
    if (!categories.has(category.id)) continue
    for (const mod of category.modules) {
      if (mod.required || chosen.has(mod.id)) {
        items.push({
          id: mod.id,
          category: category.id,
          name: mod.name,
          hours: mod.hours,
          amountMxn: mod.hours * hourlyRate,
        })
      }
    }
  }

  const totalHours = items.reduce((sum, item) => sum + item.hours, 0)
  const subtotalMxn = totalHours * hourlyRate
  const ivaMxn = Math.round(subtotalMxn * ivaRate)
  return { items, totalHours, hourlyRate, subtotalMxn, ivaRate, ivaMxn, totalMxn: subtotalMxn + ivaMxn }
}
